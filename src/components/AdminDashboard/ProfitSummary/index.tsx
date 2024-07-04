import React from "react";
import DashboardSummaryBox from "../DashboardSummaryBox";
import { FaCarSide, FaMoneyBill } from "react-icons/fa";
import { dashboardIconColors } from "@/constants/constants";
import { PiBookBookmarkFill } from "react-icons/pi";
import { RiDiscountPercentFill } from "react-icons/ri";

const ProfitSummary = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Profit Calculation</h1>
      <div className="py-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xl text-black02 font-semibold w-[8%]">
            Total Sell
          </h4>
          <div className="border-[1px] border-[#E6E6E6] w-full"></div>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-3 w-full">
          <DashboardSummaryBox
            title="New Book Sell"
            icon={
              <PiBookBookmarkFill size={24} color={dashboardIconColors.book} />
            }
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Old Book Sell"
            icon={
              <PiBookBookmarkFill size={24} color={dashboardIconColors.book} />
            }
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Delivery Charge Taken"
            icon={<FaCarSide size={24} color={dashboardIconColors.car} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Total Sell"
            icon={
              <PiBookBookmarkFill size={24} color={dashboardIconColors.book} />
            }
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Secondary"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-xl text-black02 font-semibold w-[8%]">
            Net Sell
          </h4>
          <div className="border-[1px] border-[#E6E6E6] w-full"></div>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-3 w-full">
          <DashboardSummaryBox
            title="Refund"
            icon={<FaMoneyBill size={24} color={dashboardIconColors.money} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Required Delivery Charge"
            icon={<FaCarSide size={24} color={dashboardIconColors.car} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Discount"
            icon={
              <RiDiscountPercentFill
                size={24}
                color={dashboardIconColors.discount}
              />
            }
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Net Sell"
            icon={<FaMoneyBill size={24} color={dashboardIconColors.money} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Secondary"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-xl text-black02 font-semibold w-[8%]">COG</h4>
          <div className="border-[1px] border-[#E6E6E6] w-full"></div>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-3 w-full">
          <DashboardSummaryBox
            title="Cost Old"
            icon={<FaMoneyBill size={24} color={dashboardIconColors.money} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Old Book Sell"
            icon={
              <PiBookBookmarkFill size={24} color={dashboardIconColors.money} />
            }
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Delivery Charge Taken"
            icon={<FaCarSide size={24} color={dashboardIconColors.car} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Total Sell"
            icon={
              <PiBookBookmarkFill size={24} color={dashboardIconColors.book} />
            }
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfitSummary;
