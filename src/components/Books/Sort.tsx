"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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

  const handleSort = (value: string) => {
    setValue(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("order_by", value);
    else params.delete("order_by");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <select className="select select-bordered select-sm sm:max-w-36 md:max-w-max focus:border-primary focus:outline-none">
      {options.map((option) => (
        <option key={option.label} onClick={() => handleSort(option.value)}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Sort;
