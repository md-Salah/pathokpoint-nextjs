import React from "react";
import { FaCaretUp } from "react-icons/fa";

type Props = {
  icon: React.ReactNode;
  title: string;
  totalAmount: number;
  riseInPercentage?: number;
  addedValue?: number;
  type: "Order" | "Delivery" | "Sell";
  orderStatus?: string;
  variant: "Primary" | "Secondary";
};

const DashboardSummaryBox = (props: Props) => {
  return (
    <div
      className={`border-[1px] border-[#E6E6E6] rounded-lg p-4 flex flex-col space-y-3 ${
        props.variant === "Secondary" && "bg-[#111827]"
      }`}
    >
      <div className="flex items-center space-x-2">
        {props.icon}
        <span
          className={`${
            props.variant === "Secondary" ? "text-white" : "text-[#777980]"
          } font-semibold`}
        >
          {props.title}
        </span>
      </div>
      <h1
        className={`text-3xl font-bold tracking-wide ${
          props.variant === "Secondary" && "text-white"
        }`}
      >
        {props.type !== "Order" && "$"}
        {props.totalAmount}
      </h1>
      {props.type === "Order" ? (
        <span
          className={`${
            props.variant === "Secondary" ? "text-white" : "text-[#858D9D]"
          } text-sm`}
        >
          {props.orderStatus}
        </span>
      ) : (
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="text-[#1A9882] text-sm font-extrabold">
              {props.riseInPercentage}%
            </span>
            <FaCaretUp color="#1A9882" />
          </div>
          <div>
            <span
              className={`text-sm ${
                props.variant === "Secondary" ? "text-white" : "text-[#858D9D]"
              }`}
            >
              +${props.addedValue} today
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSummaryBox;
