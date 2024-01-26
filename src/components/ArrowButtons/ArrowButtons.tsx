"use client";
import { useEffect, useState } from "react";

interface Props {
  carouselRef: React.MutableRefObject<HTMLDivElement | null>;
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
  cardIncrement: (x: number) => void | undefined;
}

const ArrowButtons = ({
  carouselRef,
  scrollRef,
  cardIncrement = (x) => {},
}: Props) => {
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
    if (cardIncrement) cardIncrement(1);
  };

  const prev = () => {
    let offset = carouselRef.current?.offsetWidth || 0;
    scrollRef.current?.scrollBy({ left: -offset, behavior: "smooth" });
    if (cardIncrement) cardIncrement(-1);
  };

  // How can I make this autoplay specially for HeroSection?

  useEffect(() => {
    canScroll();
    scrollRef.current?.addEventListener("scroll", canScroll);

    return () => scrollRef.current?.removeEventListener("scroll", canScroll);
  }, []);

  return (
    <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <button
        className="btn btn-circle btn-md opacity-50 hover:opacity-90 disabled:cursor-not-allowed"
        onClick={prev}
        disabled={!canScrollLeft}
      >
        ❮
      </button>
      <button
        className="btn btn-circle btn-md opacity-50 hover:opacity-90 disabled:cursor-not-allowed"
        onClick={next}
        disabled={!canScrollRight}
      >
        ❯
      </button>
      {/* hover:opacity-90 disabled:cursor-not-allowed doesn't work */}
    </div>
  );
};

export default ArrowButtons;
