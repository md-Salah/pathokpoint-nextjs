import React from "react";

const PasswordContent = () => {
  return (
    <div className="bg-white rounded-lg w-full h-screen py-14">
      <div className="space-y-4 w-1/2 mx-auto">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-black03">
            Current Password
          </label>
          <input
            type="text"
            placeholder="Enter Current Password"
            className="input input-bordered text-base text-black02 w-full"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-black03">
            New Password
          </label>
          <input
            type="text"
            placeholder="Enter New Password"
            className="input input-bordered text-base text-black02"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-black03">
            Confirm Password
          </label>
          <input
            type="text"
            placeholder="Enter Confirm Password"
            className="input input-bordered text-base text-black02"
          />
        </div>
      </div>
      <div className="w-1/2 flex justify-end pt-14 mx-auto">
        <button className="btn btn-primary px-10 text-base">Update</button>
      </div>
    </div>
  );
};

export default PasswordContent;
