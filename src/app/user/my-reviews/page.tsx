"use client";
import { MyReviews, SidebarDesktopLayout } from "@/components";
import ImageCarouselModal from "@/components/UserProfile/MyReviews/ImageCarouselModal";
import ReviewItemMobile from "@/components/UserProfile/MyReviews/ReviewItemMobile";
import React, { useState } from "react";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

const MyReviewsPage = () => {
  const [isImageCarouselModalOpen, setIsImageCarouselModal] =
    useState<boolean>(false);
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

  return (
    <>
      <SidebarDesktopLayout>
        <MyReviews />
      </SidebarDesktopLayout>
      <>
        <div className="bg-white space-y-4 h-screen overflow-y-auto my-10 w-full">
          <div className="flex items-center w-full pt-6 pb-3 bg-white md:hidden">
            <Link href={"/user"} className="pl-5">
              <IoChevronBack size={20} />
            </Link>
            <div className="flex justify-center w-full absolute">
              <h2 className="text-base font-bold text-black02">My Reviews</h2>
            </div>
          </div>
          <div className="px-5 space-y-5">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ReviewItemMobile
                key={item}
                handleOpenImageCarouselModal={handleOpenImageCarouselModal}
              />
            ))}
          </div>
        </div>
        <dialog id="image_carousel_modal" className="modal">
          <ImageCarouselModal
            isOpen={isImageCarouselModalOpen}
            onClose={handleCloseImageCarouselModal}
          />
        </dialog>
      </>
    </>
  );
};

export default MyReviewsPage;
