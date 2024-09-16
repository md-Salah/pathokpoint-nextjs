"use client";

import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

import { PublisherForm } from '@/components/Admin/Publisher';
import Modal from '@/components/Modal';
import { useToken } from '@/hooks';
import { Publisher } from '@/interface';
import { AreYouSure, Error, Skeleton } from '@/micro-components/Admin';
import axiosInstance, { extractAxiosErr, fetchWithToken } from '@/utils/axiosConfig';

interface Props {
  publisher_id: string;
}

const EditPublisher = ({ publisher_id }: Props) => {
  const [publisher, setPublisher] = useState<Publisher | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/publisher/id/${publisher_id}`, token, refresh],
    ([url, token, refresh]) => fetchWithToken(url, token)
  );

  useEffect(() => {
    if (data) setPublisher(data);
  }, [data]);

  const handleUpdate = async () => {
    if (!publisher) return;
    setErr(null);
    setLoading(true);
    try {
      await axiosInstance.patch(`/publisher/${publisher.id}`, publisher, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess(true);
      setRefresh(!refresh);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setPublisher(data);
    setTouched(false);
  };

  const handleTouched = () => {
    setTouched(true);
    setSuccess(false);
    setErr(null);
  };

  const handleDelete = async () => {
    if (!publisher) return;
    setErr(null);
    setLoading(true);
    try {
      await axiosInstance.delete(`/publisher/${publisher.id}`, {
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
  if (!publisher) return <Error err="Publisher not found" />;

  return (
    <div className="bg-white admin-container">
      <div className="border-b border-[#E6E6E6] py-2 lg:px-14 flex justify-between items-center">
        <h1 className="font-medium">Edit Publisher</h1>
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
      <PublisherForm
        publisher={publisher}
        setPublisher={setPublisher}
        handleTouched={handleTouched}
      />
      <div className="lg:px-14 mb-4 sm:mb-8">
        <div className="mt-12 flex justify-center lg:justify-end">
          {err && <p className="text-error text-sm">{err}</p>}
          {success && (
            <p className="text-success text-sm">
              Publisher is updated successfully
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

export default EditPublisher;
