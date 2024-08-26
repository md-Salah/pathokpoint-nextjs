"use client";
import { useState } from 'react';
import useSWR from 'swr';

import { useToken } from '@/hooks';
import { Order } from '@/interface';
import { Error, Skeleton } from '@/micro-components/Admin';
import { fetchWithToken } from '@/utils/axiosConfig';

import CustomerInfo from './CustomerInfo';
import Items from './Items';
import Meta from './Meta';
import Payment from './Payment';
import Summary from './Summary';

type Props = {
  invoice: string;
};

const ViewOrder = ({ invoice }: Props) => {
  const [toggle, setToggle] = useState(false);
  const { token } = useToken();
  const {
    data: order,
    error,
    isLoading,
  }: { data: Order; error: any; isLoading: boolean } = useSWR(
    [`/order/admin/invoice/${invoice}`, token, toggle],
    ([url, token]) => fetchWithToken(url, token)
  );

  const refresh = () => {
    setToggle(!toggle);
  };

  if (isLoading) return <Skeleton />;
  if (error) return <Error err={error} />;
  if (!order) return <Error err="Order not found" />;

  return (
    <div className="admin-container admin-p bg-white">
      <Meta order={order} refresh={refresh} />

      <CustomerInfo order={order} />

      <Items
        order_id={order.id}
        order_items={order.order_items}
        refresh={refresh}
      />

      <Summary order={order} />

      <Payment order={order} refresh={refresh} />
    </div>
  );
};

export default ViewOrder;
