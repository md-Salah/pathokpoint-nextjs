"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { TagForm } from '@/components/Admin/Tag';
import { useToken } from '@/hooks';
import { Tag } from '@/interface';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

const initialTag: Tag = {
  id: "",
  name: "",
  slug: "",
  private: false,
  is_in_menu: false,
};

const AddTag = () => {
  const [tag, setTag] = useState<Tag>(initialTag);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { token } = useToken();

  const handleSubmit = async () => {
    setErr(null);
    setLoading(true);
    try {
      const res = await axiosInstance.post("/tag", tag, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess(true);
      setTag(res.data);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const handleAddAnother = () => {
    setTag(initialTag);
    setSuccess(false);
  };

  return (
    <div className="bg-white admin-container">
      <div className="border-b border-[#E6E6E6] py-4">
        <h1 className="font-medium lg:px-14">Add Tag</h1>
      </div>
      <TagForm tag={tag} setTag={setTag} />
      <div className="lg:px-14 mb-2 lg:mb-8">
        <div className="mt-12 flex justify-center lg:justify-end">
          {err && <p className="text-error text-sm">{err}</p>}
          {success && (
            <p className="text-success font-medium">
              Tag is added successfully
            </p>
          )}
        </div>
        <div className="mt-4 flex items-center justify-center sm:justify-end gap-2">
          {success ? (
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                href={`/books?tag__slug__in=${tag.slug}`}
                target="_blank"
                className="btn btn-secondary btn-outline w-32"
              >
                View
              </Link>
              <Link
                href={`/admin/tags/edit/${tag.id}`}
                className="btn btn-error w-32"
              >
                Edit
              </Link>
              <button
                className="btn btn-secondary w-72 sm:w-52"
                onClick={handleAddAnother}
              >
                <FiPlus size={20} className="inline-block" />
                Add Another Tag
              </button>
            </div>
          ) : (
            <button
              className="btn btn-md btn-primary w-full sm:w-52 sm:max-w-52"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading && <span className="loading loading-spinner"></span>}
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTag;
