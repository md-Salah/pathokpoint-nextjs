import React from "react";

const OrderSummary = () => {
  return (
    <div className="py-4">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2 p-4 bg-[#F6F6F6] text-sm md:text-base rounded-lg min-h-20">
          <h2 className="text-base md:text-lg font-semibold text-black04">Customer Note:</h2>
          <p className="mt-2 text-gray-700">
            অফিস টাইমে ডেলিভারি দিবেন দয়া করে, সন্ধি বাদে
          </p>
        </div>

        <div className="w-full p-8 bg-gray-50 flex flex-col md:items-end text-sm md:text-base text-[#6F6E77] rounded-lg">
          <ul className="space-y-2 w-full md:w-1/2">
            <li className="flex justify-between">
              <span>Order Type:</span>
              <span className="font-semibold">COD</span>
            </li>
            <li className="flex justify-between">
              <span>Total Items:</span>
              <span className="font-semibold">06</span>
            </li>
            <li className="flex justify-between">
              <span>Old Total:</span>
              <span className="line-through text-gray-500">900</span>
            </li>
            <li className="flex justify-between">
              <span>New Total:</span>
              <span className="font-semibold">800</span>
            </li>
            <li className="flex justify-between font-semibold">
              <span>Sub total:</span>
              <span className="font-semibold">800</span>
            </li>
            <li className="flex justify-between">
              <span>Discount:</span>
              <span className="font-semibold">0</span>
            </li>
            <li className="flex justify-between">
              <span>Weight Charge:</span>
              <span className="font-semibold">50</span>
            </li>
            <li className="flex justify-between">
              <span>Shipping Charge:</span>
              <span className="font-semibold">100</span>
            </li>
          </ul>
          <div className="border my-2 w-full"></div>
          <ul className="space-y-2 w-full md:w-1/2">
            <li className="flex justify-between font-semibold">
              <span>Grand Total:</span>
              <span className="font-semibold">950</span>
            </li>
            <li className="flex justify-between">
              <span>Payable:</span>
              <span className="font-semibold">950</span>
            </li>
            <li className="flex justify-between">
              <span>Paid:</span>
              <span className="font-semibold">100</span>
            </li>
            <li className="flex justify-between">
              <span>Due:</span>
              <span className="font-semibold">850</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
