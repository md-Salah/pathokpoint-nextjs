import React from "react";
import DashboardSummaryBox from "../DashboardSummaryBox";
import { dashboardIconColors } from "@/constants/constants";
import { FiDollarSign } from "react-icons/fi";

const DeliverySummary = () => {
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold">Delivery Summary</h1>
      <div className="py-4">
        <div className="flex items-center justify-between">
          <h4 className="text-md md:text-xl text-black02 font-medium md:w-[8%] text-nowrap">
            Delivery
          </h4>
          <div className="border-[1px] border-[#E6E6E6] w-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3 w-full pt-4">
          <DashboardSummaryBox
            title="New Book Sell"
            icon={<FiDollarSign size={24} color={dashboardIconColors.dollar} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Old Book Sell"
            icon={<FiDollarSign size={24} color={dashboardIconColors.dollar} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Delivery Charge Taken"
            icon={<FiDollarSign size={24} color={dashboardIconColors.dollar} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Delivery Charge Taken"
            icon={<FiDollarSign size={24} color={dashboardIconColors.dollar} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Delivery Charge Taken"
            icon={<FiDollarSign size={24} color={dashboardIconColors.dollar} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Delivery Charge Taken"
            icon={<FiDollarSign size={24} color={dashboardIconColors.dollar} />}
            type="Sell"
            totalAmount={75000}
            riseInPercentage={10}
            addedValue={150}
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Total Sell"
            icon={<FiDollarSign size={24} color={dashboardIconColors.dollar} />}
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

export default DeliverySummary;
