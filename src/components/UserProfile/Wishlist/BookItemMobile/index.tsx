import { ConditionBadge } from "@/micro-components";
import { truncateWithEllipsis } from "@/utils";
import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const BookItemMobile = () => {
  return (
    <div className="flex items-center justify-between w-full pb-4 border-b border-b-black06">
      <div className="flex items-start space-x-4 h-fit">
        <div className="w-16 bg-white border-[#E6E6E6]">
          <img
            src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
            className="w-full rounded-md relative"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-sm md:text-base font-semibold text-black02">
            Pather Panchali
          </span>
          <span className="text-xxs md:text-xs text-black04">
            {truncateWithEllipsis("by Bibhutibushan Bandapaddhay", 16)}
          </span>
          <ConditionBadge condition="New" />
          <div className="flex items-center space-x-1">
            <span className="font-bold text-base text-[#2B2B2B]">৳500</span>
            <span className="font-semibold text-xs text-secondary-content line-through">
              ৳600
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <div className="flex items-center space-x-2">
          <FaRegTrashCan size={20} />
          <button className="btn btn-sm btn-primary">Move to Cart</button>
        </div>
        <div className="text-xs text-error font-semibold">
          <span>30 items in stock</span>
        </div>
      </div>
    </div>
  );
};

export default BookItemMobile;
