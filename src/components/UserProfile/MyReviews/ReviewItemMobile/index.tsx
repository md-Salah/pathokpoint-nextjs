import StarRating from "@/components/StarRating";
import { ConditionBadge } from "@/micro-components";
import { truncateWithEllipsis } from "@/utils";
import React from "react";

type Props = {
  handleOpenImageCarouselModal: () => void;
};

const ReviewItemMobile = ({ handleOpenImageCarouselModal }: Props) => {
  return (
    <div className="flex items-start space-x-4 w-full border-b border-b-black06 pb-5">
      <div className="w-24 bg-white border-[#E6E6E6]">
        <img
          src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
          className="w-full rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-1 w-full">
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <span className="text-sm md:text-base font-semibold text-black02">
              Pather Panchali
            </span>
            <span className="text-xxs md:text-xs text-black04">
              {truncateWithEllipsis("by Bibhutibushan Bandapaddhay", 16)}
            </span>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <span className="text-xxs text-[#9B9B9C]">22.03.2023</span>
            <ConditionBadge condition="Old-like-New" />
          </div>
        </div>
        <StarRating rating={4} isReadOnly={true} iconSize={16} />
        <div className="pr-5">
          <span className="text-xs text-[#363739]">
            তাদের থেকে এটা দ্বিতীয় বার বই নেয়া ভিডিও দেখিয়ে বই দেয়াটা বেশ
            ভালো লেগেছে দেখে ভালো না লাগলেও আপনি নাও নিতে পারেন এটা সবথেকে ভালো
            দিক আমার দেয়া তবে দামটা কমলে সবাই নিতে আরো বেশি স্বাচ্ছন্দ বোধ করত
            তবে সবদিক বিবেচনা করলে তাদের সার্ভিস অনেক ভালো আপনারা নির্দ্বিধায়
            নিতে পারেন শুধু দামের দিকে একটু বিবেচনা রাখবেন পাঠক পয়েন্ট। অনেক
            ধন্যবাদ এই বইগুলো দেয়ার জন্য
          </span>
        </div>
        <div className="flex flex-col space-y-5 pt-2">
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
    </div>
  );
};

export default ReviewItemMobile;
