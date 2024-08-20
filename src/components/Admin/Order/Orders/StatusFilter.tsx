"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { orderStatusAdmin } from '@/constants';
import { title } from '@/utils';

const StatusFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [selectedStatus, setSelectedStatus] = useState<string>(
    searchParams.get("order_status__status") || ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value === "") params.delete("order_status__status");
    else params.set("order_status__status", e.target.value);
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <select
      className="select select-bordered bg-white select-sm focus-within:outline-none focus-within:border-primary"
      onChange={handleChange}
      value={selectedStatus}
    >
      <option value="">All Orders</option>
      {orderStatusAdmin.map((status) => (
        <option key={status} value={status}>
          {title(status.replace(/-/g, " "))}
        </option>
      ))}
    </select>
  );
};

export default StatusFilter;
