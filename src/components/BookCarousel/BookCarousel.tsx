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
    <div className="custom-mt custom-mx">
      <Title title={title} />
      <div ref={carouselRef} className="relative">
        <div
          ref={scrollRef}
          className="carousel carousel-end rounded-md gap-2 w-full"
        >
          {books.map((book, index) => (
            <div key={index} className="h-fit">
              <BookCard book={book} />
            </div>
          ))}
        </div>
        <ArrowButtons carouselRef={carouselRef} scrollRef={scrollRef} />
      </div>
    </div>
  );
};

export default BookCarousel;
