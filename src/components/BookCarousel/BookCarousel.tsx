"use client";
import { books } from "@/constants";
import { ArrowButtons, BookCard } from "@/components";
import { useRef } from "react";
import { CarouselTitle, MoreButton } from "@/micro-components";

interface Props {
  title: string;
}

const BookCarousel = ({ title }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="custom-mt custom-mx">
      <div className="flex items-center title-mb">
        <CarouselTitle title={title} />
        <MoreButton href={"books/"} />
      </div>
      <div ref={carouselRef} className="relative">
        <div
          ref={scrollRef}
          className="carousel carousel-end rounded-md gap-2 w-full"
        >
          {books.map((book, index) => (
            <div key={index} className="carousel-item w-book">
              <BookCard book={book} />
            </div>
          ))}
        </div>
        {/* <ArrowButtons carouselRef={carouselRef} scrollRef={scrollRef} /> */}
      </div>
    </div>
  );
};

export default BookCarousel;
