"use client";
import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const WishlistButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <button className="btn btn-sm px-2 bg-[#F1F2F4] border-none h-full w-full" onClick={toggleLike}>
      {liked ? (
        <IoMdHeart className="inline-block h-full w-full text-[#F2213A]" />
      ) : (
        <IoMdHeartEmpty className="inline-block h-full w-full text-primary" />
      )}
    </button>
  );
};

export default WishlistButton;
