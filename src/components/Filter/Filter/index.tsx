"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
    AuthorFilter, CategoryFilter, ConditionFilter, InStockFilter, LanguageFilter, PriceRangeFilter,
    PublisherFilter
} from '@/components/Filter';

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParams = (key: string, val: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (val === "") params.delete(key);
    else params.set(key, val);
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const updateSearchParams = (params: URLSearchParams) => {
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {!pathname.includes("/categories/") && (
        <CategoryFilter updateParams={updateParams} />
      )}
      {!pathname.includes("/authors/") && (
        <AuthorFilter updateParams={updateParams} />
      )}
      {!pathname.includes("/publishers/") && (
        <PublisherFilter updateParams={updateParams} />
      )}
      <ConditionFilter updateSearchParams={updateSearchParams} />
      <LanguageFilter updateSearchParams={updateSearchParams} />
      <InStockFilter updateSearchParams={updateSearchParams} />
      <PriceRangeFilter updateSearchParams={updateSearchParams} />
    </div>
  );
};

export default Filter;
