"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useDebouncedCallback } from 'use-debounce';

const SearchBar = ({placeholder}: {placeholder?: string}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [q, setQ] = useState(searchParams.get("q") || "");

  const handleChangeDebounced = useDebouncedCallback((text: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (text === "") params.delete("q");
    else params.set("q", text);
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 500);

  const handleChange = (text: string) => {
    setQ(text);
    handleChangeDebounced(text.trim());
  };

  return (
    <label className="input input-bordered input-sm h-10 lg:input-md bg-white flex items-center gap-2 focus-within:outline-none focus-within:border-primary">
      <input
        type="text"
        className="grow min-w-0"
        placeholder={placeholder || "Search"}
        value={q}
        onChange={(e) => handleChange(e.target.value)}
      />
      <RxCross1
        size="16"
        className={`cursor-pointer text-black04 min-w-4 hover:text-primary ${!q && "opacity-0"}`}
        onClick={() => handleChange("")}
      />
    </label>
  );
};

export default SearchBar;
