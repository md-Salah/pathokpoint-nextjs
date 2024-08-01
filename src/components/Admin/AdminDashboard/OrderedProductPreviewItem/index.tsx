import React from "react";

const OrderedProductPreviewItem = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="avatar">
        <div className="w-8 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <span className="font-semibold text-[#1D1F2C] ">Handmade Pouch</span>
        <span className="font-light text-xs text-[#667085]">
          +3 other products
        </span>
      </div>
    </div>
  );
};

export default OrderedProductPreviewItem;
