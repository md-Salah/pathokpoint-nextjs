"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Rating from "./Rating";

const ReviewCard = ({ review }: any) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  useEffect(() => {
    if (review.images.length == 0) setShowFullText(true);
  }, []);

  const AvatarPlaceholder = ({ letter }: { letter: string }) => (
    <div className="avatar placeholder w-full h-full">
      <div className="bg-neutral text-neutral-content rounded-full w-24">
        <span className="text-3xl">{letter}</span>
      </div>
    </div>
  );

  const ReviewText = ({ text }: { text: string }) => {
    if (text.length > 75) {
      return (
        <p className="text-justify">
          {showFullText ? review.review : review.review.slice(0, 75) + "..."}
          <span
            className="font-semibold hover:underline capitalize cursor-pointer ml-2"
            onClick={toggleFullText}
          >
            {showFullText ? "show less" : "read more"}
          </span>
        </p>
      );
    } else {
      return <p className="text-justify">{review.review}</p>;
    }
  };

  const NameAvatar = ({
    name,
    src,
    rating,
    date_created,
  }: {
    name: string;
    src: string;
    rating: number;
    date_created: string;
  }) => (
    <div className="card-title">
      <div className="avatar">
        <div className="w-14 rounded-full relative">
          {src ? (
            <Image
              alt={name}
              fill
              sizes="10vw"
              src={src}
              className="rounded-full object-cover object-bottom"
            />
          ) : (
            <AvatarPlaceholder letter={name[0]} />
          )}
        </div>
      </div>
      <div className="flex-1 text-left ml-2">
        <h1>{name}</h1>
        <p className="text-xs text-secondary-content mt-1">
          <span className="mr-2">{date_created}</span>
          <Rating rating={rating} />
        </p>
      </div>
    </div>
  );

  const ReviewImages = ({ images }: { images: string[] }) => {
    if (images.length == 0) return null;
    return (
      <figure className="h-64 relative overflow-clip">
        <Image
          src={review.images[0]}
          alt="Customer Review"
          sizes="(max-width: 640px) 100vw, 33vw"
          fill
          className="w-full object-cover object-bottom"
        />
      </figure>
    );
  };

  return (
    <div className="card card-compact h-96 w-80 mx-auto bg-base-200 shadow-lg rounded-md">
      <div className="card-body">
        <NameAvatar
          name={review.name}
          src={review.images[0]}
          rating={review.rating}
          date_created={review.date_created}
        />

        <ReviewText text={review.review} />
      </div>

      <ReviewImages images={review.images} />
    </div>
  );
};

export default ReviewCard;
