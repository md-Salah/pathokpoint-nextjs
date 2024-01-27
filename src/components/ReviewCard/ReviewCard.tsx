"use client";
import Image from "next/image";
import { useState } from "react";
import Rating from "./Rating";

const ReviewCard = ({ review }: any) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="card card-compact h-96 w-11/12 mx-auto bg-base-200 shadow-lg">
      <div className="card-body">
        {/* Head */}
        <div className="card-title">
          <div className="avatar">
            <div className="w-14 rounded-full relative">
              {review.images.length >= 1 && (
                <Image
                  alt={review.name}
                  fill
                  src={review.images[0]}
                  className="rounded-full object-cover object-bottom"
                />
              )}
            </div>
          </div>
          <div className="flex-1 text-left ml-2">
            <h1>{review.name}</h1>
            <p className="text-xs text-gray-400 mt-1">
              <span>{review.date_created}</span>
              <span className="ml-2">
                <Rating rating={review.rating} />
              </span>
            </p>
          </div>
        </div>

        {/* Review */}
        <p className="text-justify">
          {showFullText ? review.review : review.review.slice(0, 85) + "..."}
          <span
            className="font-semibold hover:underline capitalize cursor-pointer ml-2"
            onClick={toggleFullText}
          >
            {showFullText ? "show less" : "read more"}
          </span>
        </p>
      </div>

      {/* Image */}
      <figure className="h-64 relative overflow-clip">
        {review.images.length >= 1 && (
          <Image
            src={review.images[0]}
            alt="Customer Review"
            fill
            sizes="33vw"
            className="w-full rounded-md object-cover object-bottom"
            placeholder="blur"
            blurDataURL={"logo.png"}
          />
        )}
        {/* is this conditional rendering ok? I tried placeholder='blur' but failed to set a default image */}
      </figure>
    </div>
  );
};

export default ReviewCard;
