"use client";

import { useEffect, useState } from "react";
import { books } from "@/constants";
import { SearchBar, SearchSuggestion } from "@/components";



const Test = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState({
    books : [],
    authors: [],
    subjects: [],
  });

  const handleSearch = () => {
    const results = {
      books: [],
      authors: [],
      subjects: [],
    };
    
    if (query.length === 0) return setSuggestions(results);
    
    console.log("searching...");
    const regex = new RegExp(query, "gi");
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

      book.subjects.forEach((subject) => {
        if (subject.name.match(regex)) {
          // @ts-ignore
          results.subjects.push(subject);
        }
      });
    });

    setSuggestions(results);
    console.log(results);
  };

  useEffect(() => {
    handleSearch();
  }, [query]);


  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      {
        query.length > -1 ? (

          <SearchSuggestion suggestions={suggestions} />
        ):
        (
          <div>Recent Search</div>
        )
      }
    </div>
  );
};

export default Test;
