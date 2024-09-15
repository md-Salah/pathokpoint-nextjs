import { useRef, useState } from 'react';
import useSWR from 'swr';

import { MultiSelect } from '@/components';
import { useToken } from '@/hooks';
import { BookAdmin } from '@/interface';
import axiosInstance, { extractAxiosErr, fetcher } from '@/utils/axiosConfig';

import AddNewModal from './AddNewModal';

interface Item {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  book: BookAdmin;
  setBook: (book: BookAdmin) => void;
  handleTouched?: () => void;
}

const SelectAuthor = ({ book, setBook, handleTouched }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useToken();

  const [query, setQuery] = useState<string>("");
  const { data: suggestions, isLoading } = useSWR(
    `/author/all?q=${query}&per_page=20`,
    fetcher
  );

  const handleSelect = (author: Item) => {
    if (book.authors.find((a) => a.id === author.id)) return;
    setBook({ ...book, authors: [...book.authors, author] });
    if (handleTouched) handleTouched();
    setQuery("");
  };

  const handleRemove = (id: string) => {
    setBook({ ...book, authors: book.authors.filter((a) => a.id !== id) });
    if (handleTouched) handleTouched();
  };

  const handleAddNew = async (data: Item) => {
    if (!data.name || !data.slug) {
      setErr("Name and slug are required");
      return;
    }
    setLoading(true);
    setErr(null);
    try {
      const res = await axiosInstance.post("/author", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      handleSelect(res.data);
      modalRef.current?.close();
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const showModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <MultiSelect
        selectedItems={book.authors}
        handleSelect={handleSelect}
        handleRemove={handleRemove}
        query={query}
        setQuery={setQuery}
        isLoading={isLoading}
        suggestions={suggestions}
        handleAddNewClick={showModal}
      />
      <AddNewModal
        modalRef={modalRef}
        err={err}
        loading={loading}
        handleAddNew={handleAddNew}
      />
    </>
  );
};

export default SelectAuthor;
