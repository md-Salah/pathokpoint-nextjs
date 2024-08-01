"use client";
import { AdminCoupon } from "@/components";
import React, { useState } from "react";

const tabOptions = [
  {
    id: 1,
    name: "Active",
    count: 0,
  },
  {
    id: 2,
    name: "Deactive",
    count: 0,
  },
];

const Coupon = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Active");
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSetActiveTabOption = (id: string) => {
    setActiveTab(id);
  };
  return (
    <AdminCoupon
      tabOptions={tabOptions}
      activeTab={activeTab}
      handleSetActiveTabOption={handleSetActiveTabOption}
      pagination={{ currentPage, totalPages, handleChangeCurrentPage }}
    />
  );
};

export default Coupon;
