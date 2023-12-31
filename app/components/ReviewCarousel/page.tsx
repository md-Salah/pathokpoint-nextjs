"use client";
import { Review } from "@/components";
import { reviews } from "../../constant";

import { Anek_Bangla } from "next/font/google";
const anekBangla = Anek_Bangla({ subsets: ["bengali"] });

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ReviewCarousel = () => {
  return (
    <div className="mt-4 mb-4">
      <h5 className={`py-2 text-2xl ${anekBangla.className}`}>
        Customer Reviews
      </h5>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} style={{
            width: 'auto',
            height: 'auto'
          }}>
            <Review item={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCarousel;
