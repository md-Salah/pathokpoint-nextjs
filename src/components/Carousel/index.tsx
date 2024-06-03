"use client";
import { isEnglish } from "@/utils";
import React, { useRef } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Carousel = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode[];
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const smoothScroll = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (container) {
      const startScroll = container.scrollLeft;
      const scrollAmount =
        direction === "left" ? -container.offsetWidth : container.offsetWidth;
      const startTime = performance.now();
      const duration = 500;

      const step = (timestamp: number) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        container.scrollLeft = startScroll + scrollAmount * progress;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  };

  const handlePrev = () => smoothScroll("left");
  const handleNext = () => smoothScroll("right");

  return (
    <div className="layout-container bg-white layout-p layout-mt">
      <Title title={title} />
      <div className="relative block">
        <div ref={carouselRef} className="carousel gap-3 sm:gap-4">
          {children.map((child, index) => {
            return (
              <div key={index} className="carousel-item">
                {child}
              </div>
            );
          })}
        </div>
        <div className="hidden sm:block z-10">
          <PrevArrow handlePrev={handlePrev} />
          <NextArrow handleNext={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

const PrevArrow = ({ handlePrev }: { handlePrev: () => void }) => (
  <button
    onClick={handlePrev}
    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md opacity-60 hover:opacity-95"
  >
    <GrPrevious />
  </button>
);

const NextArrow = ({ handleNext }: { handleNext: () => void }) => (
  <button
    onClick={handleNext}
    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md opacity-60 hover:opacity-95"
  >
    <GrNext />
  </button>
);

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex items-baseline justify-between font-semibold">
      <h2
        className={`text-base sm:text-xl text-black02 mb-4 sm:mb-5 ${
          isEnglish(title) ? "" : "font-bn"
        }`}
      >
        {title}
      </h2>
      <div className="text-primary text-sm sm:text-base cursor-pointer half-underline">
        See more
      </div>
    </div>
  );
};
