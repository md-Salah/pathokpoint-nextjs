"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { BookForm } from '@/components/Admin/Book';
import { useToken } from '@/hooks';
import { BookAdmin } from '@/interface';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

import { initialBook } from './constant';

const AddBook = () => {
  const [book, setBook] = useState<BookAdmin>(initialBook);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { token } = useToken();

  const handleSubmit = async () => {
    setErr(null);
    setLoading(true);
    try {
      const res = await axiosInstance.post(
        "/book",
        {
          ...book,
          authors: book.authors.map((author) => author.id),
          categories: book.categories.map((category) => category.id),
          publisher: book.publisher ? book.publisher.id : null,
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
      setSuccess(true);
      setBook(res.data);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const handleAddAnother = () => {
    setBook(initialBook);
    setSuccess(false);
  };

  return (
    <div className="bg-white admin-container">
      <div className="border-b border-[#E6E6E6] py-4">
        <h1 className="font-medium lg:px-14">Add Book</h1>
      </div>
      <BookForm book={book} setBook={setBook} />
      <div className="lg:px-14 mb-2 lg:mb-8">
        <div className="mt-12 flex justify-center lg:justify-end">
          {err && <p className="text-error text-sm">{err}</p>}
          {success && (
            <p className="text-success font-medium">
              Book is added successfully
            </p>
          )}
        </div>
        <div className="mt-4 flex items-center justify-center sm:justify-end gap-2">
          {success ? (
            <div className='flex flex-wrap gap-2 justify-center'>
              <Link
                href={`/books/${book.public_id}/${book.slug}`}
                target="_blank"
                className="btn btn-secondary btn-outline w-32"
              >
                View
              </Link>
              <Link
                href={`/admin/books/edit/${book.public_id}`}
                className="btn btn-error w-32"
              >
                Edit
              </Link>
              <button className="btn btn-secondary w-72 sm:w-52" onClick={handleAddAnother}>
                <FiPlus size={20} className="inline-block" />
                Add Another Book
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

export default AddBook;
