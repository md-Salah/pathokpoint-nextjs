import React from "react";
import DashboardSummaryBox from "../DashboardSummaryBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { dashboardIconColors } from "@/constants/constants";

const DashboardOrderSummary = () => {
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold">Order Summary</h1>
      <div className="py-4">
        <div className="flex items-center justify-between">
          <h4 className="text-md md:text-xl text-black02 font-medium md:w-[8%] text-nowrap">Order</h4>
          <div className="border-[1px] border-[#E6E6E6] w-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3 w-full pt-4">
          <DashboardSummaryBox
            title="New Book Order"
            icon={
              <MdOutlineShoppingCart
                size={24}
                color={dashboardIconColors.order}
              />
            }
            type="Order"
            totalAmount={75000}
            orderStatus="New Order"
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Old Book Order"
            icon={
              <MdOutlineShoppingCart
                size={24}
                color={dashboardIconColors.order}
              />
            }
            type="Order"
            totalAmount={75000}
            orderStatus="Old Order"
            variant="Primary"
          />
          <DashboardSummaryBox
            title="New & Old Book Order"
            icon={<MdOutlineShoppingCart size={24} color="#883DCF" />}
            type="Order"
            totalAmount={75000}
            orderStatus="Mix Order"
            variant="Primary"
          />
          <DashboardSummaryBox
            title="Total Order"
            icon={
              <MdOutlineShoppingCart
                size={24}
                color={dashboardIconColors.order}
              />
            }
            type="Order"
            totalAmount={75000}
            orderStatus="New Order"
            variant="Secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardOrderSummary;
