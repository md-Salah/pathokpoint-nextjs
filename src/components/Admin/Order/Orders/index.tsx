"use client";
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import { PaginationHandler } from '@/components';
import { Order } from '@/interface';
import { DataCount } from '@/micro-components';
import { RootState } from '@/redux/store';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

import OrderItem from './OrderItem';
import Search from './Search';
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

  if (isLoading) return <div className="admin-container skeleton"></div>;
  if (error)
    return (
      <div className="admin-container bg-white text-highlight">{error}</div>
    );
  return (
    <div className="admin-container bg-white">
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg sm:text-2xl font-medium mb-1">Orders List</h1>
          {data && (
            <DataCount
              currentPage={parseInt(data.headers["x-current-page"])}
              perPage={parseInt(data.headers["x-per-page"])}
              totalCount={parseInt(data.headers["x-total-count"])}
            />
          )}
        </div>
        <Link href="/admin/add-order" className="btn btn-secondary btn-sm h-11">
          <FiPlus size={20} className="inline-block" />
          Add Order
        </Link>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <Search />
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
              <th>Payment</th>
              <th>Full Paid</th>
              <th>Order Status</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data.map((order: Order, index: number) => (
                <OrderItem
                  order={order}
                  key={order.id}
                  dropdownTop={index > 4 && index > data.data.length - 4}
                />
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
