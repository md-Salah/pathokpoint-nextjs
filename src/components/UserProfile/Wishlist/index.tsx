"use client";
import React, { useState } from "react";
import TabOptions from "../shared/TabOptions";
import { wishlistTabs } from "@/constants/userProfile";
import { truncateWithEllipsis } from "@/utils";
import { ConditionBadge } from "@/micro-components";
import { BsTrash } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Wishlist = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const handleSetActiveTabIndex = (index: number) => {
    setActiveTabIndex(index);
  };
  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="hidden md:block">
        <TabOptions
          tabOptions={wishlistTabs}
          activeIndex={activeTabIndex}
          setActiveIndex={handleSetActiveTabIndex}
        />
      </div>
      <div className="overflow-x-auto bg-white rounded-lg h-screen p-10">
        <table className="table">
          <tbody>
            <tr>
              <td>
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
                      {truncateWithEllipsis(
                        "by Bibhutibushan Bandapaddhay",
                        16
                      )}
                    </span>
                    <ConditionBadge condition="Old-like-New" />
                    <span className="text-error text-xs">
                      30 items in stock
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <span className="text-black04 text-sm font-semibold line-through">
                    $550
                  </span>
                  <span className="text-black02 text-base font-bold">$550</span>
                </div>
              </td>
              <td>
                <BsTrash size={20} className="cursor-pointer" />
              </td>
              <td>
                <button className="btn btn-primary">
                  <MdOutlineAddShoppingCart size={20} />
                  Move to Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
