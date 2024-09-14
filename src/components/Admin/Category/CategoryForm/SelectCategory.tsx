import { useState } from 'react';
import useSWR from 'swr';

import { MultiSelect } from '@/components';
import { Category } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

interface Item {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  handleTouched?: () => void;
}

const SelectCategory = ({ category, setCategory, handleTouched }: Props) => {
  const [query, setQuery] = useState<string>("");
  const { data: suggestions, isLoading } = useSWR(
    `/category/all?q=${query}&per_page=20`,
    fetcher
  );

  const handleSelect = (parent: Item) => {
    if (!category.parent.find((a) => a.id === parent.id)) {
      setCategory({ ...category, parent: [...category.parent, parent] });
      if (handleTouched)
        handleTouched();
    }
  };

  const handleRemove = (id: string) => {
    setCategory({
      ...category,
      parent: category.parent.filter((a) => a.id !== id),
    });
    if (handleTouched)
      handleTouched();
  };

  return (
    <MultiSelect
      selectedItems={category.parent}
      handleSelect={handleSelect}
      handleRemove={handleRemove}
      query={query}
      setQuery={setQuery}
      isLoading={isLoading}
      suggestions={suggestions}
    />
  );
};

export default SelectCategory;
