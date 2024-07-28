"use client";
import { BooksContent, SidebarLayout } from "@/components";
import { useState } from "react";

const Books = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <SidebarLayout>
      <BooksContent
        pagination={{ currentPage, handleChangeCurrentPage, totalPages }}
      />
    </SidebarLayout>
  );
};

export default Books;
