"use client";

import Link from "next/link";
import { FormEvent } from "react";

import { isEmail } from "@/utils";

interface Props {
  email: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendOTP: () => void;
  error: string | null;
  setError: (error: string | null) => void;
  loading: boolean;
}

const ForgotPassword = ({
  email,
  handleChange,
  sendOTP,
  error,
  setError,
  loading,
}: Props) => {
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "") {
      setError("Email is required");
    } else if (!isEmail(email.trim())) {
      setError("Invalid email");
    } else {
      setError(null);
      sendOTP();
    }
  };

  return (
    <div>
      <h2 className="text-center lg:text-left md:text-lg">
        Forgot your password?
      </h2>
      <p className="mt-2 text-black04 text-xs md:text-sm text-center lg:text-left">
        Enter your email, we will send you a 6 digit OTP to reset your password.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 flex gap-2">
          <input
            type="text"
            placeholder="Email"
            className="input input-sm h-11 input-bordered focus:border-primary focus:outline-none w-full"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <p className="text-highlight text-sm mt-4">{error}</p>
        <button
          className="btn btn-primary btn-sm btn-block h-12 bg-primary mt-2 rounded"
          type="submit"
        >
          {loading && <span className="loading loading-spinner"></span>}
          Send OTP
        </button>
      </form>
      <p className="mt-3 text-sm text-black04">
        Remember password?&nbsp;
        <Link href="/auth/login" className="btn btn-link">
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
