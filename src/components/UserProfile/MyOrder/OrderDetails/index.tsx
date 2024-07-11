import React from "react";
import ProgressTracker from "../ProgressTracker";

const OrderDetails = () => {
  return (
    <div className="bg-white w-full h-screen rounded-lg">
      <div className="border-b border-black06 py-4 px-6 flex items-center justify-between">
        <div className="flex flex-col space-y-2">
          <div className="text-base flex items-center space-x-1">
            <span className="text-[#2B2B2B]">Order ID</span>
            <span className="text-primary font-bold">#A125452</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-black07 text-xxs text-black02 py-[3px] px-2 rounded-lg w-fit">
              <span>Oct 11, 2023</span>
            </div>
            <div className="bg-black07 text-xxs text-black02 py-[3px] px-2 rounded-lg w-fit">
              <span>11:45 PM</span>
            </div>
          </div>
        </div>
        <button className="btn btn-outline btn-sm btn-primary px-4">
          Flexible Payment
        </button>
      </div>
      <div className="py-4">
        <ProgressTracker currentStep={1} />
      </div>
    </div>
  );
};

export default OrderDetails;
