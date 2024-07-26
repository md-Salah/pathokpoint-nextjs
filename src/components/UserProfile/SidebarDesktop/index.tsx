"use client";
import React from "react";
import ProfileAvatar from "../shared/ProfileAvatar";
import { IoDocumentText, IoPersonSharp } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSolidLogOut } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import Link from "next/link";
import { userProfileLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";

type Props = {
  handleOpenSignOutConfirmationModal: () => void;
};

const SidebarDesktop = ({ handleOpenSignOutConfirmationModal }: Props) => {
  const pathname = usePathname();

  return (
    <div className="bg-white h-screen w-[30%] hidden md:block">
      <div className="border-b border-b-[#E6E6E6]">
        <ProfileAvatar />
      </div>
      <div className="flex flex-col space-y-14">
        <div className="flex flex-col items-start space-y-2 py-4">
          <Link
            className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
              pathname === userProfileLinks.myProfile &&
              "bg-primary bg-opacity-20 border-r-4 border-r-primary"
            } hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full`}
            href={userProfileLinks.myProfile}
          >
            <IoPersonSharp size={20} color="#9B9B9C" />
            <span className="text-black04 text-sm font-bold">My Profile</span>
          </Link>
          <Link
            className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
              pathname === userProfileLinks.myOrder &&
              "bg-primary bg-opacity-20 border-r-4 border-r-primary"
            } hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full`}
            href={userProfileLinks.myOrder}
          >
            <IoDocumentText size={20} color="#9B9B9C" />
            <span className="text-black04 text-sm font-bold">My Order</span>
          </Link>
          <Link
            className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
              pathname === userProfileLinks.following &&
              "bg-primary bg-opacity-20 border-r-4 border-r-primary"
            } hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full`}
            href={userProfileLinks.following}
          >
            <BsFillPersonPlusFill size={20} color="#9B9B9C" />
            <span className="text-black04 text-sm font-bold">Following</span>
          </Link>
          <Link
            className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
              pathname === userProfileLinks.wishlist &&
              "bg-primary bg-opacity-20 border-r-4 border-r-primary"
            } hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full`}
            href={userProfileLinks.wishlist}
          >
            <FaHeart size={20} color="#9B9B9C" />
            <span className="text-black04 text-sm font-bold">Wishlist</span>
          </Link>
          <Link
            className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
              pathname === userProfileLinks.myReviews &&
              "bg-primary bg-opacity-20 border-r-4 border-r-primary"
            } hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full`}
            href={userProfileLinks.myReviews}
          >
            <MdReviews size={20} color="#9B9B9C" />
            <span className="text-black04 text-sm font-bold">My Reviews</span>
          </Link>
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer py-3 pl-6 hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full"
          onClick={handleOpenSignOutConfirmationModal}
        >
          <BiSolidLogOut size={20} color="#9B9B9C" />
          <span className="text-black04 text-sm font-bold">Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;
