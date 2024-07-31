"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";

import ImageCarouselModal from "@/components/UserProfile/MyReviews/ImageCarouselModal";
import ReviewItemMobile from "@/components/UserProfile/MyReviews/ReviewItemMobile";
import { IoChevronBack } from "react-icons/io5";
import Pagination from "@/components/Pagination";
import { MobileHeader } from "@/components/UserProfile";

const MyReviewsPage = () => {
  const [isImageCarouselModalOpen, setIsImageCarouselModal] =
    useState<boolean>(false);

  const ref = useRef<HTMLDialogElement>(null);

  const handleOpenImageCarouselModal = () => {
    ref.current?.showModal();
    setIsImageCarouselModal(true);
  };

  const handleCloseImageCarouselModal = () => {
    ref.current?.close();
    setIsImageCarouselModal(false);
  };

  return (
    <div>
      <MobileHeader title="My Reviews" />
      <div className="bg-white p-4 md:p-6 lg:p-10">
        <h4 className="text-black02 font-semibold text-lg hidden md:block">
          My Reviews
        </h4>

        <div className="space-y-5 mt-6 lg:mt-10">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ReviewItemMobile
              key={item}
              handleOpenImageCarouselModal={handleOpenImageCarouselModal}
            />
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <Pagination
            currentPage={5}
            totalPages={10}
            handleChangeCurrentPage={() => {}}
          />
        </div>
      </div>
      <dialog ref={ref} className="modal">
        <ImageCarouselModal
          isOpen={isImageCarouselModalOpen}
          onClose={handleCloseImageCarouselModal}
        />
      </dialog>
    </div>
  );
};

export default MyReviewsPage;
