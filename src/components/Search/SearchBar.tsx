"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { GoArrowLeft } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';

import { setFocus } from '@/redux/features/search-slice';
import { AppDispatch, RootState } from '@/redux/store';

interface Props {
  handleSearch: (val: string) => void;
}

const SearchBar = ({ handleSearch }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { focus, query } = useSelector((state: RootState) => state.search);
  const text = "বই, লেখক, অথবা বিষয় লিখুন";
  const [placeholder, setPlaceholder] = useState<string>("");

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setPlaceholder(text.slice(0, i));
      i++;
      if (i === text.length) {
        setTimeout(() => {
          i = 0;
          setPlaceholder("");
        }, 3000);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full flex justify-between items-center">
      {focus && (
        <GoArrowLeft
          size="24"
          className="sm:hidden mr-2 cursor-pointer text-black04"
          onClick={() => dispatch(setFocus(false))}
        />
      )}
      <label
        className={`w-full h-10 input input-bordered flex items-center gap-2 rounded-3xl pr-1 bg-white font-bn
                            focus-within:border-primary focus-within:outline-none
                            `}
        onClick={() => dispatch(setFocus(true))}
      >
        <input
          type="text"
          className="grow w-full"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {focus && query.length > 0 && (
          <RxCross2
            size="24"
            className="cursor-pointer text-black04"
            onClick={() => handleSearch("")}
          />
        )}
        <Link
          href={`/books?q=${query.trim()}`}
          className="btn btn-primary btn-circle btn-sm"
        >
          <FiSearch className="w-4 h-4" />
        </Link>
      </label>
    </div>
  );
};

export default SearchBar;
