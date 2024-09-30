"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';

import {
    setAuthors, setBooks, setCategories, setLoading, setQuery
} from '@/redux/features/search-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { getAuthors, getBooks, getCategories } from '@/utils/api';
import { extractAxiosErr } from '@/utils/axiosConfig';

import SearchBar from './SearchBar';
import SearchSuggestion from './SearchSuggestion';

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { focus, tab, query } = useSelector((state: RootState) => state.search);

  const handleSearchDebounced = useDebouncedCallback(async (val: string) => {
    try {
      dispatch(setLoading(true));
      if (tab === "book") {
        const books = await getBooks(`q=${val.trim()}&order_by=-in_stock`);
        dispatch(setBooks(books));
      } else if (tab === "author") {
        const authors = await getAuthors(`q=${val.trim()}`);
        dispatch(setAuthors(authors));
      } else {
        const categories = await getCategories(`q=${val.trim()}`);
        dispatch(setCategories(categories));
      }
    } catch (error) {
      console.error(extractAxiosErr(error));
    } finally {
      dispatch(setLoading(false));
    }
  }, 500);

  const handleSearch = (val: string) => {
    dispatch(setQuery(val));
    handleSearchDebounced(val);
  };

  useEffect(() => {
    handleSearchDebounced(query);
  }, [tab]);

  return (
    <div className="w-full dropdown dropdown-open dropdown-end" tabIndex={0}>
      <SearchBar handleSearch={handleSearch} />
      <div
        className="dropdown-content bg-white shadow-lg rounded-b-lg min-w-full"
        tabIndex={0}
      >
        {focus && query.trim().length > 0 && <SearchSuggestion />}
      </div>
    </div>
  );
};

export default Search;
