"use client";
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useDebouncedCallback } from 'use-debounce';

import { Category } from '@/interface';
import { getCategories } from '@/utils/api';
import { fetcher } from '@/utils/axiosConfig';

import MultiSelect from '../MultiSelect';

interface Props {
  updateParams: (key: string, val: string) => void;
}

interface CategoryExtend extends Category {
  selected: boolean;
}

const CategoryFilter = ({ updateParams }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filterBy = "category__slug__in";
  const [search, setSearch] = useState<string>("");
  const [categories, setCategories] = useState<CategoryExtend[]>([]);

  const slugs = searchParams.get(filterBy) || null;
  const { data: selected } = useSWR(
    `/category/all?page=1&per_page=20&slug__in=${slugs}`,
    fetcher
  );

  const query = [
    `/category/all?page=1&per_page=20`,
    pathname.split("/")[1] === "authors" &&
      `author__slug__in=${pathname.split("/")[2]}`,
    pathname.split("/")[1] === "publishers" &&
      `publisher__slug__in=${pathname.split("/")[2]}`,
    searchParams.get("tag__slug__in") &&
      `tag__slug__in=${searchParams.get("tag__slug__in")}`,
    searchParams.get("author__slug__in") &&
      `author__slug__in=${searchParams.get("author__slug__in")}`,
    searchParams.get("publisher__slug__in") &&
      `publisher__slug__in=${searchParams.get("publisher__slug__in")}`,
  ]
    .filter(Boolean)
    .join("&");

  const { data, error, isLoading } = useSWR(query, fetcher);

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
    if (q.trim() === "") return;

    const data = await getCategories(`${query}&q=${q.trim()}`);
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

  return (
    <div>
      <MultiSelect
        title="Category"
        options={categories}
        handleChange={handleCategoryChange}
        resetFilter={resetFilter}
        search={search}
        handleSearch={handleSearch}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default CategoryFilter;
