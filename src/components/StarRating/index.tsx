"use client";
import { useState } from "react";
import { RiStarFill } from "react-icons/ri";

type Props = {
  rating: number;
  ratingType?: string;
  handleRatingChange?: (index: number, type: string) => void;
  isReadOnly?: boolean;
  iconSize?: number;
};

const StarRating = ({
  rating,
  handleRatingChange,
  ratingType,
  isReadOnly = false,
  iconSize = 26,
}: Props) => {
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
            onClick={() =>
              handleRatingChange &&
              ratingType &&
              !isReadOnly &&
              handleRatingChange(index, ratingType)
            }
            onMouseEnter={() => !isReadOnly && setHover(index)}
            onMouseLeave={() => !isReadOnly && setHover(rating)}
          >
            <RiStarFill size={iconSize} />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
