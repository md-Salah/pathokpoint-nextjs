"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("q") || "");

  const updateSearchParams = (params: URLSearchParams) => {
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("q", value);
    else params.delete("q");
    updateSearchParams(params);
  }, 400);

  useEffect(() => {
    handleSearch(value.trim());
  }, [value, handleSearch]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={`Search in this page...`}
      className="input input-bordered input-sm font-bn max-w-44 md:max-w-60"
    />
  );
};

export default Search;
