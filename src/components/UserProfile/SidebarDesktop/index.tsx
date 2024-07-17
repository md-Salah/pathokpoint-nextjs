import React from "react";
import ProfileAvatar from "../shared/ProfileAvatar";
import { IoDocumentText, IoPersonSharp } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSolidLogOut } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

type Props = {
  activeMenu: number;
  handleSetActiveMenu: (activeMenu: number) => void;
  handleOpenSignOutConfirmationModal: () => void;
};

const SidebarDesktop = ({
  activeMenu,
  handleSetActiveMenu,
  handleOpenSignOutConfirmationModal,
}: Props) => {
  return (
    <div className="bg-white rounded-lg h-screen w-[30%] hidden md:block">
      <div className="border-b border-b-[#E6E6E6]">
        <ProfileAvatar />
      </div>
      <div className="flex flex-col space-y-14">
        <div className="flex flex-col items-start space-y-2 py-4">
          <div
            className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
              activeMenu === 0 &&
              "bg-primary bg-opacity-20 border-r-4 border-r-primary"
            } hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full`}
            onClick={() => handleSetActiveMenu(0)}
          >
            <IoPersonSharp size={20} color="#9B9B9C" />
            <span className="text-black04 text-sm font-bold">My Profile</span>
          </div>
          <div
            className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
              activeMenu === 1 &&
              "bg-primary bg-opacity-20 border-r-4 border-r-primary"
            } hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full`}
            onClick={() => handleSetActiveMenu(1)}
          >
            <IoDocumentText size={20} color="#9B9B9C" />
            <span className="text-black04 text-sm font-bold">My Order</span>
          </div>
          <div
            className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
              activeMenu === 2 &&
              "bg-primary bg-opacity-20 border-r-4 border-r-primary"
            } hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full`}
            onClick={() => handleSetActiveMenu(2)}
          >
            <BsFillPersonPlusFill size={20} color="#9B9B9C" />
            <span className="text-black04 text-sm font-bold">Following</span>
          </div>
          <div
            className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
              activeMenu === 3 &&
              "bg-primary bg-opacity-20 border-r-4 border-r-primary"
            } hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full`}
            onClick={() => handleSetActiveMenu(3)}
          >
            <FaHeart size={20} color="#9B9B9C" />
            <span className="text-black04 text-sm font-bold">Wishlist</span>
          </div>
          <div
            className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
              activeMenu === 4 &&
              "bg-primary bg-opacity-20 border-r-4 border-r-primary"
            } hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full`}
            onClick={() => handleSetActiveMenu(4)}
          >
            <MdReviews size={20} color="#9B9B9C" />
            <span className="text-black04 text-sm font-bold">My Reviews</span>
          </div>
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
