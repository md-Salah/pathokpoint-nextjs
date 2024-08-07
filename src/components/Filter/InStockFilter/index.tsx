"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const InStockFilter = ({
  updateSearchParams,
}: {
  updateSearchParams: (params: URLSearchParams) => void;
}) => {
  const searchParams = useSearchParams();
  const [checked, setChecked] = useState<boolean>(
    searchParams.get("in_stock") === "true"
  );

  const handleInStockChange = () => {
    setChecked(!checked);
    const params = new URLSearchParams(searchParams.toString());
    const inStock = params.get("in_stock");
    if (inStock === "true") params.delete("in_stock");
    else params.set("in_stock", "true");
    updateSearchParams(params);
  };

  return (
    <div className="bg-white form-control">
      <div className="flex justify-between items-center py-4 px-5">
        <h4 className="font-semibold text-black02 text-base">In Stock</h4>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={checked}
          onChange={handleInStockChange}
        />
      </div>
    </div>
  );
};

export default InStockFilter;
