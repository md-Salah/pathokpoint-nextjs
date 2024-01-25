import { books } from "@/constants";
import { BookCard } from "@/components";
import Title from "./Title";

interface Props {
  title: string;
}

const FlashSaleCarousel = ({ title }: Props) => {
  return (
    <div className="mt-16 custom-margin p-3 sm:p-6 pt-14 bg-black rounded-md">
      <Title title={title} />
      <div className="carousel carousel-end rounded-md mt-4 gap-2 w-full">
        {books.map((book, index) => (
          <div key={index} className="carousel-item w-49p sm:w-52">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSaleCarousel;
