import StarRating from "@/components/StarRating";
import { ConditionBadge } from "@/micro-components";
import Image from "next/image";
import React from "react";

type Props = {
  handleOpenImageCarouselModal: () => void;
};

const ReviewItem = ({ handleOpenImageCarouselModal }: Props) => {
  const defaultSrc = "/default/book.png";

  return (
    <div className="flex items-start space-x-4 w-full border-b border-b-black06 pb-5">
      <div>
        <Image
          src={defaultSrc}
          alt="book"
          width={64}
          height={64}
          objectFit="cover"
          className="rounded-md"
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
            <Image
              src={defaultSrc}
              alt="book"
              width={64}
              height={64}
              objectFit="cover"
              className="rounded-md"
            />
            <div
              className="relative cursor-pointer"
              onClick={handleOpenImageCarouselModal}
            >
              <Image
                src={defaultSrc}
                alt="book"
                width={64}
                height={64}
                objectFit="cover"
                className="rounded-md"
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
