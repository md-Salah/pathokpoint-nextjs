"use client";
import { FacebookSVG, GoogleSVG } from "@/micro-components";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordMinLength = 8;

    if (!user.email) {
      setError("Email is required");
    } else if (!emailRegex.test(user.email)) {
      setError("Please enter a valid email address");
    } else if (!user.password) {
      setError("Password is required");
    } else if (user.password.length < passwordMinLength) {
      setError(
        `Password must be at least ${passwordMinLength} characters long`
      );
    } else {
      setError("");
      setLoading(true);
      // Call your signup function here
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  };

  const handleInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      <h1 className="mt-5 font-bold md:text-xl text-primary text-center lg:text-left">
        Login
      </h1>
      <div className="mt-6 grid gap-3">
        <input
          type="text"
          placeholder="Email"
          className="input input-sm h-11 input-bordered focus:border-primary focus:outline-none w-full"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
        <label className="input input-sm flex items-center gap-2 h-11 input-bordered focus-within:outline-none focus-within:border-primary">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="grow bg-transparent"
            name="password"
            value={user.password}
            onChange={handleInputChange}
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
        <div className="flex justify-end">
          <Link
            href="/auth/reset-password"
            className="btn btn-link btn-sm text-primary min-h-0 h-4"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
      <p className="text-highlight text-sm mt-4">{error}</p>
      <button
        className="btn btn-primary btn-sm btn-block h-12 bg-primary mt-2 rounded"
        onClick={handleSignUp}
      >
        {loading && <span className="loading loading-spinner"></span>}
        Login
      </button>

      <div className="text-center lg:text-left">
        <p className="mt-6 text-sm text-black04">Or, login with</p>
        <div className="grid grid-cols-2 gap-2 mt-6">
          <button className="btn btn-sm btn-outline h-12 text-black04 border-black05">
            <GoogleSVG className="w-8 h-8" />
            Google
          </button>
          <button className="btn btn-sm btn-outline h-12 text-black04 border-black05">
            <FacebookSVG className="h-6 -mr-1" />
            Facebook
          </button>
        </div>
        <p className="mt-3 text-sm text-black04">
          Don't have an account?&nbsp;
          <Link href="/auth/signup" className="btn btn-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;