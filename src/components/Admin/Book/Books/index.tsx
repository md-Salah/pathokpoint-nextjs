"use client";
import Link from 'next/link';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import useSWR from 'swr';

import PaginationHandler from '@/components/PaginationHandler';
import { useToken } from '@/hooks';
import { Book } from '@/interface';
import { DataCount } from '@/micro-components';
import { Error, Skeleton } from '@/micro-components/Admin';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

import Item from './Item';
import Search from './Search';

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
      {/* <div className="pb-4 grid grid-cols-2 grid-flow-row gap-3 sm:flex sm:items-center sm:space-x-2 text-xs sm:text-sm">
        <div className="flex items-center">
          <select className="select max-w-xs select-sm rounded-l-lg rounded-r-none">
            {bookGlobalOptions.map((option, index) => (
              <option value={option.id} selected={option.id === 1} key={index}>
                {option.title}
              </option>
            ))}
          </select>
          <label className="input rounded-r-lg rounded-l-none input-sm flex items-center gap-2">
            <input type="text" className="grow w-40" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <select className="select max-w-xs rounded-lg select-sm">
          <option disabled selected>
            Stock
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select max-w-xs rounded-lg select-sm">
          <option disabled selected>
            Condition
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select max-w-xs rounded-lg select-sm">
          <option disabled selected>
            Cover
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select max-w-xs rounded-lg select-sm">
          <option disabled selected>
            Author
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select max-w-xs rounded-lg select-sm">
          <option disabled selected>
            Publisher
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select max-w-xs rounded-lg select-sm">
          <option disabled selected>
            Category
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select max-w-xs rounded-lg select-sm">
          <option disabled selected>
            Tag
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select max-w-xs rounded-lg select-sm">
          <option disabled selected>
            Sort
          </option>
          {bookSortOptions.map((option, index) => (
            <option key={index}>{option.title}</option>
          ))}
        </select>
      </div> */}

      <div className="mt-4">
        <div className="max-w-72">
          <Search />
        </div>
      </div>

      {/* Table */}
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="mt-4 overflow-x-auto min-h-64">
          <table className="table w-full text-xs sm:text-sm table-pin-rows">
            <thead className="bg-base-200">
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
              {data &&
                data.data.map((book: Book) => (
                  <Item key={book.id} book={book} />
                ))}
            </tbody>
          </table>
        </div>
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
