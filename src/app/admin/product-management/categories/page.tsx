"use client";
"use client";
import { Pagination, Sidebar } from "@/components";
import CategoriesContent from "@/components/Admin/AdminProductManagement/CategoriesContent";
import SidebarLayout from "@/components/Admin/SidebarLayout";
import { categories } from "@/constants";
import { useState } from "react";

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <SidebarLayout>
      <CategoriesContent
        pagination={{ currentPage, totalPages, handleChangeCurrentPage }}
      />
    </SidebarLayout>
  );
};

export default Categories;
