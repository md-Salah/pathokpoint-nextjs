"use client";
import { banners } from "@/constants";
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

  return (
    <div className="custom-margin mt-5">
      <div className="carousel w-full">
        <div id="banner" className="carousel-item relative w-full">
          <img src={banners[current].src} className="w-full rounded-md" />
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
        </div>
      </div>
      <div className="flex justify-center gap-1">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`size-2 md:size-4 rounded-full cursor-pointer ${
              index == current ? "bg-gray-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
