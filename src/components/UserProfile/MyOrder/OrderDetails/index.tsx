"use client";
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import { Order, OrderItem, Transaction } from '@/interface';
import { RootState } from '@/redux/store';
import { dateTime } from '@/utils';
import { fetchWithToken } from '@/utils/axiosConfig';

import BookItemMobile from './BookItemMobile';
import BooksTable from './BooksTable';
import DeliveryDetailsSummary from './DeliveryDetailsSummary';
import PaymentItem from './PaymentItem';
import ProgressTracker from './ProgressTracker';
import TransactionsTable from './TransactionsTable';

const OrderDetails = () => {
  const params = useParams();
  const { token } = useSelector((state: RootState) => state.auth);
  const {
    data: order,
    error,
    isLoading,
  } = useSWR<Order, string>(`/order/id/${params.order_id}`, (url: string) =>
    fetchWithToken(url, token)
  );

  if (isLoading) return <div className="skeleton w-full h-96"></div>;
  if (error)
    return (
      <div className="w-full bg-white flex items-center justify-center text-black04 h-96">
        <h3 className="text-center">{error}</h3>
      </div>
    );

  if (!order) return null;

  const { date, time } = dateTime(order?.created_at);
  return (
    <div className="">
      <div className="bg-white">
        {/* Header */}
        <div className="border-b border-black06 p-4 lg:p-7 flex items-center justify-between">
          <div className="flex flex-col space-y-2">
            <div className="text-base flex items-center space-x-1">
              <span className="text-[#2B2B2B]">Invoice</span>
              <span className="text-primary font-bold">#{order.invoice}</span>
            </div>
            <div className="flex items-center space-x-2 text-xxs">
              <span className="bg-black07 py-[3px] px-2 rounded">{date}</span>
              <span className="bg-black07 py-[3px] px-2 rounded">{time}</span>
            </div>
          </div>
          {order.due > 0 ? (
            <div className="flex flex-col justify-end gap-2">
              {order.is_full_paid ? (
                <>
                  <span className="text-xs text-end">Due: {order.due}৳</span>
                  <button className="btn btn-outline btn-sm btn-primary px-4">
                    Pay Now
                  </button>
                </>
              ) : (
                <span className="text-xs text-end">COD: {order.due}৳</span>
              )}
            </div>
          ) : (
            <div className="flex flex-col justify-end gap-2">
              <span className="text-xs text-end">{`Total: ${order.net_amount}৳, Paid: ${order.paid}৳`}</span>
            </div>
          )}
        </div>

        <ProgressTracker order_status={order.order_status} />

        {/* Books */}
        <div className="flex flex-col p-4 lg:p-7 lg:hidden">
          {order.order_items.map((item: OrderItem, index: number) => (
            <BookItemMobile key={index} item={item} />
          ))}
        </div>
        <div className="hidden lg:block">
          <BooksTable order_items={order.order_items} />
        </div>
      </div>

      <DeliveryDetailsSummary order={order} />

      {order.transactions.length > 0 && (
        <>
          <div className="bg-white lg:hidden p-4 mt-4 flex flex-col space-y-4">
            <div className="font-bold">
              <h2>Payment Info</h2>
            </div>
            <div className="space-y-10 py-5">
              {order.transactions.map((transaction: Transaction) => (
                <PaymentItem key={transaction.id} transaction={transaction} />
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <TransactionsTable transactions={order.transactions} />
          </div>
        </>
      )}
    </div>
  );
};

export default OrderDetails;
