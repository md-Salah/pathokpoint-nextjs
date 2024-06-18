"use client";
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineStorefront } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";
import { MdOutlineReviews } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [isSidebarExpandClicked, setIsSidebarExpandClicked] = useState(true);
  return (
    <>
      <div className="w-72 bg-gray-900 text-gray-200 py-10 min-h-fit md:block hidden">
        <div className="mx-auto relative h-[26px] md:h-[70px] max-w-[128px]">
          <Image
            alt="Pathok Point"
            src="/logo-trans.png"
            fill
            priority
            className="object-contain object-left text-xl font-bold"
          />
        </div>
        <div className="text-lg font-bold py-8 px-2 flex items-center justify-between">
          <span className="mx-auto">MAINMENU</span>
          <div
            className="bg-primary rounded-md py-[8px] px-[5px] cursor-pointer"
            onClick={() => setIsSidebarExpandClicked((prevState) => !prevState)}
          >
            <IoIosArrowBack
              size={18}
              className={`transition-all duration-200 ${
                isSidebarExpandClicked ? "" : "rotate-180"
              }`}
            />
          </div>
        </div>
        <div className="p-2 flex flex-col space-y-2">
          <Link className="sidebar-menu-btn" href={"/admin/dashboard"}>
            <RxDashboard size={18} />
            <span>Dashboard</span>
          </Link>
          <details className="collapse collapse-arrow">
            <summary className="collapse-title pl-8 hover:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2">
                <MdOutlineStorefront size={18} />
                <span>Product Management</span>
              </div>
            </summary>
            <div className="collapse-content">
              <Link
                href={"/admin/product-management/books"}
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Books
              </Link>
              <Link
                href={"/admin/product-management/authors"}
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Authors
              </Link>
              <Link
                href={"/admin/product-management/categories"}
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Category
              </Link>
              <Link
                href={"/admin/product-management/publishers"}
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Publishers
              </Link>
              <a
                href="#"
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Tags
              </a>
            </div>
          </details>
          <Link href={"/admin/images"} className="sidebar-menu-btn">
            <IoImagesOutline size={18} />
            <span>Images</span>
          </Link>
          <Link href={"/admin/order-management"} className="sidebar-menu-btn">
            <MdOutlineShoppingCart size={18} />
            <span>Order Management</span>
          </Link>
          <Link href={"/admin/coupon"} className="sidebar-menu-btn">
            <CiShoppingTag size={18} />
            <span>Coupon</span>
          </Link>
          <Link href={"/admin/reviews"} className="sidebar-menu-btn">
            <MdOutlineReviews size={18} />
            <span>Reviews</span>
          </Link>
          <Link href={"/admin/users"} className="sidebar-menu-btn">
            <FaRegUser size={18} />
            <span>User</span>
          </Link>
          <Link href={"/admin/couriers"} className="sidebar-menu-btn">
            <PiPackage size={18} />
            <span>Courier</span>
          </Link>
          <details className="collapse collapse-arrow">
            <summary className="collapse-title pl-8 hover:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2">
                <FcStatistics size={18} />
                <span>Transaction</span>
              </div>
            </summary>
            <div className="collapse-content">
              <Link
                href={"/admin/transaction/payment-gateway"}
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Payment Gateway
              </Link>
              <Link
                href={"/admin/transaction/activity-log"}
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Activity Log
              </Link>
              <Link
                href={"/admin/transaction/email-log"}
                className="block py-2 pl-8 hover:bg-gray-700 rounded text-sm"
              >
                Email Log
              </Link>
            </div>
          </details>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
