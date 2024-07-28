"use client";
import { AdminUsers, SidebarLayout } from "@/components";
import React, { useState } from "react";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <SidebarLayout>
      <AdminUsers
        pagination={{ currentPage, handleChangeCurrentPage, totalPages }}
      />
    </SidebarLayout>
  );
};

export default Users;
