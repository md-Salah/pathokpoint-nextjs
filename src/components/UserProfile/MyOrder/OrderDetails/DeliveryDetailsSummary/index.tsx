import { Order } from '@/interface';

const DeliveryDetailsSummary = ({ order }: { order: Order }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mt-4 lg:mt-0 lg:p-7 lg:bg-white">
      {/* Address */}
      <div className="space-y-4 bg-white p-4 lg:p-0 text-[#2B2B2B]">
        <div className="flex flex-col gap-4 pb-4 border-b-[2px] border-b-[#F4F4F4]">
          <h2 className="font-semibold">Customer Details</h2>
          {order.address && (
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold">
                {order.address.name}
              </span>
              {order.address.email && (
                <span className="text-xs">{order.address.email}</span>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 text-xs pb-4 border-b-[2px] border-b-[#F4F4F4]">
          <span className="font-semibold">Address</span>
          <span className="font-light">
            {order.address
              ? `${order.address.address}, ${order.address.thana}, ${order.address.city}`
              : "N/A"}
          </span>
        </div>
        <div className="flex flex-col gap-2 text-xs w-[20%]">
          <span className="font-semibold">Contact</span>
          <span className="font-light">
            {order.address ? order.address.phone_number : "N/A"}
          </span>
        </div>
      </div>

      {/* Order Summary */}
      <div className="space-y-4 bg-white p-4 lg:p-0">
        <h2 className="text-base font-semibold">Order Summary</h2>
        <div className="w-full flex flex-col items-end text-black03 text-sm">
          <ul className="space-y-4 w-full">
            <li className="flex items-center justify-between">
              <span>Sub Total:</span>
              <span className="w-14">
                ৳{order.old_book_total + order.new_book_total}
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Shipping Cost:</span>
              <span className="w-14">
                ৳{order.shipping_charge + order.weight_charge}
              </span>
            </li>
            <li className="flex items-center justify-between border-b-[2px] border-b-[#F4F4F4] pb-4">
              <span>Discount{order.coupon && ` (${order.coupon.code})`}:</span>
              <span className="w-14">-৳{order.discount}</span>
            </li>
            <li className="flex items-center justify-between text-[#2B2B2B]">
              <span className="font-semibold ">Grand Total:</span>
              <span className="w-14">৳{order.net_amount}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Paid:</span>
              <span className="w-14">৳{order.paid}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>{order.is_full_paid ? "Due" : "Cash On Delivery"}:</span>
              <span className="w-14">৳{order.due}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetailsSummary;
