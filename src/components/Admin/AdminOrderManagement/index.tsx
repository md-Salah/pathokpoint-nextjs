"use client";
import { OrderTabOptions, Pagination } from "@/components";
import Link from "next/link";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { OrderStatusBadge } from "@/micro-components";
import { orderStatuses } from "@/constants/constants";
import { IPagination } from "@/interface";
import { FiPlus } from "react-icons/fi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoKebabHorizontal } from "react-icons/go";

type Props = {
  orderTab: {
    tabs: {
      name: string;
      count: number;
    }[];
    handleSetActiveTabOption: (tab: string) => void;
    activeTab: string;
  };
  datePicker: {
    startDate: Date | null;
    setStartDate: (date: Date | null) => void;
    endDate: Date | null;
    setEndDate: (date: Date | null) => void;
  };
  pagination: IPagination;
};

const AdminOrderManagement = ({ orderTab, datePicker, pagination }: Props) => {
  const { tabs, handleSetActiveTabOption, activeTab } = orderTab;
  const { startDate, endDate, setStartDate, setEndDate } = datePicker;
  const { currentPage, totalPages, handleChangeCurrentPage } = pagination;
  return (
    <div className="w-[95%] sm:w-[80%] p-4 sm:p-8 bg-white rounded-md my-8 mx-auto flex flex-col space-y-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg sm:text-2xl font-medium text-[#363739]">
          Orders List
        </h1>
        <button className="btn btn-secondary btn-sm sm:btn-md text-white text-sm sm:text-base rounded-lg">
          <Link
            href={"/admin/order-management/add-order"}
            className="flex items-center space-x-4"
          >
            <FiPlus color="#ffffff" size={20} />
            Add Order
          </Link>
        </button>
      </div>
      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between w-full">
        <OrderTabOptions
          tabOptions={tabs}
          handleSetActionOption={handleSetActiveTabOption}
          activeTab={activeTab}
        />
      </div>
      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:space-x-4 py-4">
        <label className="flex items-center rounded-lg input input-md input-bordered w-[25%]">
          <MdOutlineCalendarMonth size={28} />
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date as Date)}
            placeholderText="From: Date"
            className="pl-2 w-full"
          />
          <span className="mr-2">-</span>
          <MdOutlineCalendarMonth size={28} />
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date as Date)}
            placeholderText="To: Date"
            className="pl-2 w-full"
          />
        </label>
        <label className="input input-bordered rounded-lg flex items-center gap-2 w-[40%]">
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
          <input
            type="text"
            className="grow"
            placeholder="Search for Order ID, Customer Name or Customer Contact "
          />
        </label>
      </div>
      <div className="overflow-y-hidden overflow-x-auto relative">
        <table className="table w-full text-xs sm:text-sm table-pin-rows">
          <thead className="bg-base-200">
            <tr>
              <th>Order Date</th>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Payable</th>
              <th>Payment Method</th>
              <th>Payment Type</th>
              <th>Shipping</th>
              <th>Order Status</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <tr key={item}>
                <td>2 Jan, 2024 / 5:23 PM</td>
                <td>01</td>
                <td>Zahid Hasan</td>
                <td>x5</td>
                <td>$15,452</td>
                <td>$15,452</td>
                <td>$15,452</td>
                <td>Online- Bkash</td>
                <td>+8801955784982</td>
                <td>$15,452</td>
                <td>
                  <OrderStatusBadge status={orderStatuses["PENDING"]} />
                </td>
                <td>
                  <button className="btn btn-primary text-white btn-sm rounded-lg px-6">
                    <Link href={`/admin/order-management/order-details/1`}>
                      View
                    </Link>
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

export default AdminOrderManagement;
