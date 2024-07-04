import { ConditionBadge, InStockBadge } from "@/micro-components";
import { CiMenuKebab } from "react-icons/ci";
import { bookGlobalOptions, books, bookSortOptions } from "@/constants";
import Sidebar from "@/components/Sidebar";
import { CiSearch } from "react-icons/ci";
import React from "react";
import Link from "next/link";

const Books = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[95%] sm:w-[80%] p-4 sm:p-8 bg-white rounded-md my-8 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Books</h1>
          <button className="btn btn-secondary text-white text-base rounded-lg">
            <Link href={"/admin/product-management/books/add-book"}>
              Add Book
            </Link>
          </button>
        </div>
        <div className="pb-4 grid grid-cols-2 grid-flow-row gap-3 sm:flex sm:items-center sm:space-x-2 text-xs sm:text-sm">
          <div className="flex items-center">
            <select className="select max-w-xs select-sm sm:select-md">
              {bookGlobalOptions.map((option, index) => (
                <option selected={option.id === 1} key={index}>
                  {option.title}
                </option>
              ))}
            </select>
            <label className="w-full relative">
              <input
                type="text"
                placeholder="Search"
                className="input w-40 relative rounded-r-lg input-sm sm:input-md"
              />
              <CiSearch className="absolute z-20 right-2 top-3" size={20} />
            </label>
          </div>
          <div></div>
          <select className="select max-w-xs rounded-lg select-sm sm:select-md">
            <option disabled selected>
              Stock
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select max-w-xs rounded-lg select-sm sm:select-md">
            <option disabled selected>
              Condition
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select max-w-xs rounded-lg select-sm sm:select-md">
            <option disabled selected>
              Cover
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select max-w-xs rounded-lg select-sm sm:select-md">
            <option disabled selected>
              Author
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select max-w-xs rounded-lg select-sm sm:select-md">
            <option disabled selected>
              Publisher
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select max-w-xs rounded-lg select-sm sm:select-md">
            <option disabled selected>
              Category
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select max-w-xs rounded-lg select-sm sm:select-md">
            <option disabled selected>
              Tag
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select max-w-xs rounded-lg select-sm sm:select-md">
            <option disabled selected>
              Sort
            </option>
            {bookSortOptions.map((option, index) => (
              <option key={index}>{option.title}</option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full text-xs sm:text-sm">
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
                  <td>{book.name}</td>
                  <td>{book.authors[0].name}</td>
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
                    <button className="btn btn-primary text-white btn-sm rounded-lg px-6">
                      Edit
                    </button>
                  </td>
                  <td>
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <CiMenuKebab
                        tabIndex={0}
                        role="button"
                        color="#363739"
                        size={18}
                        className="text-center"
                      />

                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-36"
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
      </div>
    </div>
  );
};

export default Books;
