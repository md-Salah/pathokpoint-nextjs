import React from "react";

const PaymentItem = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center space-x-2 pb-2 border-b border-b-black06 w-full text-xxs">
        <span className="bg-black07 py-[3px] px-2 rounded">Oct 11, 2023</span>
        <span className="bg-black07 py-[3px] px-2 rounded">11:45 PM</span>
      </div>
      <div className="flex items-center justify-between w-full pt-2">
        <div className="space-y-1 text-xs text-black03">
          <p>Payment Method</p>
          <p className="font-bold">Master Card</p>
        </div>
        <div className="space-y-1 text-xs text-black03">
          <p>Transaction ID</p>
          <p className="font-bold">PP10789560</p>
        </div>
        <div className="space-y-1 text-xs text-black03">
          <p>Amount</p>
          <p className="font-bold">৳4,256</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentItem;
