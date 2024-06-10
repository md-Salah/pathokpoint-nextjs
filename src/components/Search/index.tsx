"use client";
import { useState } from "react";

import { books } from "@/constants";
import SearchBar from "./SearchBar";
import SearchSuggestion from "./SearchSuggestion";

const Search = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState({
    books: [],
    authors: [],
    categories: [],
    isEmpty: true,
  });

  const handleSearch = (val: string) => {
    setQuery(val);

    const results = {
      books: [],
      authors: [],
      categories: [],
      isEmpty: true,
    };

    const value = val.trim();
    if (value.length === 0) return setSuggestions(results);

    console.log("searching...");
    // Dummy searching on Constant data
    const regex = new RegExp(value, "gi");
    books.forEach((book) => {
      if (book.name.match(regex)) {
        // @ts-ignore
        results.books.push(book);
      }

      book.authors.forEach((author) => {
        if (author.name.match(regex)) {
          // @ts-ignore
          results.authors.push(author);
        }
      });

      book.categories.forEach((category) => {
        if (category.name.match(regex)) {
          // @ts-ignore
          results.categories.push(category);
        }
      });
    });

    if (
      results.books.length > 0 &&
      results.authors.length > 0 &&
      results.categories.length > 0
    )
      results.isEmpty = false;

    setSuggestions(results);
  };

  return (
    <div
      className="w-full dropdown dropdown-end"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <SearchBar query={query} handleSearch={handleSearch} focus={focus} />
      <div
        className="dropdown-content bg-white shadow-lg rounded-b-lg min-w-full"
        tabIndex={0}
      >
        {query.trim().length > 0 && (
          <SearchSuggestion suggestions={suggestions} />
        )}
      </div>
    </div>
  );
};

export default Search;
