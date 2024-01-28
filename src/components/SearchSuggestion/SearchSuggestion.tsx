"use client";

import { useState } from "react";
import { books } from "@/constants";
import Book from "./Book";

interface Props {
  suggestions: {
    books: typeof books;
    authors: (typeof books)[0]["authors"];
    subjects: (typeof books)[0]["subjects"];
  };
}

const SearchSuggestion = ({ suggestions }: Props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="mt-2 bg-base-100">
      <div role="tablist" className="tabs tabs-lifted">
        {/* Tab1: Books */}
        <input
          type="radio"
          name="suggestion-tab"
          role="tab"
          className="tab"
          aria-label="বই"
          checked={tab === 0}
          onChange={() => setTab(0)}
        />
        <div role="tabpanel" className="tab-content py-4 px-2">
          {suggestions.books.length > 0 ? (
            suggestions.books.map((book, index) => (
              <div key={index}>
                <Book book={book} />
              </div>
            ))
          ) : (
            <div>
              <p className="text-gray-400">কোন বই পাওয়া যায়নি</p>
            </div>
          )}
        </div>

        {/* Tab2: Authors */}
        <input
          type="radio"
          name="suggestion-tab"
          role="tab"
          className="tab"
          aria-label="লেখক"
          checked={tab === 1}
          onChange={() => setTab(1)}
        />
        <div role="tabpanel" className="tab-content py-4 px-2">
          {suggestions.authors.length > 0 ? (
            suggestions.authors.map((author, index) => (
              <div key={index}>
                <h1>{author.name}</h1>
              </div>
            ))
          ) : (
            <div>
              <p className="text-gray-400">কোন লেখক পাওয়া যায়নি</p>
            </div>
          )}
        </div>

        {/* Tab3: Subjects */}
        <input
          type="radio"
          name="suggestion-tab"
          role="tab"
          className="tab"
          aria-label="বিষয়"
          checked={tab === 2}
          onChange={() => setTab(2)}
        />
        <div role="tabpanel" className="tab-content py-4 px-2">
          {suggestions.subjects.length > 0 ? (
            suggestions.subjects.map((subject, index) => (
              <div key={index}>
                <h1>{subject.name}</h1>
              </div>
            ))
          ) : (
            <div>
              <p className="text-gray-400">কোন বিষয় পাওয়া যায়নি</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestion;
