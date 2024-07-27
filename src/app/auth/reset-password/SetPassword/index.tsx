"use client";

import { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props {
  user: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  setError: (error: string | null) => void;
  loading: boolean;
  setNewPassword: (OTP: string) => void;
}

const SetPassword = ({
  error,
  setError,
  loading,
  user,
  handleChange,
  setNewPassword,
}: Props) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleOTPChange = (
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.new_password !== user.confirm_password) {
      setError("Passwords do not match");
    } else if (user.new_password.length < 8) {
      setError("Password must be at least 8 characters long");
    } else {
      setError(null);
      setNewPassword(otp.join(""));
    }
  };

  return (
    <div className="w-80">
      <h2 className="text-center lg:text-left md:text-lg">
        Set your new password
      </h2>
      <p className="mt-6 text-black04 text-xs md:text-sm text-center lg:text-left">
        Enter the 6 digit OTP sent to your email.
      </p>
      <div className="mt-4 flex gap-2 min-w-0">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOTPChange(e, index)}
            ref={(el) => el && (inputRefs.current[index] = el)}
            className="input input-sm input-bordered min-w-0 h-9 lg:h-10 text-center focus:outline-none focus:border-primary"
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 grid gap-2">
          <p className="text-black04 text-xs md:text-sm text-center lg:text-left">
            Password must be at least 8 characters long.
          </p>
          <label className="mt-2 input input-sm flex items-center gap-2 h-11 input-bordered focus-within:outline-none focus-within:border-primary">
            <input
              type={showPass ? "text" : "password"}
              placeholder="New Password"
              className="grow bg-transparent"
              name="new_password"
              onChange={handleChange}
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
              name="confirm_password"
              onChange={handleChange}
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
        <button
          type="submit"
          className="btn btn-primary btn-sm btn-block h-12 bg-primary mt-2 rounded"
        >
          {loading && <span className="loading loading-spinner"></span>}
          Submit
        </button>
      </form>
    </div>
  );
};

export default SetPassword;
