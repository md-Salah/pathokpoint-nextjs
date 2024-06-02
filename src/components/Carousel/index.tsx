"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { lazy } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Carousel = ({ title, children }: { title: string; children: any }) => {
  const slider = React.useRef<Slider>(null);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    variableWidth: true,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 2,
    slidesToScroll: 4,
  };
  return (
    <div className="layout-container bg-white layout-p layout-mt">
      <Title title={title} />
      <div className="relative block">
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

const Title = ({ title }: { title: string }) => {
  const isEnglish = /^[A-Za-z0-9 ]*$/.test(title);

  return (
    <div className="flex items-baseline justify-between font-semibold">
      <h2
        className={`text-base sm:text-xl text-black02 mb-4 sm:mb-5 ${
          isEnglish ? "" : "font-bn"
        }`}
      >
        {title}
      </h2>
      <div className="text-primary text-sm sm:text-base cursor-pointer half-underline">
        See more
      </div>
    </div>
  );
};
