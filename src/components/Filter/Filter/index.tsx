"use client";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Author, Category, Publisher } from "@/interface";
import {
  CategoryFilter,
  AuthorFilter,
  PublisherFilter,
  ConditionFilter,
  LanguageFilter,
  InStockFilter,
  PriceRangeFilter,
} from "@/components/Filter";

interface Props {
  categories: Category[];
  publishers: Publisher[];
  authors: Author[];
}

const Filter = ({ categories, authors, publishers }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const inStock = searchParams.get("in_stock") === "true";

  const updateSearchParams = (params: URLSearchParams) => {
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleInStockChange = () => {
    const params = new URLSearchParams(searchParams.toString());
    const inStock = params.get("in_stock");
    if (inStock === "true") params.delete("in_stock");
    else params.set("in_stock", "true");
    updateSearchParams(params);
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
    updateSearchParams(params);
  };

  const resetFilter = (filterBy: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(filterBy);
    updateSearchParams(params);
  };

  const handleSearch = useDebouncedCallback(
    (searchKey: string, searchVal: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchVal) params.set(searchKey, searchVal);
      else params.delete(searchKey);
      updateSearchParams(params);
    },
    600
  );

  const handlePriceRange = useDebouncedCallback((min: number, max: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sale_price__gte", min.toString());
    params.set("sale_price__lte", max.toString());
    updateSearchParams(params);
  }, 300);

  const handleCondition = (condition: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentCondition = params.get("condition__in");
    if (currentCondition && currentCondition === condition)
      params.delete("condition__in");
    else params.set("condition__in", condition);
    updateSearchParams(params);
  };

  const handleLanguage = (ln: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const language = params.get("language");
    if (language && language === ln) params.delete("language");
    else params.set("language", ln);
    updateSearchParams(params);
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
      <ConditionFilter
        handleCondition={handleCondition}
        selected={searchParams.get("condition__in")?.split(",") || []}
      />
      <LanguageFilter
        handleLanguage={handleLanguage}
        ln={searchParams.get("language") || ""}
      />
      <InStockFilter
        handleInStockChange={handleInStockChange}
        checked={inStock}
      />
      <PriceRangeFilter
        handlePriceRange={handlePriceRange}
        initialValue={[
          parseInt(searchParams.get("sale_price__gte") || "0"),
          parseInt(searchParams.get("sale_price__lte") || "10000"),
        ]}
      />
    </div>
  );
};

export default Filter;
