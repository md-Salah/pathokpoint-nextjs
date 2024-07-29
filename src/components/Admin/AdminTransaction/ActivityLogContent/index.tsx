import React from "react";
import { Pagination } from "@/components";
import { transactions } from "@/constants";
import Link from "next/link";
import { IPagination } from "@/interface";
import { FiPlus } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";

type Props = {
  pagination: IPagination;
};

const ActivityLogContent = ({ pagination }: Props) => {
  const { currentPage, handleChangeCurrentPage, totalPages } = pagination;
  return (
    <div className="w-[95%] sm:w-[80%] my-8 mx-auto">
      <div className="w-full p-4 sm:p-8 bg-white rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-medium">Transaction</h1>
          <button className="btn btn-secondary text-white text-base rounded-lg">
            <Link href={"/admin/transaction/activity-log/add-activity-log"}className="flex items-center space-x-4"
          >
            <FiPlus color="#ffffff" size={20} />
              Add Transaction
            </Link>
          </button>
        </div>
        <div className="overflow-y-hidden overflow-x-auto relative pt-6">
        <table className="table w-full text-xs sm:text-sm table-pin-rows">
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

export default ActivityLogContent;
