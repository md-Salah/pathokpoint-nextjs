"use client";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

interface Props {
  query: string;
  handleSearch: (value: string) => void;
}

const SearchBar = ({ query, handleSearch }: Props) => {
  let i = 0;
  const text = "বই অথবা লেখকের নাম লিখুন";
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
    <label
      className={`w-full h-full input input-bordered flex items-center gap-2 rounded-3xl pr-1 bg-white font-bn
                            focus-within:border-primary focus-within:outline-none
                            `}
    >
      <input
        type="text"
        className="grow w-full h-full"
        placeholder={placeholder}
      />
      <div className="bg-primary text-white rounded-full p-2 cursor-pointer">
        <FiSearch className="w-4 h-4" />
      </div>
    </label>
  );
};

export default SearchBar;
