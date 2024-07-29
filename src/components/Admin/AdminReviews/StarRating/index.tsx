"use client";
import { useState } from "react";
import { RiStarFill } from "react-icons/ri";

type Props = {
  rating: number;
  ratingType: string;
  handleRatingChange: (index: number, type: string) => void;
};

const StarRating = ({ rating, handleRatingChange, ratingType }: Props) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`${
              index <= (hover || rating) ? "text-primary" : "text-gray-300"
            }`}
            onClick={() => handleRatingChange(index, ratingType)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <RiStarFill size={26} />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
