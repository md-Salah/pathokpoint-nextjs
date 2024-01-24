"use client";
import { banners } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((value) => {
      if (value >= banners.length - 1) {
        return 0;
      } else {
        return value + 1;
      }
    });
  };

  const prev = () => {
    setCurrent((value) => {
      if (value <= 0) {
        return banners.length - 1;
      } else {
        return value - 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  const ArrowButtons = () => (
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
      <a
        className="btn btn-circle btn-xs md:btn-md opacity-30 hover:opacity-95"
        onClick={prev}
      >
        ❮
      </a>
      <a
        className="btn btn-circle btn-xs md:btn-md opacity-30 hover:opacity-95"
        onClick={next}
      >
        ❯
      </a>
    </div>
  );

  const DotButtons = () => (
    <div className="flex justify-center gap-1 mt-1">
      {banners.map((_, index) => (
        <div
          key={index}
          className={`size-2 md:size-3 rounded-full cursor-pointer ${
            index == current ? "bg-gray-600" : "bg-gray-400"
          }`}
          onClick={() => setCurrent(index)}
        ></div>
      ))}
    </div>
  );

  return (
    <div className="custom-margin mt-5">
      <div className="carousel w-full">
        <div id="banner" className="carousel-item relative w-full">
          <Image
            src={banners[current].src}
            alt="Banner"
            width={500}
            height={500}
            quality={100}
            sizes="100vw"
            priority
            className="w-full rounded-md object-cover"
          />
          <ArrowButtons />
        </div>
      </div>
      <DotButtons />
    </div>
  );
};

export default HeroSection;
