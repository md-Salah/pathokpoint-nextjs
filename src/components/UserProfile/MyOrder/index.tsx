"use client";
import React, { useState } from "react";
import TabOptions from "../shared/TabOptions";
import { myOrderTabs } from "@/constants/userProfile";
import OrderCard from "./OrderCard";
import OrderDetails from "./OrderDetails";

const MyOrder = () => {
  const [activeOrderId, setActiveOrderId] = useState<number | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleSetActiveTabIndex = (index: number) => {
    setActiveTabIndex(index);
  };

  const handleSetActiveOrderId = (orderId: number) => {
    setActiveOrderId(orderId);
  };
  return (
    <div className="w-full flex flex-col space-y-4">
      <TabOptions
        tabOptions={myOrderTabs}
        activeIndex={activeTabIndex}
        setActiveIndex={handleSetActiveTabIndex}
      />
      <div className="w-full flex items-center space-x-4">
        <div className="border-[1.5px] border-[#E6E6E6] w-full"></div>
        <div className="flex items-center space-x-2">
          <span className="text-[#6F6E77] text-sm font-semibold">Showing:</span>
          <select className="select bg-white w-36 select-sm">
            <option>Option 1 </option>
            <option>Option 1 </option>
            <option>Option 1 </option>
          </select>
        </div>
      </div>
      {activeOrderId === null ? (
        [1, 2, 3, 4].map((item) => (
          <OrderCard
            key={item}
            handleSetActiveOrderId={handleSetActiveOrderId}
          />
        ))
      ) : (
        <OrderDetails />
      )}
    </div>
  );
};

export default MyOrder;
