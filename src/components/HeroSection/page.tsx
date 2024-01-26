"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

import { banners } from "@/constants";

const HeroSection = () => {
  return (
    <div className="custom-margin mt-10 rounded-md">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        transitionTime={1500}
        interval={5000}
        renderArrowPrev={(onClickHandler, hasPrev, label) => {
          return (
            <div className="absolute top-0 bottom-0 left-5 h-fit my-auto z-10 hidden sm:block">
              <button
                className={`btn btn-circle btn-md opacity-50 hover:opacity-95 ${
                  hasPrev ? "cursor-pointer" : "cursor-not-allowed"
                } `}
                onClick={onClickHandler}
                aria-label={label}
              >
                ❮
              </button>
            </div>
          );
        }}
        renderArrowNext={(onClickHandler, hasNext, label) => {
          return (
            <div className="absolute top-0 bottom-0 right-5 h-fit my-auto z-10 hidden sm:block">
              <button
                className={`btn btn-circle btn-md opacity-50 hover:opacity-95 ${
                  hasNext ? "cursor-pointer" : "cursor-not-allowed"
                } `}
                onClick={onClickHandler}
                aria-label={label}
              >
                ❯
              </button>
            </div>
          );
        }}
      >
        {banners.map((banner, index) => (
          <Link key={index} href="/offers" className="cursor-pointer">
            <div key={index} className="w-full">
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
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
