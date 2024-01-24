import { books } from "@/constants";
import { BookCard } from "@/components";
import Title from "./Title";

const BookCarousel = () => {
  return (
    <div className="mt-12 custom-padding py-6">
      <Title title='Featured Books' />
      <div className="carousel carousel-end rounded-md mt-4 gap-2 w-full">
        {books.map((book, index) => (
          <div key={index} className="carousel-item">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCarousel;
