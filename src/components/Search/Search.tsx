"use client";

import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { books } from "@/constants";
import { SearchBar, SearchSuggestion } from "@/components";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState(["Humayun Ahmed", "r", "উপন্যাস"]);
  const [suggestions, setSuggestions] = useState({
    books: [],
    authors: [],
    categories: [],
    isEmpty: true,
  });

  const handleSearch = (value: string) => {
    setQuery(value);

    const results = {
      books: [],
      authors: [],
      categories: [],
      isEmpty: true,
    };

    value = value.trim();
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

    // Add to recent
    const index = recent.indexOf(value);
    if (index === -1 && !results.isEmpty) setRecent([...recent, value]);

    setSuggestions(results);
    console.log(results);
  };

  return (
    // <div className="w-44 h-10 relative">
    //   <SearchBar query={query} handleSearch={handleSearch} />
    //   <div className="z-10 w-full bg-base-200 rounded-md mt-2 md:drop-shadow-lg absolute">
    //     {query.trim().length > 0 && (
    //       <SearchSuggestion suggestions={suggestions} />
    //     )}
    //   </div>
    // </div>

    <SearchBar query={query} handleSearch={handleSearch} />
  );
};

export default Search;

// const RecentSearch = () => {
//   return (
//     <div className="mt-2 pt-3 pb-3 bg-base-100 shadow-lg rounded-md">
//       <h1 className="font-semibold p-2">Recent Search</h1>
//       <ul className="p-2 h-96 overflow-y-scroll shadow-inner">
//         {recent.map((item, index) => (
//           <li
//             key={index}
//             className="mt-1 shadow-md rounded-md bg-white hover:bg-gray-50 hover:text-gray-600 p-2 cursor-pointer"
//             onClick={() => handleSearch(item)}
//           >
//             <BsSearch className="inline-block mr-3" />
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
