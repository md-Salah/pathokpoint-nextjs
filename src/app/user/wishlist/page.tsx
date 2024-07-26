import { SidebarDesktopLayout, Wishlist } from "@/components";
import { truncateWithEllipsis } from "@/utils";
import Link from "next/link";
import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { ConditionBadge } from "@/micro-components";
import BookItemMobile from "@/components/UserProfile/Wishlist/BookItemMobile";

const WishlistPage = () => {
  return (
    <>
      <SidebarDesktopLayout>
        <Wishlist />
      </SidebarDesktopLayout>
      <div className="bg-white space-y-4 h-screen overflow-y-auto my-10 w-full md:hidden">
        <div className="flex items-center w-full pt-6 pb-3 bg-white md:hidden">
          <Link href={"/user"} className="pl-5">
            <IoChevronBack size={20} />
          </Link>
          <div className="flex justify-center w-full absolute">
            <h2 className="text-base font-bold text-black02">Wishlist</h2>
          </div>
        </div>
        <div className="px-5 space-y-5">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <BookItemMobile key={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
