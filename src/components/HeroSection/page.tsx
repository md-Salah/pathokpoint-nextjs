"use client";
import { banners } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowButtons } from "..";
import DotButtons from "./DotButtons";

const HeroSection = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentCard, setCurrentCard] = useState(0);

  const cardIncrement = (x: number) => {
    setCurrentCard((currentCard) => {
      let newCard = currentCard + x;
      if (newCard < 0) newCard = banners.length - 1;
      else if (newCard > banners.length - 1) newCard = 0;
      return newCard;
    });
  };

  const scrollIntoView = (index: number) => {
    document.getElementById(`item${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const handleDotClick = (index: number) => {
    setCurrentCard(index);
    scrollIntoView(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((currentCard + 1) % banners.length);
      scrollIntoView((currentCard + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentCard]);

  return (
    <div className="custom-margin pt-4">
      <div ref={parentRef} className="relative">
        <div
          ref={scrollRef}
          className="carousel carousel-center rounded-md mt-4 gap-2 w-full"
        >
          {banners.map((banner, index) => (
            <div
              id={`item${index}`}
              key={index}
              className="carousel-item w-full"
            >
              <Link href="/offers">
                <Image
                  src={banner.src}
                  alt="Banner"
                  width={500}
                  height={500}
                  quality={100}
                  sizes="100vw"
                  priority
                  className="w-full rounded-md object-cover"
                />
              </Link>
            </div>
          ))}
          <ArrowButtons
            carouselRef={parentRef}
            scrollRef={scrollRef}
            cardIncrement={cardIncrement}
          />
        </div>
        <DotButtons
          items={banners}
          currentItem={currentCard}
          handleDotClick={handleDotClick}
        />
      </div>
    </div>
  );
};

export default HeroSection;
