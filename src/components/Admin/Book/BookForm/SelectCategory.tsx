import { useState } from 'react';
import useSWR from 'swr';

import { MultiSelect } from '@/components';
import { BookAdmin } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

interface Item {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  book: BookAdmin;
  setBook: (book: BookAdmin) => void;
}

const SelectCategory = ({ book, setBook }: Props) => {
  const [query, setQuery] = useState<string>("");
  const { data: suggestions, isLoading } = useSWR(
    `/category/all?q=${query}&per_page=20`,
    fetcher
  );

  const handleSelect = (category: Item) => {
    if (book.categories.find((a) => a.id === category.id)) return;
    setBook({ ...book, categories: [...book.categories, category] });
  };

  const handleRemove = (id: string) => {
    setBook({ ...book, categories: book.categories.filter((a) => a.id !== id) });
  };

  return (
    <MultiSelect
      selectedItems={book.categories}
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
