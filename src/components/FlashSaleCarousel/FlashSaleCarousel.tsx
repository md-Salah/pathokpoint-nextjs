"use client";
import { books } from "@/constants";
import { ArrowButtons, BookCard } from "@/components";
import Title from "./Title";
import { useRef } from "react";

interface Props {
  title: string;
}

const FlashSaleCarousel = ({ title }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="custom-px custom-mt pt-14 pb-3 md:pb-5 lg:pb-12 bg-gradient glass">
      <Title title={title} />
      <div ref={carouselRef} className="relative">
        <div
          ref={scrollRef}
          className="carousel carousel-end rounded-md mt-4 gap-2 w-full"
        >
          {books.map((book, index) => (
            <div key={index} className="carousel-item w-book">
              <BookCard book={book} />
            </div>
          ))}
        </div>
        <ArrowButtons carouselRef={carouselRef} scrollRef={scrollRef} />
      </div>
    </div>
  );
};

export default FlashSaleCarousel;
