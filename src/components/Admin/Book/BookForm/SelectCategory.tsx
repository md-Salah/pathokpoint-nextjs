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

const SelectCategory = ({ book, setBook, handleTouched }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useToken();

  const [query, setQuery] = useState<string>("");
  const { data: suggestions, isLoading } = useSWR(
    `/category/all?q=${query}&per_page=20`,
    fetcher
  );

  const handleSelect = (category: Item) => {
    if (book.categories.find((a) => a.id === category.id)) return;
    setBook({ ...book, categories: [...book.categories, category] });
    if (handleTouched) handleTouched();
    setQuery("");
  };

  const handleRemove = (id: string) => {
    setBook({
      ...book,
      categories: book.categories.filter((a) => a.id !== id),
    });
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
      const res = await axiosInstance.post("/category", data, {
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
        selectedItems={book.categories}
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

export default SelectCategory;
