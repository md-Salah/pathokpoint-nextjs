"use client";
import Link from 'next/link';
import React, { useRef } from 'react';

import { NextArrow, PrevArrow } from '@/micro-components';
import { isEnglish } from '@/utils';

const Carousel = ({
  title,
  href,
  isLoading = false,
  children,
}: {
  title?: string | null;
  href?: string;
  isLoading?: boolean;
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
      const duration = Math.min(500, Math.abs(scrollAmount) * 0.5);

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
    <div
      className={`min-w-0 ${
        title ? "layout-container bg-white layout-p layout-mt" : "container"
      }`}
    >
      {title && <Title title={title} href={href} />}
      {isLoading ? (
        <div className="skeleton h-44 sm:h-52 md:h-64"></div>
      ) : (
        <div className="block relative">
          <div ref={carouselRef} className="carousel gap-3 sm:gap-4">
            {children ? (
              children.map((child, index) => {
                return (
                  <div key={index} className="carousel-item">
                    {child}
                  </div>
                );
              })
            ) : (
              <div className="h-44 sm:h-52 md:h-64 w-full flex items-center justify-center border">
                <h4 className="text-center text-black04">Couldn&apos;t load data</h4>
              </div>
            )}
          </div>
          <div className="hidden sm:block">
            <PrevArrow handlePrev={handlePrev} positionClass="-left-4" />
            <NextArrow handleNext={handleNext} positionClass="-right-4" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;

const Title = ({ title, href }: { title: string; href?: string }) => {
  return (
    <div className="flex items-baseline justify-between font-semibold">
      <h2
        className={`text-base sm:text-xl text-black02 mb-4 sm:mb-5 ${
          !isEnglish(title) && "font-bn"
        }`}
      >
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="text-primary text-sm sm:text-base cursor-pointer half-underline"
        >
          See more
        </Link>
      )}
    </div>
  );
};
