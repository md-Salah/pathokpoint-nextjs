"use client";
import React, { useState } from "react";
import TabOptions from "../shared/TabOptions";
import { myReviewsTabs } from "@/constants/userProfile";
import { truncateWithEllipsis } from "@/utils";
import { ConditionBadge } from "@/micro-components";
import StarRating from "@/components/StarRating";
import ImageCarouselModal from "./ImageCarouselModal";
import Pagination from "@/components/Pagination";
import ReviewItemDesktop from "./ReviewItemDesktop";

const MyReviews = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isImageCarouselModalOpen, setIsImageCarouselModal] =
    useState<boolean>(false);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleSetActiveTabIndex = (index: number) => {
    setActiveTabIndex(index);
  };

  const handleOpenImageCarouselModal = () => {
    const modalElement = document.getElementById(
      "image_carousel_modal"
    ) as HTMLDialogElement;
    modalElement.showModal();
    setIsImageCarouselModal(true);
  };

  const handleCloseImageCarouselModal = () => {
    const modalElement = document.getElementById(
      "image_carousel_modal"
    ) as HTMLDialogElement;
    modalElement.close();
    setIsImageCarouselModal(false);
  };

  const handleChangeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };
  return (
    <>
      <div className="w-full flex flex-col space-y-4">
        <TabOptions
          tabOptions={myReviewsTabs}
          activeIndex={activeTabIndex}
          setActiveIndex={handleSetActiveTabIndex}
        />
        <div className="bg-white flex flex-col space-y-4 p-14 h-screen">
          <ReviewItemDesktop
            handleOpenImageCarouselModal={handleOpenImageCarouselModal}
          />
          <div className="flex justify-end pt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={15}
              handleChangeCurrentPage={handleChangeCurrentPage}
            />
          </div>
        </div>
      </div>
      <dialog id="image_carousel_modal" className="modal">
        <ImageCarouselModal
          isOpen={isImageCarouselModalOpen}
          onClose={handleCloseImageCarouselModal}
        />
      </dialog>
    </>
  );
};

export default MyReviews;
