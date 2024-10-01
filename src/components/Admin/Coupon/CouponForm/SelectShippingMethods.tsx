"use client";
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import useSWR from 'swr';

import { isEnglish } from '@/utils';
import { fetcher } from '@/utils/axiosConfig';

interface Item {
  id: string;
  method_name: string;
}

interface Props {
  selectedItems: Item[];
  handleSelect: (item: Item) => void;
  handleRemove: (id: string) => void;
}

const SelectShippingMethods = (props: Props) => {
  const { selectedItems, handleSelect, handleRemove } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { data: suggestions, isLoading } = useSWR(`/courier/all`, fetcher);

  return (
    <div className="dropdown w-full relative" tabIndex={0}>
      <label
        className="input flex flex-wrap p-2 min-h-12 h-auto items-center gap-2 focus-within:outline-none focus-within:border-primary"
        onClick={() => setIsDropdownOpen(true)}
      >
        {selectedItems.map((item: Item) => (
          <div
            key={item.id}
            className="flex items-center bg-gray-200 rounded px-2 py-1 w-fit text-sm gap-2"
          >
            <span className={`${!isEnglish(item.method_name) && "font-bn"}`}>
              {item.method_name}
            </span>
            <RxCross2
              size="16"
              className="cursor-pointer hover:bg-gray-300 rounded p-0.5"
              onClick={() => handleRemove(item.id)}
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
              {isLoading ? (
                <li className="flex items-center">
                  <span className="loading loading-spinner text-black04"></span>
                </li>
              ) : suggestions.length === 0 ? (
                <h4 className="h-24 py-8 text-black04 text-center">
                  No result found
                </h4>
              ) : (
                suggestions.map((item: Item) => (
                  <li key={item.id} onClick={() => handleSelect(item)}>
                    <span
                      className={`${!isEnglish(item.method_name) && "font-bn"}`}
                    >
                      {item.method_name}
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectShippingMethods;
