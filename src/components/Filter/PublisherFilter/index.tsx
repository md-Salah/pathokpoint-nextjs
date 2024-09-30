"use client";
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useDebouncedCallback } from 'use-debounce';

import { Publisher } from '@/interface';
import { getPublishers } from '@/utils/api';
import { fetcher } from '@/utils/axiosConfig';

import MultiSelect from '../MultiSelect';

interface Props {
  updateParams: (key: string, val: string) => void;
}

interface PublisherExtend extends Publisher {
  selected: boolean;
}

const PublisherFilter = ({ updateParams }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filterBy = "publisher__slug__in";
  const [search, setSearch] = useState<string>("");
  const [publishers, setPublishers] = useState<PublisherExtend[]>([]);

  const slugs = searchParams.get(filterBy) || null;
  const { data: selected } = useSWR(
    `/publisher/all?page=1&per_page=20&slug__in=${slugs}`,
    fetcher
  );

  const query = [
    `/publisher/all?page=1&per_page=20`,
    pathname.split("/")[1] === "authors" &&
      `author__slug__in=${pathname.split("/")[2]}`,
    pathname.split("/")[1] === "categories" &&
      `category__slug__in=${pathname.split("/")[2]}`,
    searchParams.get("tag__slug__in") &&
      `tag__slug__in=${searchParams.get("tag__slug__in")}`,
    searchParams.get("author__slug__in") &&
      `author__slug__in=${searchParams.get("author__slug__in")}`,
    searchParams.get("category__slug__in") &&
      `category__slug__in=${searchParams.get("category__slug__in")}`,
  ]
    .filter(Boolean)
    .join("&");

  const { data, error, isLoading } = useSWR(query, fetcher);

  useEffect(() => {
    if (selected && data) {
      const selectedData = selected.map((pub: Publisher) => ({
        ...pub,
        selected: true,
      }));
      const newData = data
        .filter((pub: Publisher) => {
          return !selected.some((s: PublisherExtend) => s.id === pub.id);
        })
        .map((pub: Publisher) => ({ ...pub, selected: false }));
      setPublishers([...selectedData, ...newData]);
    }
  }, [selected, data]);

  const handleSearch = (q: string) => {
    setSearch(q);
    handleSearchDebounced(q);
  };

  const handleSearchDebounced = useDebouncedCallback(async (q: string) => {
    if (q.trim() === "") return;

    const data = await getPublishers(`${query}&q=${q.trim()}`);
    let selected = publishers.filter((pub) => pub.selected);
    let newData = data.filter((pub: Publisher) => {
      return !selected.some((s) => s.id === pub.id);
    });
    setPublishers([
      ...selected,
      ...newData.map((pub: Publisher) => ({ ...pub, selected: false })),
    ]);
  }, 300);

  const handlePublisherChange = (slug: string) => {
    const updatedPubs = publishers
      .map((pub) => {
        if (pub.slug === slug) pub.selected = !pub.selected;
        return pub;
      })
      .sort((a, b) => {
        return (b.selected ? 1 : 0) - (a.selected ? 1 : 0);
      });
    setPublishers(updatedPubs);

    const slugs = updatedPubs
      .filter((pub) => pub.selected)
      .map((pub) => pub.slug);
    updateParams(filterBy, slugs.join(","));
  };

  const resetFilter = useCallback(() => {
    setPublishers((pubs) =>
      pubs.map((pub) => {
        pub.selected = false;
        return pub;
      })
    );
    updateParams(filterBy, "");
  }, [filterBy, updateParams]);

  return (
    <MultiSelect
      title="Publisher"
      options={publishers}
      resetFilter={resetFilter}
      handleChange={handlePublisherChange}
      search={search}
      handleSearch={handleSearch}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default PublisherFilter;
