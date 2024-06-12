"use client";
import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

const NumberInput = ({ min, max }: { min: number; max: number }) => {
  const [value, setValue] = useState<number>(min);

  const handleIncrement = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleDecrement}
        className={`btn btn-xs bg-black07 w-[30px] h-[30px] rounded-[5px] ${
          value == min && "btn-disabled"
        }`}
      >
        <HiMinus />
      </button>
      <input
        type="text"
        className="w-[43px] h-[30px] text-center bg-black07 mx-1 rounded-[5px] text-xs font-semibold"
        value={value}
        readOnly
        min={min}
        max={max}
      />
      <button
        onClick={handleIncrement}
        className={`btn btn-xs bg-black07 w-[30px] h-[30px] rounded-[5px] ${
          value == max && "btn-disabled"
        }`}
      >
        <HiPlus />
      </button>
    </div>
  );
};

export default NumberInput;
