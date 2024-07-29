"use client";
import { ActivityLogContent, SidebarLayout } from "@/components";
import React, { useState } from "react";

const TransactionActivityLogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <SidebarLayout>
      <ActivityLogContent
        pagination={{ currentPage, totalPages, handleChangeCurrentPage }}
      />
    </SidebarLayout>
  );
};

export default TransactionActivityLogs;
