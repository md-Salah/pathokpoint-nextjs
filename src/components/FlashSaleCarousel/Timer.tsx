"use client";

import { useEffect, useState } from "react";
import Box from "./Box";

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
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max text-white">
      <Box value={time.days} text="days" />
      <Box value={time.hours} text="hours" />
      <Box value={time.minutes} text="min" />
      <Box value={time.seconds} text="sec" />
    </div>
  );
};

export default Timer;
