"use client";
import { useState } from "react";

const Description = ({ text, fullView = false }: { text: string, fullView?: boolean }) => {
  const [readMore, setReadMore] = useState(fullView);

  const toggleFullText = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="text-justify font-normal font-bn text-sm text-black02">
      {text.length > 75 ? (
        <p>
          {readMore ? text : text.slice(0, 75) + "..."}
          <span
            className="font-semibold hover:underline cursor-pointer text-primary ml-2"
            onClick={toggleFullText}
          >
            {readMore ? "Read less" : "Read more"}
          </span>
        </p>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default Description;
