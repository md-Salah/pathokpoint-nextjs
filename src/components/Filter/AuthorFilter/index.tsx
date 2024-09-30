"use client";
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useDebouncedCallback } from 'use-debounce';

import { Author } from '@/interface';
import { getAuthors } from '@/utils/api';
import { fetcher } from '@/utils/axiosConfig';

import MultiSelect from '../MultiSelect';

interface Props {
  updateParams: (key: string, val: string) => void;
}

interface AuthorExtend extends Author {
  selected: boolean;
}

const AuthorFilter = ({ updateParams }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filterBy = "author__slug__in";
  const [search, setSearch] = useState<string>("");
  const [authors, setAuthors] = useState<AuthorExtend[]>([]);

  const slugs = searchParams.get(filterBy) || null;
  const { data: selected } = useSWR(
    `/author/all?page=1&per_page=20&slug__in=${slugs}`,
    fetcher
  );

  const query = [
    `/author/all?page=1&per_page=20`,
    pathname.split("/")[1] === "categories" &&
      `category__slug__in=${pathname.split("/")[2]}`,
    pathname.split("/")[1] === "publishers" &&
      `publisher__slug__in=${pathname.split("/")[2]}`,
    searchParams.get("tag__slug__in") &&
      `tag__slug__in=${searchParams.get("tag__slug__in")}`,
    searchParams.get("category__slug__in") &&
      `category__slug__in=${searchParams.get("category__slug__in")}`,
    searchParams.get("publisher__slug__in") &&
      `publisher__slug__in=${searchParams.get("publisher__slug__in")}`,
  ]
    .filter(Boolean)
    .join("&");

  const { data, error, isLoading } = useSWR(query, fetcher);
  useEffect(() => {
    if (selected && data) {
      const selectedData = selected.map((athr: Author) => ({
        ...athr,
        selected: true,
      }));
      const newData = data
        .filter((athr: Author) => {
          return !selected.some((s: AuthorExtend) => s.id === athr.id);
        })
        .map((athr: Author) => ({ ...athr, selected: false }));
      setAuthors([...selectedData, ...newData]);
    }
  }, [selected, data]);

  const handleSearch = (q: string) => {
    setSearch(q);
    handleSearchDebounced(q);
  };

  const handleSearchDebounced = useDebouncedCallback(async (q: string) => {
    q = q.trim();
    if (q === "") return;
    const data = await getAuthors(`${query}&q=${q}`);
    let selected = authors.filter((athr) => athr.selected);
    let newData = data.filter((athr: Author) => {
      return !selected.some((s) => s.id === athr.id);
    });
    setAuthors([
      ...selected,
      ...newData.map((athr: Author) => ({ ...athr, selected: false })),
    ]);
  }, 300);

  const handleAuthorChange = (slug: string) => {
    const updatedAuthors = authors
      .map((athr) => {
        if (athr.slug === slug) athr.selected = !athr.selected;
        return athr;
      })
      .sort((a, b) => {
        return (b.selected ? 1 : 0) - (a.selected ? 1 : 0);
      });
    setAuthors(updatedAuthors);

    const slugs = updatedAuthors
      .filter((athr) => athr.selected)
      .map((athr) => athr.slug);
    updateParams(filterBy, slugs.join(","));
  };

  const resetFilter = useCallback(() => {
    setAuthors((athrs) =>
      athrs.map((athr) => {
        athr.selected = false;
        return athr;
      })
    );
    updateParams(filterBy, "");
  }, [filterBy, updateParams]);

  return (
    <MultiSelect
      title="Author"
      options={authors}
      handleChange={handleAuthorChange}
      resetFilter={resetFilter}
      search={search}
      handleSearch={handleSearch}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default AuthorFilter;
