import { FilterInMobile, Filter, BookCard } from "@/components";
import { Book } from "@/interface";

const Books = ({ books }: { books: Book[] }) => {
  return (
    <>
      <div className="flex sm:hidden mt-3 justify-end layout-container layout-px">
        <FilterInMobile />
      </div>

      <section className="layout-container grid grid-cols-12 gap-3 mt-3">
        <aside className="hidden sm:block sm:col-span-4 lg:col-span-3 xl:col-span-2">
          <Filter />
        </aside>
        <div className="layout-p sm:p-4 bg-white col-span-12 sm:col-span-8 lg:col-span-9 xl:col-span-10">
          <div className="flex justify-between gap-2.5">
            <input
              type="text"
              placeholder={`Search in ${"xyz"}...`}
              className="input input-bordered input-xs sm:input-sm font-bn min-w-0"
            />
            <select className="select select-bordered select-xs sm:select-sm min-w-0">
              {[
                "Default",
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
          <div className="flex flex-wrap justify-between gap-2.5 my-3">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="text-right my-6">pagination</div>
        </div>
      </section>
    </>
  );
};

export default Books;
