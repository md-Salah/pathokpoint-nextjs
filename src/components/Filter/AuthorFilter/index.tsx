"use client";
import { useSearchParams } from "next/navigation";

import { Author } from "@/interface";
import MultiSelect from "../MultiSelect";

interface Props {
  authors: Author[];
  handleChange: (filterBy: string, slug: string) => void;
  resetFilter: (filterBy: string) => void;
  handleSearch: (searchKey: string, q: string) => void;
}

const AuthorFilter = ({
  authors,
  handleChange,
  resetFilter,
  handleSearch,
}: Props) => {
  const searchParams = useSearchParams();
  const filterBy = "author__slug__in";
  const searchKey = "author_q";

  return (
    <MultiSelect
      title="Author"
      filterBy={filterBy}
      options={authors}
      handleChange={handleChange}
      resetFilter={resetFilter}
      selectedSlug={searchParams.get(filterBy)?.split(",") || []}
      searchKey={searchKey}
      searchValue={searchParams.get(searchKey)?.toString() || ""}
      handleSearch={handleSearch}
    />
  );
};

export default AuthorFilter;
