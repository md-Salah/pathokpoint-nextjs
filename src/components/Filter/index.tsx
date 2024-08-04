"use client";

import { FiSearch } from "react-icons/fi";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { publishers } from "@/constants";
import { Category, Publisher } from "@/interface";
import { PriceRangeFilter } from "@/components";
import { isEnglish } from "@/utils";
import CategoryFilter from "./CategoryFilter";
import InStockFilter from "./InStockFilter";

const Filter = ({ categories }: { categories: Category[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const inStock = searchParams.get("in_stock") === "true";

  const handleCategoryChange = (slug: string) => {
    const queryParams = new URLSearchParams(searchParams.toString());

    let selectedCategories =
      queryParams.get("category__slug__in")?.split(",") || [];
    if (selectedCategories.includes(slug)) {
      selectedCategories = selectedCategories.filter(
        (category) => category !== slug
      );
    } else {
      selectedCategories.push(slug);
    }

    if (selectedCategories.length === 0)
      queryParams.delete("category__slug__in");
    else queryParams.set("category__slug__in", selectedCategories.join(","));

    router.replace(`${pathname}?${queryParams.toString()}`, { scroll: false });
  };

  const handleResetFilter = () => {
    router.replace(pathname, { scroll: false });
  };

  const handleCategorySearch = useDebouncedCallback((q: string) => {
    const queryParams = new URLSearchParams(searchParams.toString());
    if (q) queryParams.set("category_q", q);
    else queryParams.delete("category_q");

    router.replace(`${pathname}?${queryParams.toString()}`, { scroll: false });
  }, 600);

  const handleInStockChange = () => {
    const queryParams = new URLSearchParams(searchParams.toString());
    const inStock = queryParams.get("in_stock");
    queryParams.set("in_stock", inStock === "true" ? "false" : "true");
    router.replace(`${pathname}?${queryParams.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {categories.length > 0 && (
        <CategoryFilter
          categories={categories}
          handleCategoryChange={handleCategoryChange}
          resetFilter={handleResetFilter}
          handleSearch={handleCategorySearch}
        />
      )}
      <PublisherFilter publishers={publishers} />
      <ConditionFilter />
      <InStockFilter
        handleInStockChange={handleInStockChange}
        checked={inStock}
      />
      <PriceRangeFilter />
    </div>
  );
};

export default Filter;

const PublisherFilter = ({ publishers }: { publishers: Publisher[] }) => (
  <div className="bg-white">
    <div className="flex justify-between items-center py-3 px-5 border-b">
      <h4 className="font-semibold text-black02 text-base">Publisher</h4>
      <span className="font-semibold text-xs text-[#1A97D6] btn btn-xs btn-link">
        Reset filter
      </span>
    </div>
    <div className="px-5 pt-3 pb-5">
      <div className="form-control">
        <label className="input input-bordered input-sm flex items-center justify-between gap-2 bg-white overflow-hidden rounded-2xl">
          <input type="text" className="input-ghost min-w-0 flex-1" />
          <FiSearch className="text-primary h-6 w-6" />
        </label>
      </div>
      <div className="mt-3 form-control h-44 overflow-y-scroll">
        {/* Sort checked items first */}
        {publishers.map((publisher) => (
          <label
            key={publisher.id}
            className="label py-1 pl-0 cursor-pointer justify-start gap-2"
          >
            <input
              type="checkbox"
              className="checkbox checkbox-xs checkbox-primary"
            />
            <span
              className={`label-text ${
                !isEnglish(publisher.name) && "font-bn"
              }`}
            >
              {publisher.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  </div>
);

const ConditionFilter = () => (
  <div className="bg-white">
    <div className="flex justify-between items-center py-3 px-5 border-b">
      <h4 className="font-semibold text-black02 text-base">Condition</h4>
    </div>
    <div className="px-5 pt-3 pb-5 form-control">
      <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-xs checkbox-primary"
        />
        <span className={`label-text`}>New</span>
      </label>
      <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-xs checkbox-primary"
        />
        <span className={`label-text`}>Old</span>
      </label>
      <div className="ml-4">
        <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
          />
          <span className={`label-text`}>Old like new</span>
        </label>
        <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
          />
          <span className={`label-text`}>Old good enough</span>
        </label>
        <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
          />
          <span className={`label-text`}>Old acceptable</span>
        </label>
      </div>
    </div>
  </div>
);
