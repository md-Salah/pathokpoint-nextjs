"use client";
import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const Heart = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <button className="btn btn-sm bg-[#F1F2F4] border-none" onClick={toggleLike}>
      {liked ? (
        <IoMdHeart className="inline-block h-6 w-6 text-[#F2213A]" />
      ) : (
        <IoMdHeartEmpty className="inline-block h-6 w-6 text-primary" />
      )}
    </button>
  );
};

export default Heart;
