"use client";
import { useSearchParams } from "next/navigation";

import { Category } from "@/interface";
import MultiSelect from "../MultiSelect";

interface Props {
  categories: Category[];
  handleChange: (filterBy: string, slug: string) => void;
  resetFilter: (filterBy: string) => void;
  handleSearch: (searchKey: string, searchVal: string) => void;
}

const CategoryFilter = ({
  categories,
  handleChange,
  resetFilter,
  handleSearch,
}: Props) => {
  const searchParams = useSearchParams();
  const filterBy = "category__slug__in";
  const searchKey = "category_q";

  return (
    <MultiSelect
      title="Category"
      filterBy={filterBy}
      options={categories}
      handleChange={handleChange}
      resetFilter={resetFilter}
      selectedSlug={searchParams.get(filterBy)?.split(",") || []}
      searchKey={searchKey}
      searchValue={searchParams.get(searchKey)?.toString() || ""}
      handleSearch={handleSearch}
    />
  );
};

export default CategoryFilter;
