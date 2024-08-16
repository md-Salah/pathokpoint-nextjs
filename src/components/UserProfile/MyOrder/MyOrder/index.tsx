"use client";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import { MobileHeader, TabOptions, TabOptionsMobile } from '@/components/UserProfile';
import { Order } from '@/interface';
import { RootState } from '@/redux/store';
import { fetchWithToken } from '@/utils/axiosConfig';

import OrderCard from './OrderCard';

const MyOrder = () => {
  const [tab, setTab] = useState<string>("All Order");

  const myOrderTabs = [
    {
      name: "All Order",
      count: 14,
    },
    {
      name: "On Process",
      count: 4,
    },
    {
      name: "Delivered",
      count: 10,
    },
    {
      name: "Cancelled",
      count: 2,
    },
  ];

  const { token } = useSelector((state: RootState) => state.auth);
  const {
    data: orders,
    error,
    isLoading,
  } = useSWR(["/order/my-orders?order_by=-created_at", token], ([url, token]) =>
    fetchWithToken(url, token)
  );

  if (orders && orders.length === 0) return <div>No order found</div>;

  return (
    <div>
      <MobileHeader title="My Order" />

      {/* Tab in Desktop */}
      <div className="hidden md:block">
        <TabOptions tab={tab} setTab={setTab} tabOptions={myOrderTabs} />
      </div>

      {/* Tab in Mobile */}
      <div className="md:hidden">
        <TabOptionsMobile tab={tab} setTab={setTab} tabOptions={myOrderTabs} />
      </div>

      {isLoading && <div className="skeleton w-full h-96"></div>}
      {error && (
        <div className="w-full h-96 bg-white text-highlight text-center">
          {error}
        </div>
      )}

      <div className="flex flex-col md:gap-2">
        {orders &&
          orders.map((item: Order) => <OrderCard key={item.id} order={item} />)}
      </div>
    </div>
  );
};

export default MyOrder;
