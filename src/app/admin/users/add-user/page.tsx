import { Sidebar } from "@/components";
import React from "react";

const AddUser = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white rounded-md my-8 mx-auto w-[95%] sm:w-[50%]">
        <h4 className="text-secondary-content text-base px-6 py-3 font-semibold">
          Add Publisher
        </h4>
        <div className="border-[1px] border-[#E6E6E6]"></div>
        <div className="px-6 py-3 space-y-2 sm:px-14 sm:py-8 sm:space-y-8 text-[#6F6E77] text-xs sm:text-sm">
          <div className="grid grid-cols-2 grid-flow-row gap-3 sm:gap-8">
            <div className="flex flex-col items-start space-y-2">
              <label>Date</label>
              <label>
                <span className="font-semibold">02 Jan, 2023</span>
                <span className="text-xxs pl-1">(updated)</span>
              </label>
            </div>
            <div></div>
            <div className="flex flex-col items-start space-y-2">
              <label>First Name</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Last Name</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>User Name</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Date of Birth</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Phone Number</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Email</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Gender</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Country</label>
              <select className="select-sm sm:select-md w-full max-w-xs">
                <option>Bangladesh</option>
                <option>India</option>
                <option>Nepal</option>
                <option>Srilanka</option>
                <option>United States</option>
              </select>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>District</label>
              <select className="select-sm sm:select-md w-full max-w-xs">
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Khulna</option>
                <option>Rajshahi</option>
                <option>Rangpur</option>
              </select>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>City</label>
              <select className="select-sm sm:select-md w-full max-w-xs">
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Khulna</option>
                <option>Rajshahi</option>
                <option>Rangpur</option>
              </select>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Thana</label>
              <select className="select-sm sm:select-md w-full max-w-xs">
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Khulna</option>
                <option>Rajshahi</option>
                <option>Rangpur</option>
              </select>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Alternative Phone Number</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label>Address</label>
            <div className="relative w-full">
              <textarea
                className="textarea textarea-sm sm:textarea-lg w-full relative z-0"
                placeholder="Enter Address"
              ></textarea>
              <span className="absolute right-2 bottom-2 z-20 text-xs">
                0/150 Words
              </span>
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

export default AddUser;
