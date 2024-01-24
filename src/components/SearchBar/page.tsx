"use client";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const placeholderText = "বই অথবা লেখকের নাম লিখুন";
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    let i = 0;
    const type = () => {
      setPlaceholder(placeholderText.slice(0, i));
      i++;
      if (i === placeholderText.length) {
        setTimeout(() => {
          i = 0;
          setPlaceholder("");
        }, 3000);
      }
    };
    const intervalId = setInterval(type, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:w-96">
      <label className="form-control w-full relative flex justify-center items-end">
        <input
          type="text"
          value={query}
          placeholder={placeholder}
          className="input input-bordered input-primary w-full input-md lg:text-base"
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 && (
          <div
            className="absolute  rounded p-1 mr-2 cursor-pointer hover:bg-gray-200"
            onClick={() => setQuery("")}
          >
            <RxCross2 />
          </div>
        )}
      </label>
    </div>
  );
};

export default SearchBar;
