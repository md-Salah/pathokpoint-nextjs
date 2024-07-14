"use client";
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";

type Props = {
  inputs: number[];
  handleInput: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  onClose: () => void;
};

const CodeInputForm = ({ handleInput, inputs, onClose }: Props) => {
  const [time, setTime] = useState(120);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const input = e.target as HTMLInputElement;
    if (e.key === "Backspace" && input.value.length === 0 && index > 0) {
      (
        document.getElementById(`input-${index - 1}`) as HTMLInputElement
      ).focus();
    }
  };

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);
  return (
    <div className="modal-box rounded-lg bg-[#F3F5F6] md:max-w-none md:w-[600px]">
      <div className="w-full flex justify-end pb-4">
        <button className="btn btn-circle btn-outline btn-xs md:btn-sm" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="bg-white rounded-lg w-full flex flex-col space-y-4 p-4 md:p-14">
        <h2 className="text-lg text-[#363739]">Enter 5 Digits Code</h2>
        <p className="text-sm text-[#6F6E77]">
          Enter the 5 digits code that you received on your mobile number
        </p>
        <div id="code-inputs" className="flex justify-evenly w-full">
          {inputs.map((_, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="text"
              maxLength={1}
              className="input input-bordered w-12 text-center"
              onInput={(e) =>
                handleInput(e as ChangeEvent<HTMLInputElement>, index)
              }
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <button className="btn btn-primary w-full">Submit</button>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-black04">
            Didn't get any code?{" "}
            <span className="font-semibold text-primary">{`${String(
              Math.floor(time / 60)
            ).padStart(2, "0")}:${String(time % 60).padStart(2, "0")}`}</span>
          </span>
          <a
            href="#"
            className="text-sm text-primary font-semibold hover:underline-offset-1"
          >
            Resend
          </a>
        </div>
        <div>
          <button className="btn btn-sm btn-outline btn-primary rounded-full">
            <IoChevronBackSharp size={18} className="mr-[-5px]" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeInputForm;
