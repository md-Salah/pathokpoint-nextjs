"use client";
import { AdminOrderManagement } from "@/components/Admin";
import React, { useState } from "react";

const tabs = [
  { name: "All Orders", count: 16 },
  { name: "Pending payment", count: 8 },
  { name: "Order Confirmed", count: 5 },
  { name: "Processing", count: 2 },
  { name: "On delivery", count: 1 },
  { name: "Delivered", count: 2 },
  { name: "Completed", count: 2 },
  { name: "Cancelled", count: 2 },
];

const OrderManagement = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [activeTab, setActiveTab] = useState("All Orders");

  const handleSetActiveTabOption = (id: string) => {
    setActiveTab(id);
  };

  const handleChangeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };
  return (
    <AdminOrderManagement
      orderTab={{ tabs, handleSetActiveTabOption, activeTab }}
      datePicker={{ startDate, endDate, setStartDate, setEndDate }}
      pagination={{ currentPage, totalPages: 10, handleChangeCurrentPage }}
    />
  );
};

export default OrderManagement;
