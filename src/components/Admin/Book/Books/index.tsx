"use client";
import Link from 'next/link';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import useSWR from 'swr';

import { FilterInMobile, PaginationHandler } from '@/components';
import { useToken } from '@/hooks';
import { BookAdmin } from '@/interface';
import { DataCount } from '@/micro-components';
import { Error, KeyValueFilter, SearchBar } from '@/micro-components/Admin';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

import Item from './Item';

interface Props {
  searchParams?: any;
}

const Books = ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();

  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/book/all/admin?order_by=-created_at&per_page=20&${query}`, token],
    ([url, token]) => fetchWithTokenAndHeader(url, token)
  );

  if (error) return <Error err={error} />;
  return (
    <div className="admin-container bg-white">
      <div className="flex justify-between h-14">
        <div>
          <h1 className="text-lg sm:text-2xl font-medium mb-1">Books</h1>
          {data && (
            <DataCount
              currentPage={parseInt(data.headers["x-current-page"])}
              perPage={parseInt(data.headers["x-per-page"])}
              totalCount={parseInt(data.headers["x-total-count"])}
            />
          )}
        </div>
        <Link
          href="/admin/books/add-book"
          className="btn btn-secondary btn-sm lg:h-11"
        >
          <FiPlus size={20} className="inline-block" />
          Add Book
        </Link>
      </div>

      {/* Filters */}
      <div className="mt-4 flex overflow-x-scroll pb-2 gap-2">
        <div className="max-w-72">
          <SearchBar />
        </div>
        <div className="max-w-36">
          <KeyValueFilter name="sku" placeholder="SKU" />
        </div>
        <div className="max-w-36">
          <KeyValueFilter name="public_id" placeholder="Public ID" />
        </div>
        <FilterInMobile className="btn-sm btn-outline btn-primary w-24 h-10 lg:btn-md" />
      </div>

      {/* Table */}
      {isLoading ? (
        <div className="mt-4 skeleton h-96"></div>
      ) : (
        <>
          {data?.data.length === 0 ? (
            <p className="text-black04 py-10 text-center mt-4">
              No result found
            </p>
          ) : (
            <div className="mt-4 overflow-x-auto min-h-64">
              <table className="table w-full text-xs sm:text-sm table-pin-rows">
                <thead>
                  <tr>
                    <th>
                      SKU &<br /> Public ID
                    </th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>
                      Cover &<br /> Condition
                    </th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Stock</th>
                    <th>
                      Manage
                      <br />
                      Stock
                    </th>
                    <th>Actions</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((book: BookAdmin) => (
                    <Item key={book.id} book={book} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Pagination */}
      {data && (
        <div className="mt-8 flex justify-end">
          <PaginationHandler totalPages={data.headers["x-total-pages"]} />
        </div>
      )}
    </div>
  );
};

export default Books;
