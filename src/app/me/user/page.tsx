"use client";
import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { BiSolidLogOut } from "react-icons/bi";
import { MyOrder, MyProfile } from "@/components";

const getMenuContent = (activeMenu: number) => {
  switch (activeMenu) {
    case 0:
      return <MyProfile />;
      break;
    case 1:
      return <MyOrder />;
      break;
    default:
      break;
  }
};

const User = () => {
  const [activeMenu, setActiveMenu] = useState<number>(0);

  const handleSetActiveMenu = (index: number) => {
    setActiveMenu(index);
  };

  return (
    <div className="layout-container py-10 flex items-start space-x-4 w-full">
      <div className="bg-white rounded-lg h-screen w-[30%]">
        <div className="flex flex-col items-center space-y-2 py-6 border-b border-b-[#E6E6E6]">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <span className="text-sm font-semibold text-[#363739]">
            Tanvir Rayhan
          </span>
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
            >
              <MdReviews size={20} color="#9B9B9C" />
              <span className="text-black04 text-sm font-bold">My Reviews</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer py-3 pl-6 hover:bg-primary hover:bg-opacity-20 hover:border-r-4 hover:border-r-primary w-full">
            <BiSolidLogOut size={20} color="#9B9B9C" />
            <span className="text-black04 text-sm font-bold">Sign Out</span>
          </div>
        </div>
      </div>
      {getMenuContent(activeMenu)}
    </div>
  );
};

export default User;
