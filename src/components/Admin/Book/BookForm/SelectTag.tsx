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

const SelectTag = ({ book, setBook }: Props) => {
  const [query, setQuery] = useState<string>("");
  const { data: suggestions, isLoading } = useSWR(
    `/tag/all?q=${query}&per_page=20`,
    fetcher
  );

  const handleSelect = (tag: Item) => {
    if (book.tags.find((a) => a.id === tag.id)) return;
    setBook({ ...book, tags: [...book.tags, tag] });
  };

  const handleRemove = (id: string) => {
    setBook({ ...book, tags: book.tags.filter((a) => a.id !== id) });
  };

  return (
    <MultiSelect
      selectedItems={book.tags}
      handleSelect={handleSelect}
      handleRemove={handleRemove}
      query={query}
      setQuery={setQuery}
      isLoading={isLoading}
      suggestions={suggestions}
    />
  );
};

export default SelectTag;
