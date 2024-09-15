"use client";
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import { PaginationHandler } from '@/components';
import { Order } from '@/interface';
import { DataCount } from '@/micro-components';
import { Error, KeyValueFilter, SearchBar, Skeleton } from '@/micro-components/Admin';
import { RootState } from '@/redux/store';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

import OrderItem from './OrderItem';
import StatusFilter from './StatusFilter';

type Props = {
  searchParams?: any;
};

const Orders = ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();

  const { token } = useSelector((state: RootState) => state.auth);

  const { data, isLoading, error } = useSWR(
    [`/order/admin/all?order_by=-created_at&per_page=20&${query}`, token],
    ([url, token]) => fetchWithTokenAndHeader(url, token)
  );

  if (isLoading) return <Skeleton />;
  if (error) return <Error err={error} />;
  return (
    <div className="admin-container bg-white">
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg sm:text-2xl font-medium mb-1">Orders</h1>
          {data && (
            <DataCount
              currentPage={parseInt(data.headers["x-current-page"])}
              perPage={parseInt(data.headers["x-per-page"])}
              totalCount={parseInt(data.headers["x-total-count"])}
            />
          )}
        </div>
        <Link
          href="/admin/orders/add-order"
          className="btn btn-secondary btn-sm lg:h-11"
        >
          <FiPlus size={20} className="inline-block" />
          Add Order
        </Link>
      </div>
      <div className="mt-4 flex items-center gap-2 overflow-x-scroll pb-2">
        <div className="max-w-56">
          <SearchBar />
        </div>
        <div className="max-w-28">
          <KeyValueFilter name="invoice" placeholder="Invoice" />
        </div>
        <StatusFilter />
      </div>
      <div className="mt-4 overflow-x-auto min-h-64">
        <table className="table table-xs table-pin-rows">
          <thead>
            <tr className="h-12">
              <th>Date</th>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Due</th>
              <th>COD</th>
              <th>Payment</th>
              <th>Shipping</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data.map((order: Order) => (
                <OrderItem key={order.id} order={order} />
              ))}
          </tbody>
        </table>
      </div>
      {data && (
        <div className="mt-8 flex justify-end">
          <PaginationHandler totalPages={data.headers["x-total-pages"]} />
        </div>
      )}
    </div>
  );
};

export default Orders;
