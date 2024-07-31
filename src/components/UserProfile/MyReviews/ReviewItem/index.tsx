import StarRating from "@/components/StarRating";
import { ConditionBadge } from "@/micro-components";
import React from "react";

type Props = {
  handleOpenImageCarouselModal: () => void;
};

const ReviewItem = ({ handleOpenImageCarouselModal }: Props) => {
  return (
    <div className="flex items-start space-x-4 w-full border-b border-b-black06 pb-5">
      <div>
        <img
          src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
          className="w-24"
        />
        <button className="btn btn-xs btn-outline btn-primary text-[10px] text-nowrap mt-4">
          Edit Review
        </button>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <span className="text-sm md:text-base font-semibold text-black02">
              Pather Panchali
            </span>
            <span className="text-xxs md:text-xs text-black04 truncate max-w-36 md:max-w-56">
              by Bibhutibushan Bandapaddhay
            </span>
            <StarRating rating={4} isReadOnly={true} iconSize={16} />
          </div>
          <div className="flex flex-col items-end space-y-1">
            <span className="text-xxs text-[#9B9B9C]">22.03.2023</span>
            <ConditionBadge condition="Old-like-New" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-4 gap-2 lg:gap-4">
          <p className="text-xs font-bn col-span-12 lg:col-span-9 text-justify">
            তাদের থেকে এটা দ্বিতীয় বার বই নেয়া ভিডিও দেখিয়ে বই দেয়াটা বেশ
            ভালো লেগেছে দেখে ভালো না লাগলেও আপনি নাও নিতে পারেন এটা সবথেকে ভালো
            দিক আমার দেয়া তবে দামটা কমলে সবাই নিতে আরো বেশি স্বাচ্ছন্দ বোধ করত
            তবে সবদিক বিবেচনা করলে তাদের সার্ভিস অনেক ভালো আপনারা নির্দ্বিধায়
            নিতে পারেন শুধু দামের দিকে একটু বিবেচনা রাখবেন পাঠক পয়েন্ট। অনেক
            ধন্যবাদ এই বইগুলো দেয়ার জন্য
          </p>

          <div className="flex items-center justify-start lg:justify-end space-x-2 col-span-12 lg:col-span-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s"
              className="w-16 h-16 object-cover"
            />
            <div
              className="relative cursor-pointer"
              onClick={handleOpenImageCarouselModal}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ekxu3OzvIQLn2K9bnYPHvNlHiVnR216eg&s"
                className="w-16 h-16 object-cover relative opacity-25 z-0"
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

export default ReviewItem;
