"use client";
import Image from "next/image";
import Link from "next/link";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { IoIosArrowBack } from "react-icons/io";
import { IoImagesOutline } from "react-icons/io5";
import {
  MdOutlineReviews,
  MdOutlineShoppingCart,
  MdOutlineStorefront,
} from "react-icons/md";
import { PiPackage } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";

type Props = {
  isSidebarExpandClicked: boolean;
  setIsSidebarExpandClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarCollapse = ({
  isSidebarExpandClicked,
  setIsSidebarExpandClicked,
}: Props) => {
  const [isProductManagementClicked, setIsProductManagementClicked] =
    useState<boolean>(false);
  const [isTransactionClicked, setIsTransactionClicked] =
    useState<boolean>(false);
  const productManagementDropdownRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);
  const transactionDropdownRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      productManagementDropdownRef.current &&
      !productManagementDropdownRef.current.contains(event.target as Node)
    ) {
      setIsProductManagementClicked(false);
    }

    if (
      transactionDropdownRef.current &&
      !transactionDropdownRef.current.contains(event.target as Node)
    ) {
      setIsTransactionClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="w-32 bg-gray-900 text-gray-200 py-10 min-h-screen md:block hidden transition-all duration-500">
      <div className="pt-28 text-base font-bold py-8 px-2 flex items-center justify-between w-full">
        <span>MAINMENU</span>
        <div
          className="bg-primary rounded-md py-[8px] px-[5px] cursor-pointer absolute left-28"
          onClick={() => setIsSidebarExpandClicked((prevState) => !prevState)}
        >
          <IoIosArrowBack
            size={24}
            className={`transition-all duration-200 ${
              isSidebarExpandClicked ? "" : "rotate-180"
            }`}
          />
        </div>
      </div>
      <div className="py-2 px-3 flex flex-col space-y-2">
        <Link
          href={"/admin/dashboard"}
          className="text-center hover:bg-gray-700 rounded-lg cursor-pointer w-full p-2 "
        >
          <RxDashboard size={24} className="mx-auto" />
        </Link>
        <div className="relative w-full">
          <div
            className="pl-10 py-2 hover:bg-gray-700 rounded-lg relative cursor-pointer"
            onClick={() => setIsProductManagementClicked((prev) => !prev)}
          >
            <MdOutlineStorefront size={24} />
          </div>
          {isProductManagementClicked && (
            <div
              className="absolute left-32 bg-gray-900 p-3 rounded-xl top-0 transition-all duration-500 w-60 z-10"
              ref={productManagementDropdownRef}
            >
              <Link
                href={"/admin/product-management/books"}
                className="block py-2 hover:bg-gray-700 text-sm px-3 rounded-lg"
              >
                Books
              </Link>
              <Link
                href={"/admin/product-management/authors"}
                className="block py-2 hover:bg-gray-700 rounded-lg text-sm px-3"
              >
                Authors
              </Link>
              <Link
                href={"/admin/product-management/categories"}
                className="block py-2 hover:bg-gray-700 rounded-lg text-sm px-3"
              >
                Category
              </Link>
              <Link
                href={"/admin/product-management/publishers"}
                className="block py-2 hover:bg-gray-700 rounded-lg text-sm px-3"
              >
                Publishers
              </Link>
              <a
                href="#"
                className="block py-2 hover:bg-gray-700 rounded-lg text-sm px-3"
              >
                Tags
              </a>
            </div>
          )}
        </div>
        <Link
          href={"/admin/images"}
          className="text-center hover:bg-gray-700 rounded-lg cursor-pointer w-full p-2"
        >
          <IoImagesOutline size={24} className="mx-auto" />
        </Link>
        <Link
          href={"/admin/order-management"}
          className="text-center hover:bg-gray-700 rounded-lg cursor-pointer w-full p-2"
        >
          <MdOutlineShoppingCart size={24} className="mx-auto" />
        </Link>
        <Link
          href={"/admin/coupon"}
          className="text-center hover:bg-gray-700 rounded-lg cursor-pointer w-full p-2"
        >
          <CiShoppingTag size={24} className="mx-auto" />
        </Link>
        <Link
          href={"/admin/reviews"}
          className="text-center hover:bg-gray-700 rounded-lg cursor-pointer w-full p-2"
        >
          <MdOutlineReviews size={24} color="#ffffff" className="mx-auto" />
        </Link>
        <Link
          href={"/admin/users"}
          className="text-center hover:bg-gray-700 rounded-lg cursor-pointer w-full p-2"
        >
          <FaRegUser size={24} className="mx-auto" />
        </Link>
        <Link
          href={"/admin/couriers"}
          className="text-center hover:bg-gray-700 rounded-lg cursor-pointer w-full p-2"
        >
          <PiPackage size={24} className="mx-auto" />
        </Link>
        <div className="relative w-full">
          <div
            className="pl-10 py-2 hover:bg-gray-700 rounded-lg relative cursor-pointer"
            onClick={() => setIsTransactionClicked((prev) => !prev)}
          >
            <FcStatistics size={24} />
          </div>
          {isTransactionClicked && (
            <div
              className="absolute left-32 bg-gray-900 p-3 rounded-xl top-0 transition-all duration-500 w-60 z-10"
              ref={transactionDropdownRef}
            >
              <Link
                href={"/admin/transaction/payment-gateway"}
                className="block py-2 hover:bg-gray-700 text-sm px-3 rounded-lg"
              >
                Payment Gateway
              </Link>
              <Link
                href={"/admin/transaction/activity-log"}
                className="block py-2 hover:bg-gray-700 text-sm px-3 rounded-lg"
              >
                Activity Log
              </Link>
              <Link
                href={"/admin/transaction/email-log"}
                className="block py-2 hover:bg-gray-700 text-sm px-3 rounded-lg"
              >
                Email Log
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarCollapse;
