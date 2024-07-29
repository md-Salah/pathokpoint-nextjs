import React from "react";
import { CarouselModal, Pagination, ReviewDetailsModal } from "@/components";
import { truncateString } from "@/utils";
import Link from "next/link";
import { FiEye, FiPlus } from "react-icons/fi";
import { RiStarFill } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { IPagination } from "@/interface";

type Props = {
  tabOptions: {
    name: string;
  }[];
  activeTab: string;
  handleSetActiveTabOption: (tab: string) => void;
  pagination: IPagination;
  handleOpenReviewModal: () => void;
  handleCloseReviewModal: () => void;
  handleOpenCarouselModal: () => void;
  handleCloseCarouselModal: () => void;
  isCarouselModalOpen: boolean;
};

const AdminReviews = ({
  tabOptions,
  activeTab,
  handleSetActiveTabOption,
  pagination,
  handleOpenReviewModal,
  handleCloseReviewModal,
  handleCloseCarouselModal,
  handleOpenCarouselModal,
  isCarouselModalOpen,
}: Props) => {
  const { currentPage, totalPages, handleChangeCurrentPage } = pagination;
  return (
    <>
      <div className="w-[95%] sm:w-[80%] p-4 sm:p-8 bg-white rounded-md my-8 mx-auto flex flex-col space-y-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg sm:text-2xl font-medium text-[#363739]">
            Reviews
          </h1>
          <button className="btn btn-secondary btn-sm sm:btn-md text-white text-sm sm:text-base rounded-lg">
            <Link
              href={"/admin/reviews/add-review"}
              className="flex items-center space-x-4"
            >
              <FiPlus color="#ffffff" size={20} />
              Add Review
            </Link>
          </button>
        </div>
        <div className="border-b-[1px] border-[#6F6E77] text-sm sm:text-base border-opacity-20 w-full">
          <div className="flex items-center space-x-4 overflow-x-auto">
            {tabOptions.map((tab) => (
              <button
                key={tab.name}
                className={`py-2 px-4 ${
                  activeTab === tab.name
                    ? "text-primary border-b-2 border-primary font-bold"
                    : "text-[#363739]"
                }`}
                onClick={() => handleSetActiveTabOption(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-y-hidden overflow-x-auto relative">
          <table className="table w-full text-xs sm:text-sm table-pin-rows">
            <thead className="bg-base-200">
              <tr>
                <th>Order ID</th>
                <th>Book ID</th>
                <th>Name</th>
                <th>Comment</th>
                <th>Avg. Rating</th>
                <th>Image</th>
                <th>Quick View</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Order#1234A</td>
                <td>Order#1234A</td>
                <td>Order#1234A</td>
                <td className="w-60 text-justify">
                  {truncateString(
                    "তাদের থেকে এটা দ্বিতীয় বার বই নেয়া ভিডিও দেখিয়ে বই দেয়াটা বেশ ভালো লেগেছে দেখে ভালো না লাগলেও আপনি নাও নিতে পারেন এটা সবথেকে ভালো দিক আমার দেয়া তবে দামটা কমলে সবাই নিতে আরো বেশি স্বাচ্ছন্দ বোধ করত তবে সবদিক বিবেচনা করলে তাদের সার্ভিস অনেক ভালো আপনারা নির্দ্বিধায় নিতে পারেন শুধু দামের দিকে একটু বিবেচনা রাখবেন পাঠক পয়েন্ট অনেক ধন্যবাদ এই বইগুলো দেয়ার জন্য।,",
                    60
                  )}
                </td>
                <td>4.7/5</td>
                <td>
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
                      onClick={handleOpenCarouselModal}
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
                </td>
                <td>
                  <FiEye
                    size={20}
                    className="cursor-pointer"
                    onClick={handleOpenReviewModal}
                  />
                </td>
                <td>
                  <div className="flex items-center space-x-2">
                    <button className="btn btn-sm btn-success text-white">
                      Approve
                    </button>
                    <button className="btn btn-sm btn-error btn-outline">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-xs text-[#6F6E77]">1 of 1240 Authors</span>

          <div className="flex items-center justify-end space-x-2">
            <span className="text-xs text-[#6F6E77]">
              The page you&apos;re on
            </span>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleChangeCurrentPage={handleChangeCurrentPage}
            />
          </div>
        </div>
      </div>
      <dialog id="review_details_modal" className="modal">
        <ReviewDetailsModal onClose={handleCloseReviewModal} />
      </dialog>
      <dialog id="carousel_modal" className="modal">
        <CarouselModal
          isOpen={isCarouselModalOpen}
          onClose={handleCloseCarouselModal}
        />
      </dialog>
    </>
  );
};

export default AdminReviews;
