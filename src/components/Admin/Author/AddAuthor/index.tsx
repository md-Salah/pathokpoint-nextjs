"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { AuthorForm } from '@/components/Admin/Author';
import { useToken } from '@/hooks';
import { Author } from '@/interface';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

const initialAuthor: Author = {
  id: "",
  name: "",
  slug: "",
  description: null,
  birth_date: null,
  death_date: null,
  book_published: null,
  city: null,
  country: null,
  is_popular: false,
  is_in_menu: false,
};

const AddAuthor = () => {
  const [author, setAuthor] = useState<Author>(initialAuthor);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { token } = useToken();

  const handleSubmit = async () => {
    setErr(null);
    setLoading(true);
    try {
      const res = await axiosInstance.post("/author", author, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess(true);
      setAuthor(res.data);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const handleAddAnother = () => {
    setAuthor(initialAuthor);
    setSuccess(false);
  };

  return (
    <div className="bg-white admin-container">
      <div className="border-b border-[#E6E6E6] py-4">
        <h1 className="font-medium lg:px-14">Add Author</h1>
      </div>
      <AuthorForm author={author} setAuthor={setAuthor} />
      <div className="lg:px-14 mb-2 lg:mb-8">
        <div className="mt-12 flex justify-center lg:justify-end">
          {err && <p className="text-error text-sm">{err}</p>}
          {success && (
            <p className="text-success font-medium">
              Author is added successfully
            </p>
          )}
        </div>
        <div className="mt-4 flex items-center justify-center sm:justify-end gap-2">
          {success ? (
            <div className='flex flex-wrap gap-2 justify-center'>
              <Link
                href={`/authors/${author.slug}`}
                target="_blank"
                className="btn btn-secondary btn-outline w-32"
              >
                View
              </Link>
              <Link
                href={`/admin/authors/edit/${author.id}`}
                className="btn btn-error w-32"
              >
                Edit
              </Link>
              <button className="btn btn-secondary w-72 sm:w-52" onClick={handleAddAnother}>
                <FiPlus size={20} className="inline-block" />
                Add Another Author
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

export default AddAuthor;
