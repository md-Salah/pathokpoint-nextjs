import React from "react";
import { Pagination } from "@/components";
import Link from "next/link";
import { IPagination } from "@/interface";
import { FiPlus } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";

type Props = {
  tabOptions: {
    id: number;
    name: string;
    count: number;
  }[];
  activeTab: string;
  handleSetActiveTabOption: (tab: string) => void;
  pagination: IPagination;
};

const AdminCoupon = ({
  tabOptions,
  activeTab,
  handleSetActiveTabOption,
  pagination,
}: Props) => {
  const { currentPage, totalPages, handleChangeCurrentPage } = pagination;
  return (
    <div className="w-[95%] sm:w-[80%] p-4 sm:p-8 bg-white rounded-md my-8 mx-auto flex flex-col space-y-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl font-medium">Coupon</h1>
        <button className="btn btn-secondary btn-sm sm:btn-md text-white text-sm sm:text-base rounded-lg">
          <Link
            href={"/admin/coupon/add-coupon"}
            className="flex items-center space-x-4"
          >
            {" "}
            <FiPlus color="#ffffff" size={20} />
            Add Coupon
          </Link>
        </button>
      </div>
      <div className="border-b-[1px] border-[#6F6E77] text-sm sm:text-base border-opacity-20 w-full">
        <div className="flex items-center space-x-4 overflow-x-auto">
          {tabOptions.map((tab) => (
            <button
              key={tab.name}
              className={`py-2 px-4 ${
                activeTab === tab.name
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "text-[#363739] font-normal"
              }`}
              onClick={() => handleSetActiveTabOption(tab.name)}
            >
              {tab.name}({tab.count})
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-y-hidden overflow-x-auto relative">
        <table className="table w-full text-xs sm:text-sm table-pin-rows">
          <thead className="bg-base-200">
            <tr>
              <th>Coupon Code</th>
              <th>Expiry Date</th>
              <th>Discount</th>
              <th>Use Count</th>
              <th>Status</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <tr key={item}>
                <td>BOISHAK201</td>
                <td>22/09/24</td>
                <td>200</td>
                <td>20</td>
                <td>
                  <span className="bg-[#CEFFEA] text-success py-1 px-3 text-xs w-fit rounded-full font-semibold">
                    Activate
                  </span>
                </td>
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

export default AdminCoupon;
