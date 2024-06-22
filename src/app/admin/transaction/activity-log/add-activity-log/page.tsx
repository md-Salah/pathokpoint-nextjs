import { Sidebar } from "@/components";
import React from "react";

const AddTransactionActivityLog = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white rounded-md my-8 mx-auto w-[95%] sm:w-[50%]">
        <h4 className="text-secondary-content text-base px-6 py-3 font-semibold">
          Add Transaction
        </h4>
        <div className="border-[1px] border-[#E6E6E6]"></div>
        <div className="px-6 py-3 space-y-2 sm:px-14 sm:py-8 sm:space-y-8 text-[#6F6E77] text-xs sm:text-sm">
          <div className="grid grid-cols-2 grid-flow-row gap-3 sm:gap-8">
            <div className="flex flex-col items-start space-y-2">
              <label>Date</label>
              <label>
                <span className="font-semibold">02 Jan, 2023</span>
              </label>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>ID</label>
              <span className="font-semibold">5b36385d-27bf-47dd</span>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Amount</label>
              <span className="font-semibold">700</span>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Transaction ID</label>
              <span className="font-semibold">5b36385dACG</span>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Reference</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Account Number</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Gateway ID</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Order ID</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Customer ID</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>

            <div className="flex flex-col items-start space-y-2">
              <label>Refunded by ID</label>
              <select className="select-sm sm:select-md w-full max-w-xs rounded-lg">
                <option>Bangladesh</option>
                <option>India</option>
                <option>Nepal</option>
                <option>Srilanka</option>
                <option>United States</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label>Refund Reason</label>
            <div className="relative w-full">
              <textarea
                className="textarea textarea-sm sm:textarea-lg w-full relative z-0"
                placeholder="Enter Refund Reason"
              ></textarea>
              <span className="absolute right-2 bottom-2 z-20 text-xs">
                0/150 Words
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-3 sm:gap-8">
            <div className="flex flex-col items-start space-y-2">
              <label>Gateway</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Order</label>
              <select className="select-sm sm:select-md w-full max-w-xs rounded-lg">
                <option>Bangladesh</option>
                <option>India</option>
                <option>Nepal</option>
                <option>Srilanka</option>
                <option>United States</option>
              </select>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Customer</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Refunded by</label>
              <select className="select-sm sm:select-md w-full max-w-xs rounded-lg">
                <option>Bangladesh</option>
                <option>India</option>
                <option>Nepal</option>
                <option>Srilanka</option>
                <option>United States</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-2">
            <button className="btn btn-outline btn-black05 px-3 rounded-lg">
              Cancel
            </button>
            <button className="btn bg-primary text-white px-8 rounded-lg">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransactionActivityLog;
