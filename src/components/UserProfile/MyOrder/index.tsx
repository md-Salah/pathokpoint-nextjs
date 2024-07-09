"use client";
import React, { useState } from "react";
import TabOptions from "../shared/TabOptions";
import { myOrderTabs } from "@/constants/userProfile";

const MyOrder = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleSetActiveTabIndex = (index: number) => {
    setActiveTabIndex(index);
  };
  return (
    <div className="w-full flex flex-col space-y-4">
      <TabOptions
        tabOptions={myOrderTabs}
        activeIndex={activeTabIndex}
        setActiveIndex={handleSetActiveTabIndex}
      />
    </div>
  );
};

export default MyOrder;
