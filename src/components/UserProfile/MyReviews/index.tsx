"use client";
import React, { useState } from "react";
import TabOptions from "../TabOptions";
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
  return <div>My reviews deprecated</div>;
};

export default MyReviews;
