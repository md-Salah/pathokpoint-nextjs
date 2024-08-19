"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

import { banners } from "@/constants";
import { NextArrow, PrevArrow } from "@/micro-components";

const HeroBanner = () => {
  return (
    <div className="relative w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        transitionTime={1000}
        interval={5000}
        renderArrowPrev={(onClickHandler) => {
          return (
            <PrevArrow
              handlePrev={onClickHandler}
              positionClass="left-4 hidden sm:block"
            />
          );
        }}
        renderArrowNext={(onClickHandler) => {
          return (
            <NextArrow
              handleNext={onClickHandler}
              positionClass="right-4 hidden sm:block"
            />
          );
        }}
      >
        {banners.map((banner, index) => (
          <Link
            key={index}
            href="/offers"
            className="cursor-pointer block h-44 sm:h-96"
          >
            <Image
              src={banner.src}
              alt="Banner"
              width={2240}
              height={798}
              quality={100}
              sizes="100vw"
              priority
              className="w-full h-full object-cover rounded sm:rounded-none"
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
