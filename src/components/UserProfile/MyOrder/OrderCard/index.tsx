"use client";
import { MIN_DESKTOP_WIDTH } from "@/constants/constants";
import useScreenSize from "@/hooks/useScreenSize";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  handleSetActiveOrderId?: (orderId: number) => void;
};

const OrderCard = ({ handleSetActiveOrderId }: Props) => {
  const { width } = useScreenSize();
  const router = useRouter();
  const handleViewOrderClick = () => {
    if (width >= MIN_DESKTOP_WIDTH && handleSetActiveOrderId) {
      handleSetActiveOrderId(1);
    } else {
      router.push("/me/user/my-order/1");
    }
  };
  return (
    <div className="w-full md:bg-white flex items-center justify-between p-5 md:py-5 md:px-7">
      <div className="flex flex-col space-y-2">
        <div className="text-base flex items-center space-x-1">
          <span className="text-[#2B2B2B]">Order ID</span>
          <span className="text-primary font-bold">#A125452</span>
        </div>
        <div className="flex flex-col space-y-1 md:hidden">
          <div className="flex items-center space-x-1 text-xs">
            <span className="text-secondary-content">Total Price:</span>
            <span className="text-[#2B2B2B] font-bold">৳520</span>
          </div>
          <div className="flex items-center space-x-1 text-xs">
            <span className="text-secondary-content">Due:</span>
            <span className="text-[#2B2B2B] font-bold">৳520</span>
          </div>
        </div>
        <div className="md:space-x-2 hidden md:flex md:items-center">
          <div className="bg-black07 text-xxs text-black02 py-[3px] px-2 rounded-lg w-fit">
            <span>Oct 11, 2023</span>
          </div>
          <div className="bg-black07 text-xxs text-black02 py-[3px] px-2 rounded-lg w-fit">
            <span>11:45 PM</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-10">
        <div className="md:flex md:items-center md:space-x-4 hidden">
          <div className="flex items-center space-x-1 text-xs">
            <span className="text-secondary-content">Total Price:</span>
            <span className="text-[#2B2B2B] font-bold">৳520</span>
          </div>
          <div className="flex items-center space-x-1 text-xs">
            <span className="text-secondary-content">Due:</span>
            <span className="text-[#2B2B2B] font-bold">৳520</span>
          </div>
        </div>
        <div>
          <button
            className="btn btn-primary btn-xs md:btn-sm px-5 md:px-7"
            onClick={handleViewOrderClick}
          >
            View Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
