import {
  AdditionalInfo,
  BookCarousel,
  BookDetails,
  CategoryCarousel,
} from "@/components";
import { books } from "@/constants";
import { Breadcrumbs } from "@/micro-components";

interface Params {
  slug: string;
}

const Book = ({ params }: { params: Params }) => {
  const book = books.find((book) => book.slug === params.slug);

  return (
    <div>
      {book ? (
        <>
          <Breadcrumbs pages={["Home", "Books", book.name]} />
          <div className="custom-mx">
            <BookDetails book={book} />
            <AdditionalInfo book={book} />
          </div>
          <BookCarousel title={"Related Books"} />
          <CategoryCarousel title={"Related Categories"} />
        </>
      ) : (
        <div className="text-3xl text-center custom-mt">
          দুঃখিত! <br />
          কোন বই পাওয়া যায়নি
        </div>
      )}
      {/* AdditionalInfo */}

      {/* VariationCarousel */}
      {/* RelatedBooks */}
      {/* RelatedCategories */}
      {/* Reviews */}
    </div>
  );
};

export default Book;
