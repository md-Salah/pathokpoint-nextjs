"use client";
import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const Heart = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <button className="btn btn-sm bg-base-300" onClick={toggleLike}>
      {liked ? (
        <IoMdHeart className="inline-block h-6 w-6 text-error" />
      ) : (
        <IoMdHeartEmpty className="inline-block h-6 w-6" />
      )}
    </button>
  );
};

export default Heart;
