"use client";
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

import { isEnglish } from '@/utils';

interface Props {
  selectedItems: string[];
  handleSelect: (name: string) => void;
  handleRemove: (name: string) => void;
}

const SelectShippingMethods = (props: Props) => {
  const { selectedItems, handleSelect, handleRemove } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const suggestions: string[] = [
    "new",
    "old-like-new",
    "old-good-enough",
    "old-readable",
  ];

  return (
    <div className="dropdown w-full relative" tabIndex={0}>
      <label
        className="input flex flex-wrap p-2 min-h-12 h-auto items-center gap-2 focus-within:outline-none focus-within:border-primary"
        onClick={() => setIsDropdownOpen(true)}
      >
        {selectedItems.map((item: string) => (
          <div
            key={item}
            className="flex items-center bg-gray-200 rounded px-2 py-1 w-fit text-sm gap-2"
          >
            <span>{item}</span>
            <RxCross2
              size="16"
              className="cursor-pointer hover:bg-gray-300 rounded p-0.5"
              onClick={() => handleRemove(item)}
            />
          </div>
        ))}
      </label>

      {isDropdownOpen && (
        <div
          className="dropdown-content bg-white shadow-md w-full z-10"
          onClick={() => setIsDropdownOpen(false)}
        >
          <div className="max-h-72 overflow-y-auto">
            <ul className="menu">
              {suggestions.map((item: string) => (
                <li key={item} onClick={() => handleSelect(item)}>
                  <span className={`${!isEnglish(item) && "font-bn"}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectShippingMethods;
