"use client";

// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./style.css";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const PriceRangeFilter = ({
  updateSearchParams,
}: {
  updateSearchParams: (params: URLSearchParams) => void;
}) => {
  const searchParams = useSearchParams();
  const [value, setValue] = useState<number[]>([
    parseInt(searchParams.get("sale_price__gte") || "0"),
    parseInt(searchParams.get("sale_price__lte") || "10000"),
  ]);

  const handlePriceRangeDebounced = useDebouncedCallback(
    (min: number, max: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sale_price__gte", min.toString());
      params.set("sale_price__lte", max.toString());
      updateSearchParams(params);
    },
    300
  );

  const handlePriceRange = (range: number[]) => {
    setValue(range);
    handlePriceRangeDebounced(range[0], range[1]);
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center py-3 px-5 border-b">
        <h4 className="font-semibold text-black02 text-base">Price Range</h4>
      </div>
      <div className="px-5 py-8">
        <RangeSlider
          id="range-slider"
          value={value}
          min={0}
          max={10000}
          onInput={handlePriceRange}
          step={10}
        />
        <div className="font-bn mt-5 flex justify-between text-sm">
          <div className="border border-black05 py-0.5 px-2 rounded">
            ৳{value[0]}
          </div>
          <div className="border border-black05 py-0.5 px-2 rounded">
            ৳{value[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
