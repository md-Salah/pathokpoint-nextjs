"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const Sort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("order_by") || "");

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

  const handleSort = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set("order_by", value);
      else params.delete("order_by");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  useEffect(() => {
    handleSort(value);
  }, [value, handleSort]);

  return (
    <select className="select select-bordered select-sm sm:max-w-36 md:max-w-max focus:border-primary focus:outline-none">
      {options.map((option) => (
        <option key={option.label} onClick={() => setValue(option.value)}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Sort;
