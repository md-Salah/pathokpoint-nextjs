"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useDebouncedCallback } from 'use-debounce';

interface Props {
  name: string;
  placeholder: string;
}

const KeyValueFilter = ({ name, placeholder }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [q, setQ] = useState(searchParams.get(name) || "");

  const handleChangeDebounced = useDebouncedCallback((text: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (text === "") params.delete(name);
    else params.set(name, text);
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
        placeholder={placeholder}
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

export default KeyValueFilter;
