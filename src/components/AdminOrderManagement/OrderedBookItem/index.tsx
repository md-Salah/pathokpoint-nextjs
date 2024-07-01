import { truncateWithEllipsis } from "@/utils";
import React from "react";

const OrderedBookItem = () => {
  return (
    <div className="flex items-start space-x-2 h-fit">
      <div className="w-12 bg-white border-[#E6E6E6]">
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
        <span className="text-xxs md:text-xs text-[#2B2B2B]">101817890</span>
      </div>
    </div>
  );
};

export default OrderedBookItem;
