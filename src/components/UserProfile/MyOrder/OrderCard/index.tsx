import React from "react";

const OrderCard = () => {
  return (
    <div className="w-full bg-white rounded-lg p-8 flex items-center justify-between">
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
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-xs">
            <span className="text-secondary-content">Total Price:</span>
            <span className="text-[#2B2B2B] font-bold">৳520</span>
          </div>
          <div className="flex items-center space-x-1 text-xs">
            <span className="text-secondary-content">Due:</span>
            <span className="text-[#2B2B2B] font-bold">৳520</span>
          </div>
        </div>
        <div>
          <button className="btn btn-primary px-5 text-sm">View Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
