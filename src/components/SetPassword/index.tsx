"use client";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SetPassword = () => {
  const [error, setError] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);

  return (
    <div className="w-80">
      <h2 className="text-center lg:text-left md:text-lg">
        Set your new password
      </h2>
      <p className="mt-2 text-black04 text-xs md:text-sm text-center lg:text-left">
        Password should be at least 8 characters long.
      </p>
      <div className="mt-10 grid gap-2">
        <label className="input input-sm flex items-center gap-2 h-11 input-bordered focus-within:outline-none focus-within:border-primary">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="grow bg-transparent"
            name="password"
          />
          <div
            className="btn btn-link text-black04"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? (
              <AiOutlineEye className="w-4 h-4" />
            ) : (
              <AiOutlineEyeInvisible className="w-4 h-4" />
            )}
          </div>
        </label>
        <label className="input input-sm flex items-center gap-2 h-11 input-bordered focus-within:outline-none focus-within:border-primary">
          <input
            type={showConfirmPass ? "text" : "password"}
            placeholder="Confirm Password"
            className="grow bg-transparent"
            name="confirm-password"
          />
          <div
            className="btn btn-link text-black04"
            onClick={() => setShowConfirmPass(!showConfirmPass)}
          >
            {showConfirmPass ? (
              <AiOutlineEye className="w-4 h-4" />
            ) : (
              <AiOutlineEyeInvisible className="w-4 h-4" />
            )}
          </div>
        </label>
      </div>
      <p className="text-highlight text-sm mt-4">{error}</p>
      <button className="btn btn-primary btn-sm btn-block h-12 bg-primary mt-2 rounded">
        {false && <span className="loading loading-spinner"></span>}
        Submit
      </button>
    </div>
  );
};

export default SetPassword;
