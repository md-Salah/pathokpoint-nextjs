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
    <div className="mt-16 custom-margin p-1 sm:p-6 pt-14 bg-[#7d7064] rounded-md">
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
        </div>
        <ArrowButtons carouselRef={carouselRef} scrollRef={scrollRef} />
      </div>
    </div>
  );
};

export default FlashSaleCarousel;
