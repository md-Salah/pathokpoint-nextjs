import { BookDetails } from "@/components";
import { books } from "@/constants";

interface Params {
  slug: string;
}

const Book = ({ params }: { params: Params }) => {
  const book = books.find((book) => book.slug === params.slug);

  return (
    <div className="custom-mx">
      {book ? (
        <BookDetails book={book} />
      ) : (
        <div className="text-3xl text-center custom-mt">
          দুঃখিত! <br />
          কোন বই পাওয়া যায়নি
        </div>
      )}

      {/* VariationCarousel */}
      {/* AdditionalInfo */}
      {/* RelatedBooks */}
      {/* RelatedCategories */}
      {/* Reviews */}
    </div>
  );
};

export default Book;
