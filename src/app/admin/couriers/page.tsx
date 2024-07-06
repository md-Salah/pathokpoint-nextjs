"use client";
import { Pagination, Sidebar } from "@/components";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const Couriers = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChangeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[95%] sm:w-[80%] p-4 sm:p-8 bg-white rounded-md my-8 mx-auto flex flex-col space-y-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Courier</h1>
          <button className="btn btn-secondary btn-sm sm:btn-md text-white text-sm sm:text-base rounded-lg">
            <Link href={"/admin/couriers/add-courier"}>Add Courier</Link>
          </button>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center p-2 border border-gray-300 rounded-lg w-[20%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l3.85 3.85a1 1 0 01-1.414 1.414l-3.85-3.85zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Courier"
              className="ml-2 w-full border-none focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full text-xs sm:text-sm">
            <thead className="bg-base-200">
              <tr>
                <th>Company Name</th>
                <th>Method Name</th>
                <th>Base Charge</th>
                <th>Weight Charge (kg)</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Delivery Tiger</td>
                <td>Inside Dhaka</td>
                <td>60</td>
                <td>700</td>
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
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-[#6F6E77] py-6">
          <span>1-11 of 1260 Authors</span>
          <div className="flex items-center space-x-3">
            <span>The page you’re on</span>
            <Pagination
              currentPage={currentPage}
              handleChangeCurrentPage={handleChangeCurrentPage}
              totalPages={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couriers;
