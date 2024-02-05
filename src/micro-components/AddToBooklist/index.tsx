'use client';
import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const AddToBooklist = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <button className="hover:text-primary" onClick={toggleLike}>
      {liked ? (
        <IoMdHeart className="inline-block h-6 w-6 text-error" />
      ) : (
        <IoMdHeartEmpty className="inline-block h-6 w-6" />
      )}
      <span className="ml-1">Add To Booklist</span>
    </button>
  );
};

export default AddToBooklist;
