"use client";
import { AuthorsContent, SidebarLayout } from "@/components";
import React, { useState } from "react";

const Authors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <SidebarLayout>
      <AuthorsContent
        pagination={{ currentPage, totalPages, handleChangeCurrentPage }}
      />
    </SidebarLayout>
  );
};

export default Authors;
