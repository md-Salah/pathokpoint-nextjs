"use client";

import { FilterInMobile, Filter, BookCard, Pagination } from "@/components";
import { Book } from "@/interface";
import { useState } from "react";

const Books = ({ books }: { books: Book[] }) => {
  const [page, setPage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <div className="flex sm:hidden mt-3 justify-end layout-container layout-px">
        <FilterInMobile />
      </div>

      <section className="layout-container flex gap-3 mt-3">
        <aside className="hidden sm:flex flex-1 min-w-[190px]">
          <Filter />
        </aside>
        <div className="layout-p sm:p-4 bg-white w-full sm:w-fit">
          <div className="flex justify-between gap-2.5">
            <input
              type="text"
              placeholder={`Search in ${"xyz"}...`}
              className="input input-bordered input-sm font-bn max-w-40 md:max-w-60"
            />
            <select className="select select-bordered select-sm w-32 text-black04">
              {[
                "Sort by",
                "Bestseller",
                "Price low to high",
                "Price high to low",
                "Discount high to low",
                "Recently published",
                "Rating",
              ].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 my-3 w-full sm:w-fit">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          {books.length === 0 && (
            <div className="py-20 text-center text-black04">No books found</div>
          )}
          <div className="text-right my-6">
            <Pagination
              currentPage={page}
              totalPages={20}
              handleChangeCurrentPage={handlePageChange}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Books;
