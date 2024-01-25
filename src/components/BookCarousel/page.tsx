"use client";
import { books } from "@/constants";
import { ArrowButtons, BookCard } from "@/components";
import Title from "./Title";
import { useRef } from "react";

interface Props {
  title: string;
}

const BookCarousel = ({ title }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-12 custom-margin py-6">
      <Title title={title} />
      <div ref={carouselRef} className="relative">
        <div
          ref={scrollRef}
          className="carousel carousel-end rounded-md mt-4 gap-2 w-full"
        >
          {books.map((book, index) => (
            <div key={index} className="carousel-item w-49p sm:w-52">
              <BookCard book={book} />
            </div>
          ))}
          <ArrowButtons carouselRef={carouselRef} scrollRef={scrollRef} />
        </div>
      </div>
    </div>
  );
};

export default BookCarousel;
