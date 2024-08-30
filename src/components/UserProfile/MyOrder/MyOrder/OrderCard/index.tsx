import Link from 'next/link';

import { Order } from '@/interface';
import { OrderStatusBadge } from '@/micro-components';
import { dateTime } from '@/utils';

const OrderCard = ({ order }: { order: Order }) => {
  const { date, time } = dateTime(order.created_at);
  return (
    <div className="w-full bg-white flex items-start lg:items-center justify-between p-4 md:py-5 md:px-7 border-b md:border-b-0">
      {/* OrderID & DateTime */}
      <div className="space-y-2">
        <div className="flex items-center space-x-1">
          <span className="text-[#2B2B2B]">Invoice</span>
          <span className="text-primary font-bold">#{order.invoice}</span>
        </div>
        <div className="flex gap-2 md:items-center text-xxs">
          <span className="bg-black07 py-[3px] px-2 rounded">{date}</span>
          <span className="bg-black07 py-[3px] px-2 rounded">{time}</span>
        </div>
        <div className="lg:hidden">
          <OrderStatusBadge
            status={order.order_status[order.order_status.length - 1].status}
          />
        </div>
      </div>

      {/* Total & View Order */}
      <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 lg:gap-10 justify-between lg:w-2/5">
        <div className="space-y-2 text-xs">
          <span className="flex gap-1 justify-end lg:justify-start">
            <span>Total:</span>
            <span className="text-[#2B2B2B] font-bold">
              ৳{order.net_amount}
            </span>
          </span>
          {order.due > 0 ? (
            <span className="flex gap-1 justify-end lg:justify-start">
              <span>{order.is_full_paid ? "Due:" : "COD:"}</span>
              <span className="text-[#2B2B2B] font-bold">৳{order.due}</span>
            </span>
          ) : (
            <span className="flex gap-1 justify-end lg:justify-start">
              <span>Paid:</span>
              <span className="text-[#2B2B2B] font-bold">৳{order.paid}</span>
            </span>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="hidden lg:block">
            <OrderStatusBadge
              status={order.order_status[order.order_status.length - 1].status}
            />
          </div>
          <Link
            href={`/user/my-order/${order.id}`}
            className="btn btn-primary btn-sm px-3 md:px-7"
          >
            View Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
