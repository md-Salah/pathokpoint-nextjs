import Image from "next/image";

import { books, authors } from "@/constants";
import { isEnglish } from "@/utils";
import { Description } from "@/micro-components";
import { BookCard, Filter, FilterInMobile } from "@/components";

interface Params {
  slug: string;
}

const Author = ({ params }: { params: Params }) => {
  const author = authors.find((author) => author.slug === params.slug);
  const defaultSrc = "/default/author.png";

  if (!author)
    return (
      <div className="layout-container py-10">
        <h1 className="text-center text-3xl">Author not found</h1>
      </div>
    );

  return (
    <div className="layout-container layout-px">
      {/* Banner */}
      <section className="bg-white">
        <figure className="w-full h-24 sm:h-64 relative">
          <Image
            src={"/banner/b (2).png"}
            alt="Banner"
            className="object-cover"
            fill
          />
        </figure>
        <div className="grid grid-cols-1 sm:grid-cols-4 px-8">
          <div className="flex justify-center sm:justify-end sm:pr-5">
            <figure className="relative max-w-24 max-h-24 w-24 h-24 lg:w-48 lg:h-48 lg:max-w-48 lg:max-h-48 -mt-10 lg:-mt-16 rounded-full border">
              <Image
                src={author.image?.src || defaultSrc}
                alt={author.name}
                fill
                className="object-cover object-center rounded-full"
              />
            </figure>
          </div>
          <div className="col-span-3">
            <h1
              className={`mt-4 lg:mt-8 text-center sm:text-left font-semibold lg:font-bold text-sm lg:text-2xl ${
                !isEnglish(author.name) && "font-bn"
              }`}
            >
              {author.name}
            </h1>
            <div className="flex flex-col-reverse sm:flex-col items-center sm:items-start mb-8">
              {author.description && (
                <div className="mt-3 lg:mt-6">
                  <Description text={author.description} char={120} />
                </div>
              )}
              <button className="btn btn-primary btn-outline btn-sm w-24 mt-4 lg:mt-8">
                Follow
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex sm:hidden mt-3 justify-end">
        <FilterInMobile />
      </div>

      <section className="grid grid-cols-5 gap-3 mt-3">
        <aside className="hidden sm:block">
          <Filter />
        </aside>
        <div className="col-span-5 sm:col-span-4 bg-white p-3">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Find books here..."
              className="input input-bordered input-xs sm:input-sm"
            />
            <select className="select select-bordered select-xs sm:select-sm">
              <option>Default</option>
              <option>Bestseller</option>
              <option>Price low to high</option>
              <option>Price high to low</option>
              <option>Discount high to low</option>
              <option>Recently published</option>
              <option>Rating</option>
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
    </div>
  );
};

export default Author;
