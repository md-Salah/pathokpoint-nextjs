"use client";
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineStorefront } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";
import Image from "next/image";

const Sidebar = () => {
  const [isProductManagementClicked, setIsProductManagementClicked] =
    useState(false);
  const [isTransactionClicked, setIsTransactionClicked] = useState(false);
  return (
    <>
      <div className="w-72 bg-gray-900 text-gray-200 min-h-screen py-10">
        <div className="mx-auto relative h-[26px] md:h-[70px] max-w-[128px]">
          <Image
            alt="Pathok Point"
            src="/logo-trans.png"
            fill
            priority
            className="object-contain object-left text-xl font-bold"
          />
        </div>
        <div className="text-lg font-bold py-8">MAINMENU</div>
        <div className="p-2 flex flex-col space-y-2">
          <div className="sidebar-menu-btn">
            <RxDashboard size={18} />
            <span>Dashboard</span>
          </div>
          <div>
            <div
              className={`sidebar-menu-btn justify-between ${
                isProductManagementClicked ? "bg-gray-700" : ""
              }`}
              onClick={() =>
                setIsProductManagementClicked((prevState) => !prevState)
              }
            >
              <div className="flex items-center space-x-2">
                <MdOutlineStorefront size={18} />
                <span>Product Management</span>
              </div>
              <IoIosArrowDown
                className={`${
                  isProductManagementClicked
                    ? "rotate-180 transition-all duration-200"
                    : "transition-all duration-200"
                }`}
              />
            </div>
            <div
              className={`mt-2 pl-6 ${
                isProductManagementClicked
                  ? "flex flex-col space-y-2 transition-all duration-500 ease-out"
                  : "hidden transition-all duration-500 ease-in"
              }`}
            >
              <a
                href="#"
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Books
              </a>
              <a
                href="#"
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Authors
              </a>
              <a
                href="#"
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Category
              </a>
              <a
                href="#"
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Publishers
              </a>
              <a
                href="#"
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Tags
              </a>
            </div>
          </div>
          <div className="sidebar-menu-btn">
            <RxDashboard size={18} />
            <span>Images</span>
          </div>
          <div className="sidebar-menu-btn">
            <RxDashboard size={18} />
            <span>Order Management</span>
          </div>
          <div className="sidebar-menu-btn">
            <RxDashboard size={18} />
            <span>Coupon</span>
          </div>
          <div className="sidebar-menu-btn">
            <RxDashboard size={18} />
            <span>Reviews</span>
          </div>
          <div className="sidebar-menu-btn">
            <FaRegUser size={18} />
            <span>User</span>
          </div>
          <div className="sidebar-menu-btn">
            <PiPackage size={18} />
            <span>Courier</span>
          </div>
          <div>
            <div
              className={`sidebar-menu-btn justify-between ${
                isTransactionClicked ? "bg-gray-700" : ""
              }`}
              onClick={() => setIsTransactionClicked((prevState) => !prevState)}
            >
              <div className="flex items-center space-x-2">
                <MdOutlineStorefront size={18} />
                <span>Transaction</span>
              </div>
              <IoIosArrowDown
                className={`${
                  isTransactionClicked
                    ? "rotate-180 transition-all duration-200"
                    : "transition-all duration-200"
                }`}
              />
            </div>
            <div
              className={`mt-2 pl-6 ${
                isTransactionClicked
                  ? "flex flex-col space-y-2 transition-all duration-500 ease-out"
                  : "hidden"
              }`}
            >
              <a
                href="#"
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Payment Gateway
              </a>
              <a
                href="#"
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Activity Log
              </a>
              <a
                href="#"
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Email Log
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
