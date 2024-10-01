import { useEffect, useReducer, useState } from 'react';
import useSWR from 'swr';

import { MultiSelect } from '@/components';
import { fetcher } from '@/utils/axiosConfig';

interface Item {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  searchUrl: string;
  name: string;
  selectedItems: Item[];
  handleSelect: (name: string, items: Item) => void;
  handleRemove: (name: string, id: string) => void;
}

const MultiSelector = ({
  searchUrl,
  name,
  handleSelect,
  handleRemove,
  selectedItems,
}: Props) => {
  const [query, setQuery] = useState<string>("");
  const { data: suggestions, isLoading } = useSWR(
    `${searchUrl}?q=${query}&per_page=20`,
    fetcher
  );

  const handleItemSelect = (item: Item) => {
    handleSelect(name, item);
    setQuery("");
  };

  const handleItemRemove = (id: string) => {
    handleRemove(name, id);
  };

  return (
    <MultiSelect
      selectedItems={selectedItems}
      handleSelect={handleItemSelect}
      handleRemove={handleItemRemove}
      query={query}
      setQuery={setQuery}
      isLoading={isLoading}
      suggestions={suggestions}
    />
  );
};

export default MultiSelector;
