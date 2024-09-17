"use client";

import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

import { AuthorForm } from '@/components/Admin/Author';
import Modal from '@/components/Modal';
import { useToken } from '@/hooks';
import { Author } from '@/interface';
import { AreYouSure, Error, Skeleton } from '@/micro-components/Admin';
import axiosInstance, { extractAxiosErr, fetchWithToken } from '@/utils/axiosConfig';

interface Props {
  author_id: string;
}

const EditAuthor = ({ author_id }: Props) => {
  const [author, setAuthor] = useState<Author | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const [logo, setLogo] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);

  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/author/id/${author_id}`, token, refresh],
    ([url, token, refresh]) => fetchWithToken(url, token)
  );

  useEffect(() => {
    if (data) setAuthor(data);
  }, [data]);

  const handleUpdate = async () => {
    if (!author) return;
    setErr(null);
    setLoading(true);
    try {
      await axiosInstance.patch(`/author/${author.id}`, author, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Upload logo if exists
      if (logo) {
        const formData = new FormData();
        formData.append("files", logo);
        await axiosInstance.post(
          `/image/admin?author_id=${author.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      // Upload banner if exists
      if (banner) {
        const formData = new FormData();
        formData.append("files", banner);
        await axiosInstance.post(
          `/image/admin?author_id=${author.id}&is_banner=true`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      setSuccess(true);
      setRefresh(!refresh);
      setLogo(null);
      setBanner(null);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setAuthor(data);
    setLogo(null);
    setBanner(null);
    setTouched(false);
  };

  const handleTouched = () => {
    setTouched(true);
    setSuccess(false);
    setErr(null);
  };

  const handleDelete = async () => {
    if (!author) return;
    setErr(null);
    setLoading(true);
    try {
      await axiosInstance.delete(`/author/${author.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRefresh(!refresh);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
      modalRef.current?.close();
    }
  };

  if (isLoading) return <Skeleton />;
  if (error) return <Error err={error} />;
  if (!author) return <Error err="Author not found" />;

  return (
    <div className="bg-white admin-container">
      <div className="border-b border-[#E6E6E6] py-2 lg:px-14 flex justify-between items-center">
        <h1 className="font-medium">Edit Author</h1>
        <button
          className="btn btn-sm btn-error"
          onClick={() => modalRef.current?.showModal()}
        >
          Delete
        </button>
        <Modal modalRef={modalRef}>
          <AreYouSure
            loading={loading}
            err={err}
            handleYes={handleDelete}
            handleNo={() => {
              modalRef.current?.close();
            }}
          />
        </Modal>
      </div>
      <AuthorForm
        author={author}
        setAuthor={setAuthor}
        setLogo={setLogo}
        setBanner={setBanner}
        handleTouched={handleTouched}
      />
      <div className="lg:px-14 mb-4 sm:mb-8">
        <div className="mt-12 flex justify-center lg:justify-end">
          {err && <p className="text-error text-sm">{err}</p>}
          {success && (
            <p className="text-success text-sm">
              Author is updated successfully
            </p>
          )}
        </div>
        {touched && (
          <div className="mt-4 flex items-center justify-center lg:justify-end gap-2">
            <button
              className="btn btn-md btn-error btn-outline w-32"
              onClick={handleCancel}
              disabled={loading || success}
            >
              Cancel
            </button>
            <button
              className="btn btn-md btn-primary w-32"
              onClick={handleUpdate}
              disabled={loading}
            >
              {loading && <span className="loading loading-spinner"></span>}
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditAuthor;
