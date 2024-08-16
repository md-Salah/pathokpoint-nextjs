"use client";
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import { MobileHeader, TabOptions, TabOptionsMobile } from '@/components/UserProfile';
import { Order } from '@/interface';
import { RootState } from '@/redux/store';
import { fetchWithToken } from '@/utils/axiosConfig';

import OrderCard from './OrderCard';

const MyOrder = ({ searchParams }: { searchParams?: any }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const query = params.toString();

  const [tab, setTab] = useState<string>("All Order");

  const handleTab = (tabName: string) => {
    setTab(tabName);
    if (tabName === "All Order") params.delete("order_status__status");
    else
      params.set(
        "order_status__status",
        tabName.toLowerCase().replace(" ", "-")
      );
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const myOrderTabs = [
    {
      name: "All Order",
    },
    {
      name: "On Delivery",
    },
    {
      name: "Delivered",
    },
    {
      name: "Cancelled",
    },
  ];

  const { token } = useSelector((state: RootState) => state.auth);
  const {
    data: orders,
    error,
    isLoading,
  } = useSWR(
    [`/order/my-orders?order_by=-created_at&${query}`, token],
    ([url, token]) => fetchWithToken(url, token)
  );

  return (
    <div>
      <MobileHeader title="My Order" />

      {/* Tab in Desktop */}
      <div className="hidden md:block">
        <TabOptions tab={tab} setTab={handleTab} tabOptions={myOrderTabs} />
      </div>

      {/* Tab in Mobile */}
      <div className="md:hidden">
        <TabOptionsMobile
          tab={tab}
          setTab={handleTab}
          tabOptions={myOrderTabs}
        />
      </div>

      {isLoading && <div className="skeleton w-full h-96"></div>}
      {error && (
        <div className="w-full h-96 bg-white text-highlight text-center">
          {error}
        </div>
      )}

      <div className="flex flex-col md:gap-2">
        {orders &&
          orders.length > 0 &&
          orders.map((item: Order) => <OrderCard key={item.id} order={item} />)}
        {orders && orders.length === 0 && (
          <div className="w-full h-96 pt-10 bg-white text-black04 text-center">
            No order found
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
