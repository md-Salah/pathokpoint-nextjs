"use client";

import { useState } from "react";
import { books } from "@/constants";
import Book from "./Book";
import Author from "./Author";
import Category from "./Category";
import Link from "next/link";

interface Props {
  suggestions: {
    books: typeof books;
    authors: (typeof books)[0]["authors"];
    categories: (typeof books)[0]["categories"];
  };
}

const SearchSuggestion = ({ suggestions }: Props) => {
  const [tab, setTab] = useState(0);

  const BookTab = () => {
    return (
      <div>
        <div>
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
        <Link href={"search/"} className="hover:underline">
          <h1 className="mt-2 py-1 rounded-md bg-gray-50 text-center mx-auto px-4 hover:bg-gray-200 uppercase text-secondary">
            See all
          </h1>
        </Link>
      </div>
    );
  };

  const AuthorTab = () => {
    return (
      <div>
        {suggestions.authors.length > 0 ? (
          suggestions.authors.map((author, index) => (
            <div key={index}>
              <Author author={author} />
            </div>
          ))
        ) : (
          <div>
            <p className="text-gray-400">কোন লেখক পাওয়া যায়নি</p>
          </div>
        )}
      </div>
    );
  };

  const CategoryTab = () => {
    return (
      <div>
        {suggestions.categories.length > 0 ? (
          suggestions.categories.map((category, index) => (
            <div key={index}>
              <Category category={category} />
            </div>
          ))
        ) : (
          <div>
            <p className="text-gray-400">কোন ক্যাটাগরি পাওয়া যায়নি</p>
          </div>
        )}
      </div>
    );
  };

  const TabContent = () => {
    if (tab == 0) return <BookTab />;
    else if (tab == 1) return <AuthorTab />;
    if (tab == 2) return <CategoryTab />;
  };

  return (
    <div role="tablist" className="pb-2 bg-base-100 rounded-b-md">
      <div className="tabs tabs-lifted rounded-t-lg mt-3 bg-base-200">
        {["বই", "লেখক", "ক্যাটাগরি"].map((title, index) => (
          <a
            role="tab"
            key={index}
            className={`tab ${tab == index ? "tab-active" : ""}`}
            onClick={() => setTab(index)}
          >
            {title}
          </a>
        ))}
      </div>

      {/* Tab Content */}
      <div className="px-2 w-full h-96 overflow-y-scroll">
        <TabContent />
      </div>
    </div>
  );
};

export default SearchSuggestion;
