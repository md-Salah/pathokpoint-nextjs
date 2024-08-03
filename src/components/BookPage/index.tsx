import { BookCard, Carousel, CategoryCard, NotFound } from "@/components";
import BookDetails from "./BookDetails";
import AdditionalInfo from "./AdditionalInfo";
import Variation from "./Variation";
import { Book, Category } from "@/interface";
import { getBooks, getCategories } from "@/utils/api";

const BookPage = async ({ book }: { book: Book | null }) => {
  if (!book)
    return (
      <NotFound>
        দুঃখিত! <br />
        বইটি পাওয়া যায়নি
      </NotFound>
    );

  const author_ids = book.authors.map((author) => author.id);
  const books: Book[] = await getBooks(
    `author__id__in=${author_ids.join(",")}`
  );
  const categories: Category[] = await getCategories("");

  return (
    <div>
      <div className="grid grid-cols-8 layout-container">
        <div className="col-span-8 lg:col-span-6">
          <BookDetails book={book} />
        </div>
        <div className="col-span-8 sm:col-span-5 lg:col-span-8 lg:order-1">
          <AdditionalInfo book={book} />
        </div>
        <div className="layout-mt col-span-8 sm:col-span-3 lg:col-span-2">
          <Variation book={book} />
        </div>
      </div>
      <div className="layout-mt">
        <Carousel
          title="Books by same author"
          href={`/authors/${book.authors[0]?.slug}`}
        >
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

export default BookPage;
