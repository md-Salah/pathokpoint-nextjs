"use client";
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

import { BookForm } from '@/components/Admin/Book';
import Modal from '@/components/Modal';
import { useToken } from '@/hooks';
import { BookAdmin } from '@/interface';
import { AreYouSure, Error, Skeleton } from '@/micro-components/Admin';
import axiosInstance, { extractAxiosErr, fetchWithToken } from '@/utils/axiosConfig';

interface Props {
  public_id: string;
}

const EditBook = ({ public_id }: Props) => {
  const [book, setBook] = useState<BookAdmin | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const [images, setImages] = useState<File[]>([]);

  const { token } = useToken();
  const { data, isLoading, error } = useSWR(
    [`/book/admin/public_id/${public_id}`, token, refresh],
    ([url, token, refresh]) => fetchWithToken(url, token)
  );

  useEffect(() => {
    if (data) setBook(data);
  }, [data]);

  const handleUpdate = async () => {
    if (!book) return;
    setErr(null);
    setLoading(true);
    try {
      await axiosInstance.patch(
        `/book/${book.id}`,
        {
          ...book,
          authors: book.authors.map((author) => author.id),
          categories: book.categories.map((category) => category.id),
          publisher_id: book.publisher ? book.publisher.id : null,
          translators: book.translators.map((translator) => translator.id),
          tags: book.tags.map((tag) => tag.id),
          images: book.images.map((image) => image.id),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Upload images if exists
      if (images.length > 0) {
        const formData = new FormData();
        images.forEach((image) => formData.append("files", image));
        await axiosInstance.post(
          `/image/admin?book_id=${book.id}&is_append=true`,
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
      setImages([]);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setBook(data);
    setImages([]);
    setTouched(false);
  };

  const handleTouched = () => {
    setTouched(true);
    setSuccess(false);
    setErr(null);
  };

  const handleDelete = async () => {
    if (!book) return;
    setErr(null);
    setLoading(true);
    try {
      await axiosInstance.delete(`/book/${book.id}`, {
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
  if (!book) return <Error err="Book not found" />;

  return (
    <div className="bg-white admin-container">
      <div className="border-b border-[#E6E6E6] py-2 lg:px-14 flex justify-between items-center">
        <h1 className="font-medium">Edit Book</h1>
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
      <BookForm
        book={book}
        setBook={setBook}
        handleTouched={handleTouched}
        setImages={setImages}
        success={success}
      />
      <div className="lg:px-14 mb-4 sm:mb-8">
        <div className="mt-12 flex justify-center lg:justify-end">
          {err && <p className="text-error text-sm">{err}</p>}
          {success && (
            <p className="text-success text-sm">Book is updated successfully</p>
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

export default EditBook;
