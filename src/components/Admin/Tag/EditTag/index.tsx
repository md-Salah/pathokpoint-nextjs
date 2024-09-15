"use client";

import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { TagForm } from '@/components/Admin/Tag';
import { useToken } from '@/hooks';
import { Tag } from '@/interface';
import { Error, Skeleton } from '@/micro-components/Admin';
import axiosInstance, { extractAxiosErr, fetchWithToken } from '@/utils/axiosConfig';

interface Props {
  tag_id: string;
}

const EditTag = ({ tag_id }: Props) => {
  const [tag, setTag] = useState<Tag | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);

  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/tag/id/${tag_id}`, token, refresh],
    ([url, token, refresh]) => fetchWithToken(url, token)
  );

  useEffect(() => {
    if (data) setTag(data);
  }, [data]);

  const handleUpdate = async () => {
    if (!tag) return;
    setErr(null);
    setLoading(true);
    try {
      await axiosInstance.patch(`/tag/${tag.id}`, tag, {
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
    setTag(data);
    setTouched(false);
  };

  const handleTouched = () => {
    setTouched(true);
    setSuccess(false);
    setErr(null);
  };

  if (isLoading) return <Skeleton />;
  if (error) return <Error err={error} />;
  if (!tag) return <Error err="Tag not found" />;

  return (
    <div className="bg-white admin-container">
      <div className="border-b border-[#E6E6E6] py-4">
        <h1 className="font-medium lg:px-14">Edit Tag</h1>
      </div>
      <TagForm tag={tag} setTag={setTag} handleTouched={handleTouched} />
      <div className="lg:px-14 mb-4 sm:mb-8">
        <div className="mt-12 flex justify-center lg:justify-end">
          {err && <p className="text-error text-sm">{err}</p>}
          {success && (
            <p className="text-success text-sm">Tag is updated successfully</p>
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

export default EditTag;
