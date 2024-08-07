"use client";
import useSWR from "swr";
import { useState, useEffect, useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams } from "next/navigation";

import MultiSelect from "../MultiSelect";
import { getCategories } from "@/utils/api";
import { Category } from "@/interface";
import { fetcher } from "@/utils/axiosConfig";

interface Props {
  updateParams: (key: string, val: string) => void;
}

interface CategoryExtend extends Category {
  selected: boolean;
}

const CategoryFilter = ({ updateParams }: Props) => {
  const searchParams = useSearchParams();
  const filterBy = "category__slug__in";
  const [search, setSearch] = useState<string>("");
  const [categories, setCategories] = useState<CategoryExtend[]>([]);

  const slugs = searchParams.get(filterBy) || null;
  const { data: selected } = useSWR(
    `/category/all?page=1&per_page=20&slug__in=${slugs}`,
    fetcher
  );
  const { data, error, isLoading } = useSWR(
    `/category/all?page=1&per_page=20`,
    fetcher
  );
  useEffect(() => {
    if (selected && data) {
      const selectedData = selected.map((cat: Category) => ({
        ...cat,
        selected: true,
      }));
      const newData = data
        .filter((cat: Category) => {
          return !selected.some((s: CategoryExtend) => s.id === cat.id);
        })
        .map((cat: Category) => ({ ...cat, selected: false }));
      setCategories([...selectedData, ...newData]);
    }
  }, [selected, data]);

  const handleSearch = (q: string) => {
    setSearch(q);
    handleSearchDebounced(q);
  };

  const handleSearchDebounced = useDebouncedCallback(async (q: string) => {
    q = q.trim();
    if (q === "") return;

    const data = await getCategories(`q=${q}`);
    let selected = categories.filter((cat) => cat.selected);
    let newData = data.filter((cat: Category) => {
      return !selected.some((s) => s.id === cat.id);
    });
    setCategories([
      ...selected,
      ...newData.map((cat: Category) => ({ ...cat, selected: false })),
    ]);
  }, 300);

  const handleCategoryChange = (slug: string) => {
    const updatedCats = categories
      .map((cat) => {
        if (cat.slug === slug) cat.selected = !cat.selected;
        return cat;
      })
      .sort((a, b) => {
        return (b.selected ? 1 : 0) - (a.selected ? 1 : 0);
      });
    setCategories(updatedCats);

    const slugs = updatedCats
      .filter((cat) => cat.selected)
      .map((cat) => cat.slug);
    updateParams(filterBy, slugs.join(","));
  };

  const resetFilter = useCallback(() => {
    setCategories((cats) =>
      cats.map((cat) => {
        cat.selected = false;
        return cat;
      })
    );
    updateParams(filterBy, "");
  }, [filterBy, updateParams]);

  if (isLoading) return <div className="skeleton w-full h-64"></div>;
  if (error)
    return (
      <div className="bg-white">Failed to load categories. Try later.</div>
    );
  return (
    <div>
      <MultiSelect
        title="Category"
        options={categories}
        handleChange={handleCategoryChange}
        resetFilter={resetFilter}
        search={search}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default CategoryFilter;
