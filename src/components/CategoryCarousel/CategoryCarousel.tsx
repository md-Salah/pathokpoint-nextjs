"use client";
import { categories } from "@/constants/categories";
import Title from "./Title";
import { ArrowButtons, CategoryCard } from "@/components";
import { useRef } from "react";

interface Props {
  title: string;
}

const CategoryCarousel = ({ title }: Props) => {
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
          {categories.map((category, index) => (
            <div key={index} className="carousel-item w-40">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
        <ArrowButtons carouselRef={carouselRef} scrollRef={scrollRef} />
      </div>
    </div>
  );
};

export default CategoryCarousel;
