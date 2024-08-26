import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useDebouncedCallback } from 'use-debounce';

import { Book } from '@/interface';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

import BookSuggestion from './BookSuggestion';

interface Props {
  handleSelectBook: (book: Book) => void;
}

const SearchItem = ({ handleSelectBook }: Props) => {
  const [q, setQ] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<Book[]>([]);

  const handleSearchDebounced = useDebouncedCallback(async (text: string) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/book/all?q=${text}`);
      setSuggestions(response.data);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  }, 500);

  const handleSearch = (text: string) => {
    setQ(text);
    setErr(null);
    text = text.trim();
    if (text === "") return;
    handleSearchDebounced(text);
  };

  const handleSelect = (book: Book) => {
    if (book.quantity > 0) handleSelectBook(book);
    else setErr(`${book.name} is out of stock`);
  };

  return (
    <div>
      <label className="input input-bordered bg-white flex items-center gap-2 focus-within:outline-none focus-within:border-primary">
        <CiSearch size="18" className="text-black04" />
        <input
          type="text"
          className=""
          value={q}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by book name, Id"
        />
      </label>
      <div className="mt-4 h-96 overflow-y-scroll">
        {err && <p className=" text-highlight">{err}</p>}
        {loading && (
          <div className="flex justify-center">
            <div className="loading loading-spinner text-black04"></div>
          </div>
        )}
        {q && suggestions.length === 0 && !loading && (
          <p className="text-black04 text-center">No book found</p>
        )}
        {suggestions.map((book) => (
          <div
            key={book.id}
            onClick={() => handleSelect(book)}
            className="cursor-pointer"
          >
            <BookSuggestion book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchItem;
