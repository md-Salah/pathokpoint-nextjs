"use client";
import { BooksContent } from "@/components/Admin/ProductManagement";
import { useState } from "react";

const Books = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <BooksContent
      pagination={{ currentPage, handleChangeCurrentPage, totalPages }}
    />
  );
};

export default Books;
