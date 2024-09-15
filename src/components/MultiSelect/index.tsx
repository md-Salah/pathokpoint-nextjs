"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

import { isEnglish } from '@/utils';

interface Item {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  selectedItems: Item[];
  handleSelect: (item: Item) => void;
  handleRemove: (id: string) => void;

  query: string;
  setQuery: (query: string) => void;
  isLoading: boolean;
  suggestions: Item[];
  handleAddNewClick?: () => void;
}

const MultiSelect = (props: Props) => {
  const {
    selectedItems,
    handleSelect,
    handleRemove,
    query,
    setQuery,
    isLoading,
    suggestions,
    handleAddNewClick,
  } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div className="dropdown w-full relative" tabIndex={0}>
      <label
        className="input flex flex-wrap p-2 h-fit items-center gap-2 focus-within:outline-none focus-within:border-primary"
        onClick={() => setIsDropdownOpen(true)}
      >
        {selectedItems.map((item: Item) => (
          <div
            key={item.id}
            className="flex items-center bg-gray-200 rounded px-2 py-1 w-fit text-sm gap-2"
          >
            <span className={`${!isEnglish(item.name) && "font-bn"}`}>
              {item.name}
            </span>
            <RxCross2
              size="16"
              className="cursor-pointer hover:bg-gray-300 rounded p-0.5"
              onClick={() => handleRemove(item.id)}
            />
          </div>
        ))}
        <input
          type="text"
          value={query}
          className="grow"
          onChange={(e) => setQuery(e.target.value)}
        />
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
                    <span className={`${!isEnglish(item.name) && "font-bn"}`}>
                      {item.name}
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>
          {handleAddNewClick && (
            <div className="border-t border-[#E8E9EB] text-center py-3 text-primary font-semibold">
              <p
                className="hover:cursor-pointer hover:underline"
                onClick={handleAddNewClick}
              >
                Add New
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
