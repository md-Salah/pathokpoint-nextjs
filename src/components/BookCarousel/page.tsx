import { books } from "@/constants";
import { BookCard } from "@/components";
import Title from "./Title";

const BookCarousel = () => {
  return (
    <div className="mt-12 custom-padding py-6">
      <Title title='Featured Books' />
      <div className="carousel carousel-center rounded-md mt-4 gap-2 w-full">
        {books.map((book, index) => (
          <div key={index} className="carousel-item w-49p sm:w-1/3 lg:w-1/5 xl:w-1/6 2xl:w-1/7">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCarousel;
