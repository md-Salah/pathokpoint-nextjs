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
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
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
    scrollRef.current?.addEventListener("scroll", canScroll);

    return () => scrollRef.current?.removeEventListener("scroll", canScroll);
  }, []);

  return (
    <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <button
        className="btn btn-circle btn-md opacity-30 hover:opacity-95 disabled:opacity-95"
        onClick={prev}
        disabled={!canScrollLeft}
      >
        ❮
      </button>
      <button
        className="btn btn-circle btn-md opacity-30 hover:opacity-95 disabled:opacity-95"
        onClick={next}
        disabled={!canScrollRight}
      >
        ❯
      </button>
    </div>
  );
};

export default ArrowButtons;
