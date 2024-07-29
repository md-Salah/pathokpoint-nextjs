import React from "react";
import { Pagination } from "@/components";
import Link from "next/link";
import { IPagination } from "@/interface";
import { FiPlus } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";

type Props = {
  pagination: IPagination;
};

const AdminCouriers = ({ pagination }: Props) => {
  const { currentPage, handleChangeCurrentPage, totalPages } = pagination;
  return (
    <div className="w-[95%] sm:w-[80%] p-4 sm:p-8 bg-white rounded-md my-8 mx-auto flex flex-col space-y-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl font-medium">Courier</h1>
        <button className="btn btn-secondary btn-sm sm:btn-md text-white text-sm sm:text-base rounded-lg">
          <Link
            href={"/admin/couriers/add-courier"}
            className="flex items-center space-x-4"
          >
            <FiPlus color="#ffffff" size={20} />
            Add Courier
          </Link>
        </button>
      </div>
      <div className="flex justify-end">
        <label className="input input-bordered rounded-lg flex items-center gap-2 w-[20%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-6 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow" placeholder="Search Courier" />
        </label>
      </div>
      <div className="overflow-y-hidden overflow-x-auto relative pt-6">
        <table className="table w-full text-xs sm:text-sm table-pin-rows">
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
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <tr key={item}>
                <td>Delivery Tiger</td>
                <td>Inside Dhaka</td>
                <td>60</td>
                <td>700</td>
                <td>
                  <button className="btn btn-outline btn-primary text-white btn-sm rounded-lg px-6">
                    Edit
                  </button>
                </td>
                <td>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button">
                      <GoKebabHorizontal
                        color="#363739"
                        size={18}
                        className="text-center rotate-90"
                      />
                    </div>

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
      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-[#6F6E77] py-6">
        <span>1-11 of 1260 Authors</span>
        <div className="flex items-center space-x-3">
          <span>The page you’re on</span>
          <Pagination
            currentPage={currentPage}
            handleChangeCurrentPage={handleChangeCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCouriers;
