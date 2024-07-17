"use client";
import React, { useState, useRef } from "react";
import Timer from "./Timer";

interface Props {
  handleOTPSubmit: () => void;
}

const VerifyOTP = ({handleOTPSubmit}: Props) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    // Handle focus on next input
    if (event.target.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (event.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const fullOtp = otp.join("");
    handleOTPSubmit();
  };

  return (
    <div>
      <h2 className="text-center lg:text-left md:text-lg">Enter your OTP</h2>
      <p className="mt-2 text-black04 text-xs md:text-sm text-center lg:text-left">
        Enter the 6 digit OTP sent to your email.
      </p>
      <div className="mt-10 flex gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            ref={(el) => el && (inputRefs.current[index] = el)}
            className="input input-sm input-bordered min-w-0 text-center focus:outline-none focus:border-primary"
          />
        ))}
      </div>
      <div className="flex justify-between mt-2 text-black04">
        <h5 className="text-sm">
          Didn&apos;t get any code?&nbsp;
          <span className="half-underline text-primary font-medium cursor-pointer py-0.5">
            Resend
          </span>
        </h5>
        <div className="text-primary font-medium">
          <Timer />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        disabled={otp.join("").length !== 6}
        className="mt-10 btn btn-primary btn-block btn-sm h-11"
      >
        Submit
      </button>
    </div>
  );
};

export default VerifyOTP;
