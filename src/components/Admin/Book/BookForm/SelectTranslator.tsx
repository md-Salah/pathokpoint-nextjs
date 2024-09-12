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

const SelectTranslator = ({ book, setBook }: Props) => {
  const [query, setQuery] = useState<string>("");
  const { data: suggestions, isLoading } = useSWR(
    `/author/all?q=${query}&per_page=20`,
    fetcher
  );

  const handleSelect = (translator: Item) => {
    if (book.translators.find((a) => a.id === translator.id)) return;
    setBook({ ...book, translators: [...book.translators, translator] });
  };

  const handleRemove = (id: string) => {
    setBook({ ...book, translators: book.translators.filter((a) => a.id !== id) });
  };

  return (
    <MultiSelect
      selectedItems={book.translators}
      handleSelect={handleSelect}
      handleRemove={handleRemove}
      query={query}
      setQuery={setQuery}
      isLoading={isLoading}
      suggestions={suggestions}
    />
  );
};

export default SelectTranslator;
