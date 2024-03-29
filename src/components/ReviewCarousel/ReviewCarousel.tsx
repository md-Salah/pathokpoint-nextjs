"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { reviews } from "@/constants";
import { ReviewCard } from "@/components";
import { useEffect, useState } from "react";

const ReviewCarousel = () => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100);

  const resizeSlide = () => {
    if (window.innerWidth >= 1024) {
      setCenterSlidePercentage(32);
    } else {
      setCenterSlidePercentage(100);
    }
  };

  useEffect(() => {
    resizeSlide();
    window.addEventListener("resize", resizeSlide);

    return () => window.removeEventListener("resize", () => {});
  }, []);

  return (
    <div className="custom-px custom-mt pt-7 shadow-inner">
      <h1 className="title title-mb flex-1 text-center">Customer Reviews</h1>
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        showStatus={false}
        showThumbs={false}
        transitionTime={1000}
        interval={3000}
        emulateTouch={false}
        centerMode={true}
        centerSlidePercentage={centerSlidePercentage}
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
        className="w-80 lg:w-[1024px] mx-auto"
      >
        {reviews.map((review, index) => (
          <div key={index} className="w-full">
            <ReviewCard review={review} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
