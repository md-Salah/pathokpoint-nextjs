"use client";

import { useState } from "react";
import { books } from "@/constants";
import Book from "./Book";
import Author from "./Author";
import Category from "./Category";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

interface Props {
  suggestions: {
    books: typeof books;
    authors: (typeof books)[0]["authors"];
    categories: (typeof books)[0]["categories"];
  };
}

const SearchSuggestion = ({ suggestions }: Props) => {
  const [tab, setTab] = useState(0);

  const NoResultFound = ({ text }: { text: string }) => {
    return (
      <div className="h-20 p-2 bg-gray-100 rounded-b-md">
        <p className="text-gray-400">{text}</p>
      </div>
    );
  };

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
            <NoResultFound text={"কোন বই পাওয়া যায়নি"} />
          )}
        </div>
        {suggestions.books.length > 0 && (
          <Link href={"search/"} className="hover:underline">
            <button className="btn btn-block rounded-none hover:underline mt-1">
              See All <BsArrowRight className="inline" />
            </button>
          </Link>
        )}
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
          <NoResultFound text={"কোন লেখক পাওয়া যায়নি"} />
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
          <NoResultFound text={"কোন ক্যাটাগরি পাওয়া যায়নি"} />
        )}
      </div>
    );
  };

  const TabContent = () => {
    if (tab == 0) return <BookTab />;
    else if (tab == 1) return <AuthorTab />;
    if (tab == 2) return <CategoryTab />;
  };

  const ResultCount = ({ index }: { index: number }) => {
    if (index == 0)
      return (
        <span className="ml-2 text-gray-400">({suggestions.books.length})</span>
      );
    else if (index == 1)
      return (
        <span className="ml-2 text-gray-400">
          ({suggestions.authors.length})
        </span>
      );
    else if (index == 2)
      return (
        <span className="ml-2 text-gray-400">
          ({suggestions.categories.length})
        </span>
      );
  };

  const TabButtons = () => {
    return (
      <div className="tabs tabs-bordered rounded-t-lg mt-3 bg-base-200">
        {["বই", "লেখক", "ক্যাটাগরি"].map((title, index) => (
          <div
            role="tab"
            key={index}
            className={`tab ${tab == index ? "tab-active" : ""}`}
            onClick={() => setTab(index)}
          >
            {title}
            <ResultCount index={index} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div role="tablist" className="bg-base-200 rounded-b-md">
      <TabButtons />

      <div className="w-full max-h-96 overflow-y-scroll rounded-b-md">
        <TabContent />
      </div>
    </div>
  );
};

export default SearchSuggestion;
