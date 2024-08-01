import { ConditionBadge, InStockBadge } from "@/micro-components";
import { GoKebabHorizontal } from "react-icons/go";
import { bookGlobalOptions, books, bookSortOptions } from "@/constants";
import { FiPlus } from "react-icons/fi";
import React from "react";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { IPagination } from "@/interface";
import { isEnglish } from "@/utils";

type Props = {
  pagination: IPagination;
};

const BooksContent = ({ pagination }: Props) => {
  const { currentPage, totalPages, handleChangeCurrentPage } = pagination;
  return (
    <div className="w-[95%] sm:w-[80%] min-h-screen p-4 sm:p-8 bg-white rounded-md my-8 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-medium">Books</h1>
        <button className="btn btn-secondary font-medium text-white text-base rounded-lg">
          <Link
            href={"/admin/product-management/books/add-book"}
            className="flex items-center space-x-4"
          >
            <FiPlus color="#ffffff" size={20} />
            Add Book
          </Link>
        </button>
      </div>
      <div className="pb-4 grid grid-cols-2 grid-flow-row gap-3 sm:flex sm:items-center sm:space-x-2 text-xs sm:text-sm">
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
        <div></div>
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
      </div>
      <div className="overflow-y-hidden overflow-x-auto relative">
        <table className="table w-full text-xs sm:text-sm table-pin-rows">
          <thead className="bg-base-200">
            <tr>
              <th>Public ID & SKU</th>
              <th>Name & Slug</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Edition</th>
              <th>Cover</th>
              <th>Condition</th>
              <th>Regular Price</th>
              <th>Sale Price</th>
              <th>Stock</th>
              <th>Stock Status</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.isbn}</td>
                <td className={`${!isEnglish(book.name) && "font-bn"}`}>
                  {book.name}
                </td>
                <td
                  className={`${!isEnglish(book.authors[0].name) && "font-bn"}`}
                >
                  {book.authors[0].name}
                </td>
                <td>{book.publisher.name}</td>
                <td>{book.edition}</td>
                <td>{book.cover}</td>
                <td>
                  <ConditionBadge condition={book.condition} />
                </td>
                <td>${book.regular_price}</td>
                <td>${book.sale_price}</td>
                <td>{book.quantity}</td>
                <td className="text-xs font-semibold">
                  {book.quantity > 0 ? (
                    <span className="text-success">In Stock</span>
                  ) : (
                    <span className="text-error">Out of Stock</span>
                  )}
                </td>
                <td>
                  <button className="btn btn-outline btn-primary text-white btn-sm rounded-lg px-6">
                    Edit
                  </button>
                </td>
                <td>
                  <div className="dropdown dropdown-bottom dropdown-end z-20">
                    <div tabIndex={0} role="button">
                      <GoKebabHorizontal
                        color="#363739"
                        size={18}
                        className="text-center rotate-90"
                      />
                    </div>

                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-36"
                    >
                      <li>
                        <a>Copy</a>
                      </li>
                      <li>
                        <a>Delete</a>
                      </li>
                      <li>
                        <a>Out of Stock</a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-[#6F6E77] py-6">
        <span>1-11 of 1260 Authors</span>
        <div className="flex items-center space-x-3">
          <span>The page you’re on</span>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleChangeCurrentPage={handleChangeCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default BooksContent;
