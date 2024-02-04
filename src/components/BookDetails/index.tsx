"use client";
import { Book } from "@/interface";
import { books } from "@/constants";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useState } from "react";
import {
  ConditionBadge,
  ConditionTable,
  CopyToClipboard,
} from "@/micro-components";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

interface Props {
  book: (typeof books)[0];
}

const BookDetails = ({ book }: Props) => {
  const copyText = `${book.name} (${book.condition}) by ${book.authors[0].name}, ${book.sell_price} Tk`;

  const InfoCard = () => {
    return (
      <div className="card-body">
        {/* Title */}
        <div className="flex items-center gap-5">
          <h2 className="card-title">{book.name}</h2>
          <CopyToClipboard text={copyText} />
        </div>
        {book.short_description && <p>{book.short_description}</p>}

        {/* Author, Subject, Publisher & Conditon */}
        <div className="mt-2">
          {book.authors.length > 0 && (
            <div>
              <p className="w-20 inline-block">লেখক:</p>
              <Link href={"#"} className="hover:underline">
                {book.authors[0].name}
              </Link>
            </div>
          )}
          {book.publisher && (
            <div>
              <p className="w-20 inline-block">প্রকাশনী:</p>
              <Link href={"#"} className="hover:underline">
                {book.publisher.name}
              </Link>
            </div>
          )}
          {book.categories.length > 0 && (
            <div>
              <p className="w-20 inline-block">বিষয়:</p>
              <Link href={"#"} className="hover:underline">
                {book.categories[0].name}
              </Link>
            </div>
          )}
          {book.condition && <Condition condition={book.condition} />}
        </div>

        {/* Price & Discount */}
        <div className="mt-2">
          {book.sell_price > 0 && book.regular_price > book.sell_price ? (
            <div className="flex gap-4 items-baseline">
              <span className="text-3xl text-primary font-bold">
                {book.sell_price} ৳
              </span>
              <span className="text-secondary-content line-through">
                {book.regular_price} ৳
              </span>
              <span className="text-secondary-content">{`(${
                100 - Math.round((book.sell_price / book.regular_price) * 100)
              }% off)`}</span>
            </div>
          ) : (
            <span className="text-3xl text-primary font-bold">
              {book.regular_price} ৳
            </span>
          )}
        </div>

        {/* Stock */}
        <div>
          {book.quantity > 0 ? (
            <span className="text-success">{`${book.quantity} in stock`}</span>
          ) : (
            <span className="text-error">Out of Stock</span>
          )}
        </div>

        {/*  Buttons */}
        <div className="card-actions mt-2">
          {book.quantity > 0 ? (
            <button className="btn btn-primary w-48">Add to Cart</button>
          ) : (
            <button className="btn btn-accent w-48">
              Get email when available
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="custom-mt">
      <div className="card shadow-xl flex flex-col md:flex-row">
        <div className="mx-auto w-11/12 md:w-72">
          <Frame images={book.images} />
        </div>
        <div className="flex-1">
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

const Frame = ({ images }: { images: string[] }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="py-8 bg-orange-50">
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
              alt="Book Image"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain rounded-md"
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
    <div className="carousel carousel-end bg-orange-50">
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
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Condition = ({ condition }: { condition: string }) => {
  const [showConditionTable, setShowConditionTable] = useState(false);

  const toggleConditonTable = () => {
    setShowConditionTable((prev) => !prev);
  };
  return (
    <>
      <div>
        <p className="w-20 inline-block">কন্ডিশন:</p>
        <ConditionBadge condition={condition} />
        <FaInfoCircle
          className="text-secondary-content inline-block ml-2 cursor-pointer"
          onClick={toggleConditonTable}
        />
      </div>
      <div className={`my-2 w-full overflow-x-scroll ${!showConditionTable && "hidden"}`}>
        <ConditionTable />
      </div>
    </>
  );
};

export default BookDetails;
