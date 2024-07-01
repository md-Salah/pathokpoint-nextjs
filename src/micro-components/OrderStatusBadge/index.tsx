import { orderStatuses } from "@/constants/constants";
import React from "react";

const getOrderStatusStyles = (
  status: string
): { bgColor: string; textColor: string; circleBgColor: string } => {
  switch (status) {
    case orderStatuses["PENDING"]:
      return {
        bgColor: "bg-[#FFF1CE]",
        textColor: "text-[#FFC327]",
        circleBgColor: "bg-[#FFC327]",
      };
      break;
    case orderStatuses["DELIVERED"]:
      return {
        bgColor: "bg-[#CEFFEA]",
        textColor: "text-[#02BF6C]",
        circleBgColor: "bg-[#02BF6C]",
      };
      break;
    case orderStatuses["ON_DELIVERY"]:
      return {
        bgColor: "bg-[#C2E6FF]",
        textColor: "text-[#157892]",
        circleBgColor: "bg-[#157892]",
      };
      break;
    case orderStatuses["CANCELLED"]:
      return {
        bgColor: "bg-[#FFD3D3]",
        textColor: "text-[#EE485C]",
        circleBgColor: "bg-[#EE485C]",
      };
      break;
    default:
      return { bgColor: "", textColor: "", circleBgColor: "" };
      break;
  }
};

const getOrderStatusTitle = (status: string): string => {
  switch (status) {
    case orderStatuses["PENDING"]:
      return "Pending";
      break;
    case orderStatuses["ON_DELIVERY"]:
      return "On Delivery";
      break;
    case orderStatuses["DELIVERED"]:
      return "Delivered";
      break;
    case orderStatuses["CANCELLED"]:
      return "Cancelled";
      break;
    default:
      return "";
      break;
  }
};

type Props = {
  status: string;
};

const OrderStatusBadge = ({ status }: Props) => {
  const statusStyles = getOrderStatusStyles(status);
  return (
    <div
      className={`${statusStyles.bgColor} rounded-2xl py-1 px-3 ${statusStyles.textColor} gap-2 flex items-center justify-center space-x-2 text-sm font-semibold`}
    >
      <div
        className={`w-3 h-3 rounded-full ${statusStyles.circleBgColor}`}
      ></div>
      {getOrderStatusTitle(status)}
    </div>
  );
};

export default OrderStatusBadge;
