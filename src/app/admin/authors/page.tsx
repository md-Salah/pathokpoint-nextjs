"use client";
import { AuthorsContent } from "@/components/Admin/ProductManagement";
import React, { useState } from "react";

const Authors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <AuthorsContent
      pagination={{ currentPage, totalPages, handleChangeCurrentPage }}
    />
  );
};

export default Authors;
