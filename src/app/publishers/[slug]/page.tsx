import { books, publishers } from "@/constants";
import { BookCard, Filter, FilterInMobile, Profile } from "@/components";

interface Params {
  slug: string;
}

const Publisher = ({ params }: { params: Params }) => {
  const publisher = publishers.find(
    (publisher) => publisher.slug === params.slug
  );
  const defaultSrc = "/default/publisher.png";

  if (!publisher)
    return (
      <div className="layout-container py-10">
        <h1 className="text-center text-3xl">Publisher not found</h1>
      </div>
    );

  return (
    <div className="layout-container layout-px">
      <Profile
        name={publisher.name}
        dp={publisher.image?.src || defaultSrc}
        cover="/banner/b (2).png"
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
              placeholder={`Search in ${publisher.name}...`}
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

export default Publisher;
