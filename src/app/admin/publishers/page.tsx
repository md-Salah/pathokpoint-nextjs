"use client";
import { PublishersContent } from "@/components/Admin/ProductManagement";
import React, { useState } from "react";

const Publishers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <PublishersContent
      pagination={{ currentPage, totalPages, handleChangeCurrentPage }}
    />
  );
};

export default Publishers;
