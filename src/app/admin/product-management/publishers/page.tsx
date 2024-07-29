"use client";
import { PublishersContent, SidebarLayout } from "@/components";
import React, { useState } from "react";

const Publishers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <SidebarLayout>
      <PublishersContent
        pagination={{ currentPage, totalPages, handleChangeCurrentPage }}
      />
    </SidebarLayout>
  );
};

export default Publishers;
