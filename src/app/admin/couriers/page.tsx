"use client";
import { AdminCouriers, SidebarLayout } from "@/components";
import React, { useState } from "react";

const Couriers = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChangeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };
  return (
    <SidebarLayout>
      <AdminCouriers
        pagination={{ currentPage, handleChangeCurrentPage, totalPages: 10 }}
      />
    </SidebarLayout>
  );
};

export default Couriers;
