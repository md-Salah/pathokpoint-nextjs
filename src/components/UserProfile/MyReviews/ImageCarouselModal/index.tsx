"use client";
import { useState } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s", // Add paths to your images here
  "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ekxu3OzvIQLn2K9bnYPHvNlHiVnR216eg&s",
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ImageCarouselModal = ({ isOpen, onClose }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-box rounded-xl p-0">
      <div className="relative flex justify-center items-center">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="carousel w-full">
          <div className="carousel-item w-full">
            <img
              src={images[currentIndex]}
              className="w-full h-auto relative"
              alt="Carousel Image"
            />
          </div>
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button className="btn btn-circle" onClick={prevSlide}>
            ❮
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button className="btn btn-circle" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselModal;
