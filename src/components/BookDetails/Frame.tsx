'use client';
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";

const Frame = ({ images }: { images: string[] }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="py-8 sm:w-72 block rounded-md">
      <Carousel
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        selectedItem={selected}
        className="rounded-l-md"
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-64 h-80 rounded-md mx-auto">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain rounded-md"
              placeholder="blur"
              blurDataURL="/default/book.svg"
            />
          </div>
        ))}
      </Carousel>
      {images.length > 1 && (
        <CustomThumbs
          images={images}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};

export default Frame;

const CustomThumbs = ({
  images,
  selected,
  setSelected,
}: {
  images: string[];
  selected: number;
  setSelected: (index: number) => void;
}) => {
  return (
    <div className="carousel carousel-center">
      <ul className="h-14 flex justify-center items-center my-2 mx-auto">
        {images.map((src, index) => (
          <li
            key={index}
            className={`relative p-2 border-l border-y border-primary cursor-pointer ${
              index === images.length - 1 ? "border-r rounded-r-md" : ""
            }
            ${selected === index ? "opacity-40" : ""}
            ${index === 0 ? "rounded-l-md" : ""}
            `}
            onClick={() => setSelected(index)}
          >
            <div className="relative w-10 h-10">
              <Image
                src={src}
                alt="Book Image"
                fill
                className="object-cover rounded-md"
                placeholder="blur"
                blurDataURL="/default/book.svg"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
