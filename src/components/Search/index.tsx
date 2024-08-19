"use client";
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

import SearchBar from './SearchBar';
import SearchSuggestion from './SearchSuggestion';

const Search = () => {
  const [tab, setTab] = useState<string>("book");
  const [focus, setFocus] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleSearchDebounced = useDebouncedCallback(async (val: string) => {
    try {
      setLoading(true);
      if (tab === "book") {
        const res = await axiosInstance.get(`/book/all?q=${val.trim()}`);
        setBooks(res.data);
      } else if (tab === "author") {
        const res = await axiosInstance.get(`/author/all?q=${val.trim()}`);
        setAuthors(res.data);
      } else {
        const res = await axiosInstance.get(`/category/all?q=${val.trim()}`);
        setCategories(res.data);
      }
    } catch (error) {
      console.error(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  }, 500);

  const handleSearch = (val: string) => {
    setQuery(val);
    handleSearchDebounced(val);
  };

  useEffect(() => {
    handleSearchDebounced(query);
  }, [tab]);

  return (
    <div
      className="w-full dropdown dropdown-end"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <SearchBar query={query} handleSearch={handleSearch} focus={focus} setFocus={setFocus} />
      <div
        className="dropdown-content bg-white shadow-lg rounded-b-lg min-w-full"
        tabIndex={0}
      >
        {focus && query.trim().length > 0 && (
          <SearchSuggestion
            loading={loading}
            books={books}
            authors={authors}
            categories={categories}
            tab={tab}
            setTab={setTab}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
