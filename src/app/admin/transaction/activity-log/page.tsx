"use client";
import ActivityLogContent from "@/components/Admin/AdminTransaction/ActivityLogContent";
import React, { useState } from "react";

const TransactionActivityLogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <ActivityLogContent
      pagination={{ currentPage, totalPages, handleChangeCurrentPage }}
    />
  );
};

export default TransactionActivityLogs;
