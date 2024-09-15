"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Sort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState<string>(
    searchParams.get("order_by") || ""
  );

  const options = [
    {
      label: "Sort by",
      value: "",
    },
    // {
    //   label: "Bestseller",
    //   value: "bestseller",
    // },
    {
      label: "Price low to high",
      value: "sale_price",
    },
    {
      label: "Price high to low",
      value: "-sale_price",
    },
    {
      label: "Recently published",
      value: "-created_at",
    },
    // {
    //   label: "Rating",
    //   value: "-rating",
    // },
  ];

  const handleSort = (val: string) => {
    setValue(val);
    const params = new URLSearchParams(searchParams.toString());
    if (val) params.set("order_by", val);
    else params.delete("order_by");
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <select
      className="select select-bordered select-sm h-10 min-w-0 w-full bg-white focus:border-primary focus:outline-none"
      value={value}
      onChange={(e) => handleSort(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Sort;
