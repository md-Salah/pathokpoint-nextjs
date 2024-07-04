"use client";
import { OrderTabOptions, Pagination, Sidebar } from "@/components";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { OrderStatusBadge } from "@/micro-components";
import { orderStatuses } from "@/constants/constants";

const tabs = [
  { name: "All Orders", count: 16 },
  { name: "Pending payment", count: 8 },
  { name: "Order Confirmed", count: 5 },
  { name: "Processing", count: 2 },
  { name: "On delivery", count: 1 },
  { name: "Delivered", count: 2 },
  { name: "Completed", count: 2 },
  { name: "Cancelled", count: 2 },
];

const OrderManagement = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [activeTab, setActiveTab] = useState("All Orders");

  const handleSetActiveTabOption = (id: string) => {
    setActiveTab(id);
  };

  const handleChangeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[95%] sm:w-[80%] p-4 sm:p-8 bg-white rounded-md my-8 mx-auto flex flex-col space-y-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Orders List</h1>
          <button className="btn btn-secondary btn-sm sm:btn-md text-white text-sm sm:text-base rounded-lg">
            <Link href={"/admin/product-management/books/add-book"}>
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
          <select className="select max-w-xs select-sm sm:select-md">
            <option disabled selected>
              More
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:space-x-4">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date as Date)}
                placeholderText="From: Date"
                className="outline-none text-sm sm:text-base"
              />
            </div>
            <span className="mx-2">-</span>
            <div>
              <DatePicker
                selected={endDate}
                onChange={(date: Date | null) => setEndDate(date as Date)}
                placeholderText="To: Date"
                className="outline-none text-sm sm:text-base"
              />
            </div>
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Search for Order ID, Customer Name or Customer Contact"
              className="outline-none pl-2"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full text-xs sm:text-sm">
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
              <tr>
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
                    <Link href={`/admin/order-management/order-details/1`}>View</Link>
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

export default OrderManagement;
