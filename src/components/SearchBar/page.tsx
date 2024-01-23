"use client";
import { useEffect, useState } from "react";

const SearchBar = () => {
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
      <label className="form-control w-full">
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered input-primary w-full input-md lg:text-base"
        />
      </label>
    </div>
  );
};

export default SearchBar;
