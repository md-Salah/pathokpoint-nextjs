"use client";
import { AdminUsers, SidebarLayout } from "@/components";
import React, { useState } from "react";

const tabOptions = [
  {
    name: "Customer",
  },
  {
    name: "Admin",
  },
  {
    name: "Super Admin",
  },
  {
    name: "Stuff",
  },
];

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Pending");
  const handleSetActiveTabOption = (tab: string) => {
    setActiveTab(tab);
  };
  const totalPages = 20;
  const handleChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <SidebarLayout>
      <AdminUsers
        pagination={{ currentPage, handleChangeCurrentPage, totalPages }}
        tabOptions={tabOptions}
        activeTab={activeTab}
        handleSetActiveTabOption={handleSetActiveTabOption}
      />
    </SidebarLayout>
  );
};

export default Users;
