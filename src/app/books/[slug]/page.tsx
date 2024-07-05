import {
  AdditionalInfo,
  BookCard,
  BookDetails,
  Carousel,
  CategoryCard,
  Variation,
} from "@/components";
import { books, categories } from "@/constants";

interface Params {
  slug: string;
}

const Book = ({ params }: { params: Params }) => {
  const getBookBySlug = (slug: string) => {
    return books.find((book) => book.slug === slug);
  };
  const book = getBookBySlug(params.slug);

  return (
    <div>
      {!book && <NotFound />}

      {book && (
        <div className="grid grid-cols-8 layout-container">
          <div className="col-span-8 lg:col-span-6">
            <BookDetails book={book} />
          </div>
          <div className="col-span-8 sm:col-span-5 lg:col-span-8 lg:order-1">
            <AdditionalInfo book={book} />
          </div>
          <div className="col-span-8 sm:col-span-3 lg:col-span-2">
            <Variation books={books.slice(0, 5)} />
          </div>
        </div>
      )}
      <div className="mt-8">
        <Carousel title="Related Books">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </Carousel>
      </div>
      <Carousel title="Related Categories">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel>
    </div>
  );
};

export default Book;

const NotFound = () => (
  <div className="text-3xl text-center layout-mt font-bn py-20">
    দুঃখিত! <br />
    কোন বই পাওয়া যায়নি
  </div>
);
