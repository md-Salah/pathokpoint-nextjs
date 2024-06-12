"use client";
import { books } from "@/constants";
import Image from "next/image";
import { useState } from "react";

interface Props {
  book: (typeof books)[0];
}

const AdditionalInfo = ({ book }: Props) => {
  const [tab, setTab] = useState(0);

  const BookInfo = () => {
    return (
      <div>
        {book.description ? (
          <p className="text-justify mt-2">{book.description}</p>
        ) : (
          <p className="text-justify mt-2 text-secondary-content">
            No description available
          </p>
        )}
        <table className="mt-8 table lg:w-1/2">
          <tbody>
            {book.edition && (
              <tr>
                <td className="font-semibold">Edition</td>
                <td>{book.edition}</td>
              </tr>
            )}
            {book.cover && (
              <tr>
                <td className="font-semibold">Cover</td>
                <td>{book.cover}</td>
              </tr>
            )}
            {book.translators?.length && (
              <tr>
                <td className="font-semibold">Translator</td>
                <td>
                  {book.translators.map((translator, index) => (
                    <span key={index} className="">
                      {index > 0 && ", "}
                      <span className="hover:underline hover:cursor-pointer text-info">
                        {translator.name}
                      </span>
                    </span>
                  ))}
                </td>
              </tr>
            )}
            {book.language && (
              <tr>
                <td className="font-semibold">Language</td>
                <td>{book.language}</td>
              </tr>
            )}
            {book.isbn && (
              <tr>
                <td className="font-semibold">ISBN</td>
                <td>{book.isbn}</td>
              </tr>
            )}
            {book.page && (
              <tr>
                <td className="font-semibold">Number of Pages</td>
                <td>{book.page}</td>
              </tr>
            )}
            {book.tags?.length && (
              <tr>
                <td className="font-semibold">Search Tags</td>
                <td>
                  {book.tags.map((tag, index) => (
                    <span key={index} className="">
                      {index > 0 && ", "}
                      <span className="hover:underline hover:cursor-pointer text-info">
                        {tag.name}
                      </span>
                    </span>
                  ))}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  const AuthorInfo = () => {
    return (
      <div className="">
        {book.authors.map((author, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row gap-5 sm:gap-10 pb-6 mt-4 ${
              index != book.authors.length - 1 && "border-b"
            }`}
          >
            <div className="flex sm:flex-col">
              <Image
                src={author.src}
                alt={author.name[0]}
                width={100}
                height={100}
                className="mask mask-circle"
                placeholder="blur"
                blurDataURL="/default/author.svg"
              />
              <div className="ml-5 sm:ml-0">
                <p className="font-semibold sm:hidden">{author.name}</p>
                <p className="text-center mt-1 sm:mt-2 text-secondary-content">
                  120 followers
                </p>
                <button className="btn btn-neutral btn-sm w-full mt-1">
                  Follow
                </button>
              </div>
            </div>
            <div>
              <p className="font-semibold hidden sm:block">{author.name}</p>
              {author.description && (
                <p className="text-justify mt-2">{author.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const TabButtons = () => {
    return (
      <div className="tabs rounded-t-lg border-b w-full justify-start">
        {["বই সংক্ষেপ", "লেখক"].map((title, index) => (
          <div
            role="tab"
            key={index}
            className={`tab text-lg w-36 ${
              tab == index
                ? "tab-active bg-primary text-white rounded-t-md"
                : ""
            }`}
            onClick={() => setTab(index)}
          >
            {title}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="card-mt">
      <div className="card card-body shadow-lg bg-base-200">
        <TabButtons />
        <div className="rounded-b-md">
          {tab == 0 && <BookInfo />}
          {tab == 1 && <AuthorInfo />}
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;