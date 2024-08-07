import Link from "next/link";

const OrderCard = () => {
  return (
    <div className="w-full bg-white flex items-start lg:items-center justify-between p-4 md:py-5 md:px-7 border-b md:border-b-0">
      {/* OrderID & DateTime */}
      <div>
        <div className="flex items-center space-x-1">
          <span className="text-[#2B2B2B]">Order ID</span>
          <span className="text-primary font-bold">#A125452</span>
        </div>
        <div className="mt-2 flex gap-2 md:items-center text-xxs">
          <span className="bg-black07 py-[3px] px-2 rounded">Oct 11, 2023</span>
          <span className="bg-black07 py-[3px] px-2 rounded">11:45 PM</span>
        </div>
      </div>

      {/* Total & View Order */}
      <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 lg:gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 text-xs">
          <span className="flex gap-1 justify-end lg:justify-start">
            <span className="text-secondary-content">Total:</span>
            <span className="text-[#2B2B2B] font-bold">৳520</span>
          </span>
          <span className="flex gap-1 justify-end lg:justify-start">
            <span className="text-secondary-content">Due:</span>
            <span className="text-[#2B2B2B] font-bold">৳520</span>
          </span>
        </div>
        <Link
          href={`/user/my-order/1`}
          className="btn btn-primary btn-sm px-3 md:px-7"
        >
          View Order
        </Link>
      </div>
    </div>
  );
};

export default OrderCard;
