"use client";
import { useState } from 'react';

import { isEnglish } from '@/utils';

const Description = ({
  text,
  fullView = false,
  char = 75,
}: {
  text: string;
  fullView?: boolean;
  char?: number;
}) => {
  const [readMore, setReadMore] = useState(fullView);

  const toggleFullText = () => {
    setReadMore(!readMore);
  };

  return (
    <div className={`font-normal text-xs sm:text-sm text-black02 ${!isEnglish(text) && "font-bn"}`}>
      {text.length > 75 ? (
        <p>
          {readMore ? text : text.slice(0, char) + "..."}
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
