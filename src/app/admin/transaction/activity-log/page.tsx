"use client";
import { Pagination, Sidebar } from "@/components";
import { transactions } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const TransactionActivityLogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[95%] sm:w-[80%] my-8 mx-auto">
        <div className="w-full p-4 sm:p-8 bg-white rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Transaction</h1>
            <button className="btn btn-secondary text-white text-base rounded-lg">
              <Link href={"/admin/transaction/activity-log/add-activity-log"}>
                Add Transaction
              </Link>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full text-xs sm:text-sm">
              <thead className="bg-base-200">
                <tr>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Customer ID</th>
                  <th>Transaction ID</th>
                  <th>Account Number</th>
                  <th>Amount</th>
                  <th>Order ID</th>
                  <th>Refund</th>
                  <th>Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.customerName}</td>
                    <td>{transaction.customerId}</td>
                    <td>{transaction.accountNumber}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.orderId}</td>
                    <td>{transaction.refund}</td>
                    <td>
                      <button className="btn btn-primary text-white btn-sm rounded-lg px-6">
                        View
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
    </div>
  );
};

export default TransactionActivityLogs;