"use client";
import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let totalSeconds = 120;
    const countdownInterval = setInterval(() => {
      if (totalSeconds >= 0) {
        setTime({
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
    <span className="countdown">
      {/* @ts-ignore */}
      <span style={{ "--value": time.minutes }}></span>:{/* @ts-ignore */}
      <span style={{ "--value": time.seconds }}></span>
    </span>
  );
};

export default Timer;
