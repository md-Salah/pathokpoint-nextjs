"use client";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

interface Props {
  query: string;
  handleSearch: (val: string) => void;
  focus: boolean;
}

const SearchBar = ({ query, handleSearch, focus }: Props) => {
  let i = 0;
  const text = "বই, লেখক, অথবা বিষয় লিখুন";
  const [placeholder, setPlaceholder] = useState<string>("");

  const typingPlaceholder = () => {
    setPlaceholder(text.slice(0, i));
    i++;
    if (i === text.length) {
      setTimeout(() => {
        i = 0;
        setPlaceholder("");
      }, 3000);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(typingPlaceholder, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full flex justify-between items-center">
      <label
        className={`w-full h-10 input input-bordered flex items-center gap-2 rounded-3xl pr-1 bg-white font-bn
                            focus-within:border-primary focus-within:outline-none
                            `}
      >
        <input
          type="text"
          className="grow w-full"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button className="btn btn-primary btn-circle btn-sm">
          <FiSearch className="w-4 h-4" />
        </button>
      </label>
      {focus && <RxCross2 className="h-6 w-6 cursor-pointer ml-3 sm:hidden" />}
    </div>
  );
};

export default SearchBar;
