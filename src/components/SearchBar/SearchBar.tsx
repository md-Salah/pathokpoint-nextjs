"use client";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

interface Props {
  query: string;
  handleSearch: (value: string) => void;
}

const SearchBar = ({query, handleSearch}:Props) => {
  let i = 0;
  const placeholderText = "বই অথবা লেখকের নাম লিখুন";
  const [placeholder, setPlaceholder] = useState("");

  const typingPlaceholder = () => {
    setPlaceholder(placeholderText.slice(0, i));
    i++;
    if (i === placeholderText.length) {
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
    <div className="">
      <label className="form-control w-full relative flex justify-center items-end">
        <input
          type="text"
          value={query}
          placeholder={placeholder}
          className="input input-bordered input-primary w-full input-md lg:text-base"
          onChange={(e)=>handleSearch(e.target.value)}
        />
        {query.length > 0 && (
          <div
            className="absolute  rounded p-1 mr-2 cursor-pointer hover:bg-secondary"
            onClick={()=>handleSearch("")}
          >
            <RxCross2 />
          </div>
        )}
      </label>
    </div>
  );
};

export default SearchBar;
