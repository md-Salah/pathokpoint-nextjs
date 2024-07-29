"use client";
import { MyOrder, SidebarDesktopLayout } from "@/components";
import OrderCard from "@/components/UserProfile/MyOrder/OrderCard";
import { myOrderTabs } from "@/constants/userProfile";
import React, { useState } from "react";

const OrdersPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSetActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <SidebarDesktopLayout>
        <MyOrder />
      </SidebarDesktopLayout>
      <div className="w-full bg-white my-10 px-5 md:hidden">
        <div className="py-5 flex items-center space-x-3 border-b border-b-black06 w-full overflow-x-auto">
          {myOrderTabs.map((tab) => (
            <div
              className={`py-2 px-4 ${
                tab.tabIndex === activeIndex
                  ? "bg-primary text-white"
                  : "bg-black07 text-[#777777]"
              } text-xs font-semibold rounded-2xl text-nowrap`}
              onClick={() => handleSetActiveIndex(tab.tabIndex)}
              key={tab.tabIndex}
            >
              <p>
                {tab.name}({tab.count})
              </p>
            </div>
          ))}
        </div>
        <div className="h-screen overflow-y-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((elem, i) => (
            <div
              className={`${i < 10 && "border-b border-b-black06"}`}
              key={elem}
            >
              <OrderCard key={elem} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrdersPage;