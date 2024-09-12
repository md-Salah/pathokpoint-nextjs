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

const SelectAuthor = ({ book, setBook }: Props) => {
  const [query, setQuery] = useState<string>("");
  const { data: suggestions, isLoading } = useSWR(
    `/author/all?q=${query}&per_page=20`,
    fetcher
  );

  const handleSelect = (author: Item) => {
    if (book.authors.find((a) => a.id === author.id)) return;
    setBook({ ...book, authors: [...book.authors, author] });
  };

  const handleRemove = (id: string) => {
    setBook({ ...book, authors: book.authors.filter((a) => a.id !== id) });
  };

  return (
    <MultiSelect
      selectedItems={book.authors}
      handleSelect={handleSelect}
      handleRemove={handleRemove}
      query={query}
      setQuery={setQuery}
      isLoading={isLoading}
      suggestions={suggestions}
    />
  );
};

export default SelectAuthor;
