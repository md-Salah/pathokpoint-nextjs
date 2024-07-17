import React from "react";

const DeliveryDetailsSummary = () => {
  return (
    <div className="px-0 md:px-7 flex flex-col space-y-5 md:space-y-0 md:flex-row md:items-start md:justify-between">
      <div className="space-y-4 bg-white md:bg-none p-5 md:p-0 mt-5 md:mt-0">
        <div className="flex flex-col space-y-4 text-[#2B2B2B] pb-4 border-b-[2px] border-b-[#F4F4F4]">
          <h2 className="text-base font-bold">Delivery Details</h2>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Sarder Arif Ahmed</span>
            <span className="text-xs">rayhantanvir 03@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1 text-[#2B2B2B] text-xs pb-4 border-b-[2px] border-b-[#F4F4F4]">
          <span className="font-bold">Address</span>
          <span>Matikata 72/A Dhaka cantonment Dhaka-1216, Bangladesh</span>
        </div>
        <div className="flex flex-col space-y-1 text-[#2B2B2B] text-xs w-[20%]">
          <span className="font-bold">Contact</span>
          <span>01686256267</span>
        </div>
      </div>
      <div className="space-y-4 w-full md:w-[30%] bg-white md:bg-none p-5 md:p-0 mb-5 md:mb-0">
        <h2 className="text-base font-bold">Order Summary</h2>
        <div className="w-full flex flex-col items-end text-black02 text-sm">
          <ul className="space-y-4 w-full">
            <li className="flex items-center justify-between">
              <span>Sub Total:</span>
              <span>৳1300</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Discount(10%):</span>
              <span>-৳200</span>
            </li>
            <li className="flex items-center justify-between border-b-[2px] border-b-[#F4F4F4] pb-4">
              <span>Shipping Cost:</span>
              <span>৳100</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-bold">Grand Total:</span>
              <span>৳1200</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Paid:</span>
              <span>৳1200</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Due:</span>
              <span>৳0</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetailsSummary;
