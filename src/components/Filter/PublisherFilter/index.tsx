"use client";
import { Publisher } from "@/interface";
import MultiSelect from "../MultiSelect";
import { useSearchParams } from "next/navigation";

interface Props {
  publishers: Publisher[];
  handleChange: (filterBy: string, slug: string) => void;
  resetFilter: (filterBy: string) => void;
  handleSearch: (searchKey: string, q: string) => void;
}

const PublisherFilter = ({
  publishers,
  handleChange,
  resetFilter,
  handleSearch,
}: Props) => {
  const searchParams = useSearchParams();
  const filterBy = "publisher__slug__in";
  const searchKey = "publisher_q";

  return (
    <MultiSelect
      title="Publisher"
      options={publishers}
      filterBy={filterBy}
      resetFilter={resetFilter}
      selectedSlug={searchParams.get(filterBy)?.split(",") || []}
      handleChange={handleChange}
      searchKey={searchKey}
      searchValue={searchParams.get(searchKey)?.toString() || ""}
      handleSearch={handleSearch}
    />
  );
};

export default PublisherFilter;
