"use client";
import { CategoriesContent } from "@/components/Admin/ProductManagement";
import { categories } from "@/constants";
import { useState } from "react";

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <CategoriesContent
      pagination={{ currentPage, totalPages, handleChangeCurrentPage }}
    />
  );
};

export default Categories;
