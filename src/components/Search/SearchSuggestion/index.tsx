"use client";
import { useState } from "react";
import Link from "next/link";

import Book from "./Book";
import Author from "./Author";
import Category from "./Category";

import {
  Book as BookInterface,
  Category as CategoryInterface,
  Author as AuthorInterface,
} from "@/interface";

interface Props {
  suggestions: {
    books: BookInterface[];
    authors: AuthorInterface[];
    categories: CategoryInterface[];
  };
}

const SearchSuggestion = ({ suggestions }: Props) => {
  const [tab, setTab] = useState(0);

  return (
    <div
      role="tablist"
      className="font-bn min-w-80"
    >
      {/* Tab */}
      <div className="tabs tabs-bordered rounded-t-lg mt-3">
        <div
          role="tab"
          className={`tab ${tab === 0 && "tab-active"}`}
          onClick={() => setTab(0)}
        >
          বই
        </div>
        <div
          role="tab"
          className={`tab ${tab == 1 && "tab-active"}`}
          onClick={() => setTab(1)}
        >
          লেখক
        </div>
        <div
          role="tab"
          className={`tab ${tab == 2 && "tab-active"}`}
          onClick={() => setTab(2)}
        >
          বিষয়
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full max-h-96 min-h-80 overflow-y-scroll rounded-b">
        {tab === 0 && (
          <div>
            {suggestions.books.length > 0 ? (
              suggestions.books.map((book) => (
                <Book key={book.id} book={book} />
              ))
            ) : (
              <NoResult />
            )}
          </div>
        )}
        {tab === 1 && (
          <div>
            {suggestions.authors.length > 0 ? (
              suggestions.authors.map((author) => (
                <Author key={author.id} author={author} />
              ))
            ) : (
              <NoResult />
            )}
          </div>
        )}
        {tab === 2 && (
          <div className="h-full">
            {suggestions.categories.length > 0 ? (
              suggestions.categories.map((category) => (
                <Category key={category.id} category={category} />
              ))
            ) : (
              <NoResult />
            )}
          </div>
        )}
      </div>

      {/* See all */}
      <div className="flex justify-center items-center h-12 border-t">
        <Link
          href={"search/"}
          className="block text-center w-full hover:underline hover:text-primary"
        >
          See all search results
        </Link>
      </div>
    </div>
  );
};

export default SearchSuggestion;

const NoResult = () => <p className="text-center mt-10">No result found</p>;
