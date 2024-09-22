"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface Props {
  tabOptions: {
    label: string;
    value: string;
  }[];
  name: string;
}

const KeyValueFilter = ({ tabOptions, name }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [tab, setTab] = useState(tabOptions[0].value);

  const handleChange = (val: string) => {
    setTab(val);
    const params = new URLSearchParams(searchParams.toString());
    if (val === "all") params.delete(name);
    else params.set(name, val);
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mt-2 border-b-[1px] border-[#6F6E77] text-sm sm:text-base border-opacity-20 w-full">
      <div className="flex items-center space-x-4 overflow-x-auto">
        {tabOptions.map((option) => (
          <button
            key={option.label}
            className={`py-2 px-4 ${
              tab === option.value
                ? "text-primary border-b-2 border-primary font-bold"
                : "text-[#363739]"
            }`}
            onClick={() => handleChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeyValueFilter;
