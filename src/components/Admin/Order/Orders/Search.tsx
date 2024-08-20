import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
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
    <label className="input input-bordered input-sm bg-white flex items-center gap-2 focus-within:outline-none focus-within:border-primary">
      <CiSearch size="18" className="text-black04" />
      <input
        type="text"
        className="grow"
        placeholder="Search by tracking id"
        value={q}
        onChange={(e) => handleChange(e.target.value)}
      />
      {q.length > 0 && (
        <RxCross1
          size="14"
          className="cursor-pointer text-black04"
          onClick={() => handleChange("")}
        />
      )}
    </label>
  );
};

export default Search;
