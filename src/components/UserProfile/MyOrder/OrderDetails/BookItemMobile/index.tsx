import { truncateWithEllipsis } from "@/utils";
import React from "react";

const BookItemMobile = () => {
  return (
    <div className="flex items-center justify-between w-full pb-4 border-b border-b-black06">
      <div className="flex items-start space-x-4 h-fit">
        <div className="w-12 bg-white border-[#E6E6E6] relative">
          <img
            src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
            className="w-full rounded-md relative"
          />
          <div className="absolute -bottom-1 -right-3 z-10 bg-white py-[3px] px-[5px] rounded-xl border border-black06 text-xxs text-[#2B2B2B] text-center font-bold">
            <span>x2</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-sm md:text-base font-semibold text-black02">
            Pather Panchali
          </span>
          <span className="text-xxs md:text-xs text-black04 font-normal">
            {truncateWithEllipsis("by Bibhutibushan Bandapaddhay", 16)}
          </span>
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-base text-[#2B2B2B]">৳500</span>
            <span className="font-medium text-xs text-secondary-content line-through">
              ৳600
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-1">
          <span className="text-xs text-secondary-content">Total:</span>
          <span className="font-semibold text-base text-[#2B2B2B]">৳500</span>
        </div>
        <div className="p-[3px] bg-primary bg-opacity-20 text-primary text-xs rounded-full font-semibold">
          <span>Old-Readable</span>
        </div>
      </div>
    </div>
  );
};

export default BookItemMobile;
