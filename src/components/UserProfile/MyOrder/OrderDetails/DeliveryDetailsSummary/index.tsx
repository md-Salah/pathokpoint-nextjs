const DeliveryDetailsSummary = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mt-4 lg:mt-0 lg:p-7 lg:bg-white">
      {/* Address */}
      <div className="space-y-4 bg-white p-4 lg:p-0 text-[#2B2B2B]">
        <div className="flex flex-col gap-4 pb-4 border-b-[2px] border-b-[#F4F4F4]">
          <h2 className="font-semibold">Delivery Details</h2>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold">Sarder Arif Ahmed</span>
            <span className="text-xs">rayhantanvir 03@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-xs pb-4 border-b-[2px] border-b-[#F4F4F4]">
          <span className="font-semibold">Address</span>
          <span className="font-light">
            Matikata 72/A Dhaka cantonment Dhaka-1216, Bangladesh
          </span>
        </div>
        <div className="flex flex-col gap-2 text-xs w-[20%]">
          <span className="font-semibold">Contact</span>
          <span className="font-light">01686256267</span>
        </div>
      </div>

      {/* Order Summary */}
      <div className="space-y-4 bg-white p-4 lg:p-0">
        <h2 className="text-base font-semibold">Order Summary</h2>
        <div className="w-full flex flex-col items-end text-black03 text-sm">
          <ul className="space-y-4 w-full">
            <li className="flex items-center justify-between">
              <span>Sub Total:</span>
              <span className="w-20">৳1300</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Discount(10%):</span>
              <span className="w-20">-৳200</span>
            </li>
            <li className="flex items-center justify-between border-b-[2px] border-b-[#F4F4F4] pb-4">
              <span>Shipping Cost:</span>
              <span className="w-20">৳100</span>
            </li>
            <li className="flex items-center justify-between text-[#2B2B2B]">
              <span className="font-semibold ">Grand Total:</span>
              <span className="w-20">৳1200</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Paid:</span>
              <span className="w-20">৳1200</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Due:</span>
              <span className="w-20">৳0</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetailsSummary;
