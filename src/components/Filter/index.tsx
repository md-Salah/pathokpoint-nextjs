"use client";

import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { authors, publishers } from "@/constants";
import { Category } from "@/interface";
import { PriceRangeFilter } from "@/components";
import CategoryFilter from "./CategoryFilter";
import InStockFilter from "./InStockFilter";
import PublisherFilter from "./PublisherFilter";
import ConditionFilter from "./ConditionFilter";
import LanguageFilter from "./LanguageFilter";
import AuthorFilter from "./AuthorFilter";

const Filter = ({ categories }: { categories: Category[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const inStock = searchParams.get("in_stock") === "true";

  const handleInStockChange = () => {
    const queryParams = new URLSearchParams(searchParams.toString());
    const inStock = queryParams.get("in_stock");
    if (inStock === "true") queryParams.delete("in_stock");
    else queryParams.set("in_stock", "true");
    router.replace(`${pathname}?${queryParams.toString()}`, { scroll: false });
  };

  const handleChange = (filterBy: string, slug: string) => {
    const params = new URLSearchParams(searchParams.toString());

    let selected = params.get(filterBy)?.split(",") || [];
    if (selected.includes(slug)) {
      selected = selected.filter((category) => category !== slug);
    } else {
      selected.push(slug);
    }

    if (selected.length === 0) params.delete(filterBy);
    else params.set(filterBy, selected.join(","));
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const resetFilter = (filterBy: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(filterBy);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSearch = useDebouncedCallback(
    (searchKey: string, searchVal: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchVal) params.set(searchKey, searchVal);
      else params.delete(searchKey);

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    600
  );

  const handlePriceRange = () => {};

  const handleCondition = (condition: string) => {};

  const handleLanguage = (ln: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const language = params.get("language");
    if (language && language === ln) params.delete("language");
    else params.set("language", ln);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {categories.length > 0 && (
        <CategoryFilter
          categories={categories}
          handleChange={handleChange}
          resetFilter={resetFilter}
          handleSearch={handleSearch}
        />
      )}
      {authors.length > 0 && (
        <AuthorFilter
          authors={authors}
          handleChange={handleChange}
          resetFilter={resetFilter}
          handleSearch={handleSearch}
        />
      )}
      {publishers.length > 0 && (
        <PublisherFilter
          publishers={publishers}
          handleChange={handleChange}
          resetFilter={resetFilter}
          handleSearch={handleSearch}
        />
      )}
      <ConditionFilter handleCondition={handleCondition} />
      <LanguageFilter
        handleLanguage={handleLanguage}
        ln={searchParams.get("language") || ""}
      />
      <InStockFilter
        handleInStockChange={handleInStockChange}
        checked={inStock}
      />
      <PriceRangeFilter />
    </div>
  );
};

export default Filter;
