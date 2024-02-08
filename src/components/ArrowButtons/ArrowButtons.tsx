"use client";
import { useEffect, useState } from "react";

interface Props {
  carouselRef: React.MutableRefObject<HTMLDivElement | null>;
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
}

const ArrowButtons = ({ carouselRef, scrollRef }: Props) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const canScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 20);
      setCanScrollRight(
        scrollRef.current.scrollLeft <
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  const next = () => {
    let offset = carouselRef.current?.offsetWidth || 0;
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  const prev = () => {
    let offset = carouselRef.current?.offsetWidth || 0;
    scrollRef.current?.scrollBy({ left: -offset, behavior: "smooth" });
  };

  useEffect(() => {
    canScroll();
    const scrollDiv = scrollRef.current;
    scrollDiv?.addEventListener("scroll", canScroll);
    return () => scrollDiv?.removeEventListener("scroll", canScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <button
        className="btn btn-circle btn-md opacity-50 hover:opacity-95 disabled:cursor-not-allowed"
        onClick={prev}
        disabled={!canScrollLeft}
      >
        ❮
      </button>
      <button
        className="btn btn-circle btn-md opacity-50 hover:opacity-95 disabled:cursor-not-allowed"
        onClick={next}
        disabled={!canScrollRight}
      >
        ❯
      </button>
    </div>
  );
};

export default ArrowButtons;
