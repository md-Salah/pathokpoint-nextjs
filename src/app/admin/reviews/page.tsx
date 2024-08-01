"use client";
import { AdminReviews } from "@/components/Admin";
import React, { useState } from "react";

const tabOptions = [
  {
    name: "Approved",
  },
  {
    name: "Pending",
  },
];

const Reviews = () => {
  const [isCarouselModalOpen, setIsCarouselModalOpen] =
    useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Pending");
  const handleSetActiveOption = (tab: string) => {
    setActiveTab(tab);
  };
  const handleChangeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  const handleOpenReviewModal = () => {
    const modalElement = document.getElementById(
      "review_details_modal"
    ) as HTMLDialogElement;
    modalElement.showModal();
  };

  const handleCloseReviewModal = () => {
    const modalElement = document.getElementById(
      "review_details_modal"
    ) as HTMLDialogElement;
    modalElement.close();
  };

  const handleOpenCarouselModal = () => {
    const modalElement = document.getElementById(
      "carousel_modal"
    ) as HTMLDialogElement;
    modalElement.showModal();
    setIsCarouselModalOpen(true);
  };

  const handleCloseCarouselModal = () => {
    const modalElement = document.getElementById(
      "carousel_modal"
    ) as HTMLDialogElement;
    modalElement.close();
    setIsCarouselModalOpen(false);
  };
  return (
    <AdminReviews
      tabOptions={tabOptions}
      activeTab={activeTab}
      handleSetActiveTabOption={handleSetActiveOption}
      pagination={{ currentPage, totalPages: 10, handleChangeCurrentPage }}
      handleOpenReviewModal={handleOpenReviewModal}
      handleCloseReviewModal={handleCloseReviewModal}
      handleOpenCarouselModal={handleOpenCarouselModal}
      handleCloseCarouselModal={handleCloseCarouselModal}
      isCarouselModalOpen={isCarouselModalOpen}
    />
  );
};

export default Reviews;
