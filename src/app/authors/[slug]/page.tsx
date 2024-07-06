import Image from "next/image";

import { Category, Publisher } from "@/interface";
import { books, authors, categories, publishers } from "@/constants";
import { isEnglish } from "@/utils";
import { Description } from "@/micro-components";
import { BookCard } from "@/components";
import { FiSearch } from "react-icons/fi";

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
              <button className="btn btn-primary btn-outline btn-sm w-24 mt-4 lg:mt-9">
                Follow
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-5 gap-3 mt-3">
        <aside className="hidden sm:flex flex-col gap-3">
          <CategoryFilter categories={categories} />
          <PublisherFilter publishers={publishers} />
          <ConditionFilter />
          <InStockFilter />
          <div className="bg-white">
            <input type="range" className="range" />
          </div>
        </aside>
        <div className="col-span-5 sm:col-span-4 bg-white p-3">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Find books here..."
              className="input input-bordered input-xs sm:input-sm"
            />
            <select className="select select-bordered select-xs sm:select-sm">
              <option>Sort by</option>
              <option>Popularity</option>
              <option>Price</option>
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

const CategoryFilter = ({ categories }: { categories: Category[] }) => (
  <div className="bg-white">
    <div className="flex justify-between items-center py-3 px-5 border-b">
      <h4 className="font-semibold text-black02 text-base">Category</h4>
      <span className="font-semibold text-xs text-[#1A97D6] btn btn-xs btn-link">
        Reset filter
      </span>
    </div>
    <div className="px-5 pt-3 pb-5">
      <div className="form-control">
        <label className="input input-bordered input-sm flex items-center gap-2 bg-white overflow-hidden rounded-2xl">
          <input type="text" className="input-ghost min-w-0" />
          <FiSearch className="text-primary h-6 w-6" />
        </label>
      </div>
      <div className="mt-3 form-control h-48 overflow-y-scroll">
        {/* Sort checked items first */}
        {categories.map((category) => (
          <label
            key={category.id}
            className="label py-1 pl-0 cursor-pointer justify-start gap-2"
          >
            <input
              type="checkbox"
              className="checkbox checkbox-xs checkbox-primary"
            />
            <span
              className={`label-text ${!isEnglish(category.name) && "font-bn"}`}
            >
              {category.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  </div>
);

const PublisherFilter = ({ publishers }: { publishers: Publisher[] }) => (
  <div className="bg-white">
    <div className="flex justify-between items-center py-3 px-5 border-b">
      <h4 className="font-semibold text-black02 text-base">Publisher</h4>
      <span className="font-semibold text-xs text-[#1A97D6] btn btn-xs btn-link">
        Reset filter
      </span>
    </div>
    <div className="px-5 pt-3 pb-5">
      <div className="form-control">
        <label className="input input-bordered input-sm flex items-center gap-2 bg-white overflow-hidden rounded-2xl">
          <input type="text" className="input-ghost min-w-0" />
          <FiSearch className="text-primary h-6 w-6" />
        </label>
      </div>
      <div className="mt-3 form-control h-44 overflow-y-scroll">
        {/* Sort checked items first */}
        {publishers.map((publisher) => (
          <label
            key={publisher.id}
            className="label py-1 pl-0 cursor-pointer justify-start gap-2"
          >
            <input
              type="checkbox"
              className="checkbox checkbox-xs checkbox-primary"
            />
            <span
              className={`label-text ${
                !isEnglish(publisher.name) && "font-bn"
              }`}
            >
              {publisher.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  </div>
);

const ConditionFilter = () => (
  <div className="bg-white">
    <div className="flex justify-between items-center py-3 px-5 border-b">
      <h4 className="font-semibold text-black02 text-base">Condition</h4>
    </div>
    <div className="px-5 pt-3 pb-5 form-control">
      <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-xs checkbox-primary"
        />
        <span className={`label-text`}>New</span>
      </label>
      <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-xs checkbox-primary"
        />
        <span className={`label-text`}>Old</span>
      </label>
      <div className="ml-4">
        <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
          />
          <span className={`label-text`}>Old like new</span>
        </label>
        <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
          />
          <span className={`label-text`}>Old good enough</span>
        </label>
        <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
          />
          <span className={`label-text`}>Old acceptable</span>
        </label>
      </div>
    </div>
  </div>
);

const InStockFilter = () => (
  <div className="bg-white form-control">
    <div className="flex justify-between items-center py-4 px-5">
      <h4 className="font-semibold text-black02 text-base">In Stock</h4>
      <input type="checkbox" className="toggle toggle-primary" defaultChecked />
    </div>
  </div>
);
