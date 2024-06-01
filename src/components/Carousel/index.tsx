"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Carousel = ({ title, children }: { title: string; children: any }) => {
  const slider = React.useRef<Slider>(null);
  const isEnglish = /^[A-Za-z0-9 ]*$/.test(title);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    variableWidth: true,
    arrows: false,
  };
  return (
    <div className="container bg-white p-10 pt-7 mt-8">
      <div className=" relative">
        <div className="flex items-baseline justify-between font-semibold">
          <h2 className={`text-xl text-black02 mb-5 ${isEnglish ? '' : 'font-bn'}`}>{title}</h2>
          <div className="text-primary text-base cursor-pointer half-underline">
            See more
          </div>
        </div>
        <Slider ref={slider} {...settings}>
          {children}
        </Slider>
        <div className="hidden sm:block">
          <PrevArrow slider={slider} />
          <NextArrow slider={slider} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

const PrevArrow = ({ slider }: { slider: React.RefObject<Slider> }) => (
  <button
    onClick={() => slider?.current?.slickPrev()}
    className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 opacity-60 hover:opacity-95"
  >
    <GrPrevious />
  </button>
);

const NextArrow = ({ slider }: { slider: React.RefObject<Slider> }) => (
  <button
    onClick={() => slider?.current?.slickNext()}
    className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 opacity-60 hover:opacity-95"
  >
    <GrNext />
  </button>
);
