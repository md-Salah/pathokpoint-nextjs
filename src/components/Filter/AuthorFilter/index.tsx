"use client";
import useSWR from "swr";
import { useState, useEffect, useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";

import { Author } from "@/interface";
import { getAuthors } from "@/utils/api";
import MultiSelect from "../MultiSelect";
import { useSearchParams } from "next/navigation";
import { fetcher } from "@/utils/axiosConfig";

interface Props {
  updateParams: (key: string, val: string) => void;
}

interface AuthorExtend extends Author {
  selected: boolean;
}

const AuthorFilter = ({ updateParams }: Props) => {
  const searchParams = useSearchParams();
  const filterBy = "author__slug__in";
  const [search, setSearch] = useState<string>("");
  const [authors, setAuthors] = useState<AuthorExtend[]>([]);

  const slugs = searchParams.get(filterBy) || null;
  const { data: selected } = useSWR(
    `/author/all?page=1&per_page=20&slug__in=${slugs}`,
    fetcher
  );
  const { data, error, isLoading } = useSWR(
    `/author/all?page=1&per_page=20`,
    fetcher
  );
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
    const data = await getAuthors(`q=${q}`);
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

  if (isLoading) return <div className="skeleton w-full h-64"></div>;
  if (error)
    return <div className="bg-white">Failed to load authors. Try later.</div>;
  return (
    <MultiSelect
      title="Author"
      options={authors}
      handleChange={handleAuthorChange}
      resetFilter={resetFilter}
      search={search}
      handleSearch={handleSearch}
    />
  );
};

export default AuthorFilter;
