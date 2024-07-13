"use client";
import React from "react";

export type TabOption = { tabIndex: number; name: string; count?: number };

type Props = {
  activeIndex: number;
  setActiveIndex: (index: number, type: string) => void;
  tabOptions: TabOption[];
};

const TabOptions = ({ activeIndex, setActiveIndex, tabOptions }: Props) => {
  return (
    <div className="w-full bg-white rounded-lg pt-6 pb-3">
      
      <div className="border-b border-b-[#E6E6E6] w-full flex items-center justify-evenly mx-auto overflow-x-auto ">
        {tabOptions.map((option) => (
          <div
            className={`${
              activeIndex === option.tabIndex
                ? "border-b-2 border-b-primary text-primary"
                : "text-black04"
            } text-sm font-bold pb-1 cursor-pointer`}
            key={option.tabIndex}
            onClick={() => setActiveIndex(option.tabIndex, "")}
          >
            <span>{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabOptions;
