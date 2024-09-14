"use client";

import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { PublisherForm } from '@/components/Admin/Publisher';
import { useToken } from '@/hooks';
import { Publisher } from '@/interface';
import { Error, Skeleton } from '@/micro-components/Admin';
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
    setTimeout(() => {
      setTouched(false);
    }, 300);
  };

  const handleTouched = () => {
    setTouched(true);
    setSuccess(false);
    setErr(null);
  };

  if (isLoading) return <Skeleton />;
  if (error) return <Error err={error} />;
  if (!publisher) return <Error err="Publisher not found" />;

  return (
    <div className="bg-white admin-container">
      <div className="border-b border-[#E6E6E6] py-4">
        <h1 className="font-medium lg:px-14">Edit Publisher</h1>
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
