"use client";
import { AdminCouriers } from "@/components/Admin";
import React, { useState } from "react";

const Couriers = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChangeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };
  return (
    <AdminCouriers
      pagination={{ currentPage, handleChangeCurrentPage, totalPages: 10 }}
    />
  );
};

export default Couriers;
