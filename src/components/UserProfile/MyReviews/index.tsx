"use client";
import React, { useState } from "react";
import TabOptions from "../shared/TabOptions";
import { myReviewsTabs } from "@/constants/userProfile";
import { truncateWithEllipsis } from "@/utils";
import { ConditionBadge } from "@/micro-components";
import StarRating from "@/components/StarRating";
import ImageCarouselModal from "./ImageCarouselModal";
import Pagination from "@/components/Pagination";

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
          <div className="border border-black06 rounded-lg p-4 flex items-start justify-between space-x-5">
            <div className="flex items-start space-x-2 h-fit">
              <div className="w-14 bg-white border-[#E6E6E6]">
                <img
                  src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
                  className="w-full rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-sm md:text-base font-semibold text-black02">
                  Pather Panchali
                </span>
                <span className="text-xxs md:text-xs text-black04">
                  {truncateWithEllipsis("by Bibhutibushan Bandapaddhay", 16)}
                </span>
                <ConditionBadge condition="Old-like-New" />
                <StarRating rating={4} isReadOnly={true} iconSize={16} />
              </div>
            </div>
            <div className="w-[40%]">
              <span className="text-xs text-[#363739]">
                তাদের থেকে এটা দ্বিতীয় বার বই নেয়া ভিডিও দেখিয়ে বই দেয়াটা
                বেশ ভালো লেগেছে দেখে ভালো না লাগলেও আপনি নাও নিতে পারেন এটা
                সবথেকে ভালো দিক আমার দেয়া তবে দামটা কমলে সবাই নিতে আরো বেশি
                স্বাচ্ছন্দ বোধ করত তবে সবদিক বিবেচনা করলে তাদের সার্ভিস অনেক
                ভালো আপনারা নির্দ্বিধায় নিতে পারেন শুধু দামের দিকে একটু বিবেচনা
                রাখবেন পাঠক পয়েন্ট। অনেক ধন্যবাদ এই বইগুলো দেয়ার জন্য
              </span>
            </div>
            <div className="flex flex-col items-end space-y-5">
              <span className="text-xxs text-[#9B9B9C]">22.03.2023</span>
              <div className="flex items-center space-x-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s"
                  className="w-12 h-16 object-cover rounded-lg"
                />
                <img
                  src="https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"
                  className="w-12 h-16 object-cover rounded-lg"
                />
                <div
                  className="relative cursor-pointer"
                  onClick={handleOpenImageCarouselModal}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ekxu3OzvIQLn2K9bnYPHvNlHiVnR216eg&s"
                    className="w-12 h-16 object-cover rounded-lg relative opacity-25 z-0"
                  />
                  <span className="absolute inset-0 text-center top-4 text-base text-gray-600 font-bold z-20">
                    2+
                  </span>
                </div>
              </div>
            </div>
          </div>
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
