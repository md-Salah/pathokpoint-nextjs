"use client";

// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./style.css";
import { useState } from "react";

const PriceRangeFilter = () => {
  const [value, setValue] = useState<number[]>([100, 1000]);

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center py-3 px-5 border-b">
        <h4 className="font-semibold text-black02 text-base">Price Range</h4>
      </div>
      <div className="px-5 py-8">
        <RangeSlider id="range-slider" value={value} min={100} max={1000} onInput={setValue} step={10} />
        <div className="font-bn mt-5 flex justify-between text-sm">
          <div className="border border-black05 py-0.5 px-2 rounded">৳{value[0]}</div>
          <div className="border border-black05 py-0.5 px-2 rounded">৳{value[1]}</div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
