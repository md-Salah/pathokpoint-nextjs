"use client";

import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let totalSeconds = 1000000;

    const countdownInterval = setInterval(() => {
      if (totalSeconds > 0) {
        setTime({
          days: Math.floor(totalSeconds / (24 * 60 * 60)),
          hours: Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60)),
          minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
          seconds: totalSeconds % 60,
        });

        totalSeconds--;
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="grid grid-flow-col auto-cols-max gap-3">
      <Box value={time.days} text="Day" />
      <Box value={time.hours} text="Hour" />
      <Box value={time.minutes} text="Min" />
      <Box value={time.seconds} text="Sec" />
    </div>
  );
};

export default Timer;

const Box = ({ value, text }: { value: number; text: string }) => (
  <div className="flex flex-col px-4 py-3 items-center bg-white text-primary text-center rounded">
    <span className="countdown font-bold text-2xl sm:text-4xl">
      {/* @ts-ignore */}
      <span style={{ "--value": value }}></span>
    </span>
    <span className="border-t mt-1 text-sm sm:text-base">{text}</span>
  </div>
);
