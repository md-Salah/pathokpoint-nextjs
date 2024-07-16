import React from "react";
import ProfileAvatar from "../shared/ProfileAvatar";
import { IoPersonSharp, IoDocumentText } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSolidLogOut } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { HiChevronRight } from "react-icons/hi2";
import Link from "next/link";

const SidebarMobile = () => {
  return (
    <div className="w-full space-y-4 md:hidden">
      <div className="w-full mx-auto">
        <ProfileAvatar />
      </div>
      <div className="border border-black06 rounded-lg px-4 mx-4">
        <Link
          href={"/me/user/my-profile"}
          className="w-full flex item-end justify-between border-b border-b-black06 py-3"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-primary bg-opacity-10 p-2 rounded-full">
              <IoPersonSharp size={20} color="#FF8200" />
            </div>
            <span className="text-black0 text-sm">My Profile</span>
          </div>
          <div className="pt-2">
            <HiChevronRight size={20} />
          </div>
        </Link>
        <Link
          href={"/me/user/my-order"}
          className="w-full flex item-center justify-between border-b border-b-black06 py-3"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-primary bg-opacity-10 p-2 rounded-full">
              <IoDocumentText size={20} color="#FF8200" />
            </div>
            <span className="text-black0 text-sm">My Order</span>
          </div>
          <div className="pt-2">
            <HiChevronRight size={20} />
          </div>
        </Link>
        <Link href={'/me/user/following'} className="w-full flex item-center justify-between border-b border-b-black06 py-3">
          <div className="flex items-center space-x-4">
            <div className="bg-primary bg-opacity-10 p-2 rounded-full">
              <BsFillPersonPlusFill size={20} color="#FF8200" />
            </div>
            <span className="text-black0 text-sm">Following</span>
          </div>
          <div className="pt-2">
            <HiChevronRight size={20} />
          </div>
        </Link>
        <div className="w-full flex item-center justify-between border-b border-b-black06 py-3">
          <div className="flex items-center space-x-4">
            <div className="bg-primary bg-opacity-10 p-2 rounded-full">
              <FaHeart size={20} color="#FF8200" />
            </div>
            <span className="text-black0 text-sm">Wishlist</span>
          </div>
          <div className="pt-2">
            <HiChevronRight size={20} />
          </div>
        </div>
        <div className="w-full flex item-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <div className="bg-primary bg-opacity-10 p-2 rounded-full">
              <MdReviews size={20} color="#FF8200" />
            </div>
            <span className="text-black0 text-sm">My Reviews</span>
          </div>
          <div className="pt-2">
            <HiChevronRight size={20} />
          </div>
        </div>
      </div>
      <div className="border border-black06 rounded-lg px-4 mx-4">
        <div className="w-full flex item-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <div className="bg-primary bg-opacity-10 p-2 rounded-full">
              <BiSolidLogOut size={20} color="#FF8200" />
            </div>
            <span className="text-black0 text-sm">Sign Out</span>
          </div>
          <div className="pt-2">
            <HiChevronRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
