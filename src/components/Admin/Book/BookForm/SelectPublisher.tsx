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

const SelectPublisher = ({ book, setBook }: Props) => {
  const [query, setQuery] = useState<string>("");
  const { data: suggestions, isLoading } = useSWR(
    `/publisher/all?q=${query}&per_page=20`,
    fetcher
  );

  const handleSelect = (pub: Item) => {
    setBook({ ...book, publisher: pub });
  };

  const handleRemove = (id: string) => {
    setBook({ ...book, publisher: null });
  };

  return (
    <MultiSelect
      selectedItems={book.publisher ? [book.publisher] : []}
      handleSelect={handleSelect}
      handleRemove={handleRemove}
      query={query}
      setQuery={setQuery}
      isLoading={isLoading}
      suggestions={suggestions}
    />
  );
};

export default SelectPublisher;
