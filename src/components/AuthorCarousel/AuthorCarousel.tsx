"use client";
import { authors } from "@/constants/books";
import Title from "./Title";
import { ArrowButtons, AuthorCard } from "@/components";
import { useRef } from "react";

interface Props {
  title: string;
}

const AuthorCarousel = ({ title }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="custom-mx custom-mt">
      <Title title={title} />
      <div ref={carouselRef} className="relative">
        <div
          ref={scrollRef}
          className="carousel carousel-end rounded-md gap-2 w-full"
        >
          {authors.map((author, index) => (
            <div key={index} className="carousel-item w-40">
              <AuthorCard author={author} />
            </div>
          ))}
        </div>
        <ArrowButtons carouselRef={carouselRef} scrollRef={scrollRef} />
      </div>
    </div>
  );
};

export default AuthorCarousel;
