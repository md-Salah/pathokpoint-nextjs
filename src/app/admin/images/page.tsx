"use client";
import { AdminImages, SidebarLayout } from "@/components";
import React, { useState } from "react";

const Images = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentFolder, setCurrentFolder] = useState<number>(1);

  const handleChangeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  const handleFolderChange = (currentFolder: number) => {
    setCurrentFolder(currentFolder);
  };
  return (
    <SidebarLayout>
      <AdminImages
        pagination={{ currentPage, totalPages: 10, handleChangeCurrentPage }}
        currentFolder={currentFolder}
        handleFolderChange={handleFolderChange}
      />
    </SidebarLayout>
  );
};

export default Images;
