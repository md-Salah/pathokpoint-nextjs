import { books, authors } from "@/constants";
import { BookCard, Filter, FilterInMobile, Profile } from "@/components";

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
      <Profile
        name={author.name}
        description={author.description}
        dp={author.image?.src || defaultSrc}
        cover="/banner/b (2).png"
        handleFollow={() => {}}
      />

      <div className="flex sm:hidden mt-3 justify-end">
        <FilterInMobile />
      </div>

      <section className="grid grid-cols-12 gap-3 mt-3">
        <aside className="hidden sm:block sm:col-span-4 lg:col-span-3 xl:col-span-2">
          <Filter />
        </aside>
        <div className="bg-white p-3 col-span-12 sm:col-span-8 lg:col-span-9 xl:col-span-10">
          <div className="flex justify-between gap-2.5">
            <input
              type="text"
              placeholder={`Search in ${author.name}...`}
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
    </div>
  );
};

export default Author;
