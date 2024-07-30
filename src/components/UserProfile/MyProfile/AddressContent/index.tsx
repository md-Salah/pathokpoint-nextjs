import React from "react";

const AddressContent = () => {
  return (
    <div className="bg-white w-full h-screen py-10 px-5  md:py-14 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 md:gap-5">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">City</label>
          <select className="select w-full">
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Khulna</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">
            Thana/Upazilla
          </label>
          <select className="select">
            <option>Mirpur</option>
            <option>Dhanmondi</option>
            <option>Azimpur</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">
            Postal Code
          </label>
          <input
            type="text"
            placeholder="Enter Postal Code"
            className="input input-bordered text-base text-black02"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">District</label>
          <select className="select">
            <option>Mirpur</option>
            <option>Dhanmondi</option>
            <option>Azimpur</option>
          </select>
        </div>
        <div className="space-y-2">
          <label>Address</label>
          <div className="relative w-full">
            <textarea
              className="textarea textarea-bordered w-full relative z-0 text-base text-black03 h-28"
              placeholder="Enter Address"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="block md:flex md:justify-end pt-14">
        <button className="w-full md:w-fit btn btn-primary md:px-10 text-base">Update</button>
      </div>
    </div>
  );
};

export default AddressContent;
