"use client";
import React, { useState } from "react";

import {
  MobileHeader,
  TabOptions,
  TabOptionsMobile,
} from "@/components/UserProfile";

import { OrderCard } from "@/components/UserProfile/MyOrder";

const MyOrder = () => {
  const [tab, setTab] = useState<string>("All Order");

  const myOrderTabs = [
    {
      name: "All Order",
      count: 14,
    },
    {
      name: "On Process",
      count: 4,
    },
    {
      name: "Delivered",
      count: 10,
    },
    {
      name: "Cancelled",
      count: 2,
    },
  ];

  return (
    <div>
      <MobileHeader title="My Order" />

      {/* Tab in Desktop */}
      <div className="hidden md:block">
        <TabOptions tab={tab} setTab={setTab} tabOptions={myOrderTabs} />
      </div>

      {/* Tab in Mobile */}
      <div className="md:hidden">
        <TabOptionsMobile tab={tab} setTab={setTab} tabOptions={myOrderTabs} />
      </div>

      <div className="flex flex-col md:gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <OrderCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
