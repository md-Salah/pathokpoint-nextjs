"use client";
import OrderCard from "@/components/UserProfile/MyOrder/OrderCard";
import { myOrderTabs } from "@/constants/userProfile";
import React, { useState } from "react";

const OrdersPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSetActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="w-full bg-white my-10 px-5">
      <div className="py-5 flex items-center space-x-3 border-b border-b-black06 w-full overflow-x-auto">
        {myOrderTabs.map((tab) => (
          <div
            className={`py-2 px-4 ${
              tab.tabIndex === activeIndex
                ? "bg-primary text-white"
                : "bg-black07 text-[#777777]"
            } text-xs font-semibold rounded-2xl text-nowrap`}
            onClick={() => handleSetActiveIndex(tab.tabIndex)}
          >
            <p>
              {tab.name}({tab.count})
            </p>
          </div>
        ))}
      </div>
      <div className="py-5 space-y-4 h-screen overflow-y-auto">
        {/* <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col space-y-3">
            <div className="text-base flex items-center space-x-1">
              <span className="text-[#2B2B2B]">Order ID</span>
              <span className="text-primary font-bold">#A125452</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1 text-xs">
                <span className="text-secondary-content">Total Price:</span>
                <span className="text-[#2B2B2B] font-bold">৳520</span>
              </div>
              <div className="flex items-center space-x-1 text-xs">
                <span className="text-secondary-content">Due:</span>
                <span className="text-[#2B2B2B] font-bold">৳520</span>
              </div>
            </div>
          </div>
        </div> */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((elem, i) => (
          <div
            className={`${
              i < 10 && "border-b border-b-black06 pb-4"
            }`}
            key={elem}
          >
            <OrderCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
