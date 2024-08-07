"use client";
import useSWR from "swr";
import { useState, useEffect, useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";

import { Publisher } from "@/interface";
import MultiSelect from "../MultiSelect";
import { getPublishers } from "@/utils/api";
import { useSearchParams } from "next/navigation";
import { fetcher } from "@/utils/axiosConfig";

interface Props {
  updateParams: (key: string, val: string) => void;
}

interface PublisherExtend extends Publisher {
  selected: boolean;
}

const PublisherFilter = ({ updateParams }: Props) => {
  const searchParams = useSearchParams();
  const filterBy = "publisher__slug__in";
  const [search, setSearch] = useState<string>("");
  const [publishers, setPublishers] = useState<PublisherExtend[]>([]);

  const slugs = searchParams.get(filterBy) || null;
  const { data: selected } = useSWR(
    `/publisher/all?page=1&per_page=20&slug__in=${slugs}`,
    fetcher
  );
  const { data, error, isLoading } = useSWR(
    `/publisher/all?page=1&per_page=20`,
    fetcher
  );
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
    q = q.trim();
    if (q === "") return;

    const data = await getPublishers(`q=${q}`);
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

  if (isLoading) return <div className="skeleton w-full h-64"></div>;
  if (error)
    return (
      <div className="bg-white">Failed to load publishers. Try later.</div>
    );
  return (
    <MultiSelect
      title="Publisher"
      options={data}
      resetFilter={resetFilter}
      handleChange={handlePublisherChange}
      search={search}
      handleSearch={handleSearch}
    />
  );
};

export default PublisherFilter;
