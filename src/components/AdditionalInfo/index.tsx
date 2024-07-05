"use client";
import { useState } from "react";

import { Book as BookInterface } from "@/interface";
import BookInfo from "./BookInfo";
import AuthorInfo from "./AuthorInfo";
import Reviews from "./Reviews";

interface Props {
  book: BookInterface;
}

const AdditionalInfo = ({ book }: Props) => {
  const [tab, setTab] = useState<string>("Summary");

  return (
    <div className="layout-mt bg-white sm:px-7 py-7">
      <div className="layout-px">
        <div className="tabs justify-start gap-3">
          <Tab title={"Summary"} tab={tab} setTab={setTab} />
          <Tab title={"Author"} tab={tab} setTab={setTab} />
          <Tab title={"Reviews"} tab={tab} setTab={setTab} />
        </div>
        <div className="rounded-b-md">
          {tab === "Summary" && <BookInfo book={book} setTab={setTab} />}
          {tab === "Author" && (
            <div>
              {book.authors.map((author, index) => (
                <div
                  key={author.id}
                  className={`${
                    index !== book.authors.length - 1 && "border-b pb-10"
                  }`}
                >
                  <AuthorInfo author={author} />
                </div>
              ))}
            </div>
          )}
          {tab === "Reviews" && <Reviews />}
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;

const Tab = ({
  title,
  tab,
  setTab,
}: {
  title: string;
  tab: string;
  setTab: (val: string) => void;
}) => (
  <div
    role="tab"
    className={`tab text-sm w-24 lg:w-32 h-8 rounded font-semibold ${
      tab === title
        ? "tab-active bg-primary text-white shadow-md"
        : "bg-black07"
    }`}
    onClick={() => setTab(title)}
  >
    {title}
  </div>
);
