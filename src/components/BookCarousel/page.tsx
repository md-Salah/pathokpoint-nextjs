import { books } from "@/constants";
import { BookCard } from "@/components";

const BookCarousel = () => {
  return (
    <div className="mt-12 custom-padding bg-base-200 py-6">
      <h1 className="text-3xl font-semibold">Book Carousel</h1>
      <div className="carousel rounded-md mt-4 gap-2 w-full">
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
