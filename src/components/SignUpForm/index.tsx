"use client";

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { FacebookSVG, GoogleSVG } from '@/micro-components';
import { isEmail } from '@/utils';

interface UserSignup {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface Props {
  handleSignup: (user: any) => void;
  error: string | null;
  setError: (error: string | null) => void;
  user: UserSignup;
  setUser: (user: UserSignup) => void;
  loading: boolean;
}

const SignUpForm = ({
  handleSignup,
  error,
  setError,
  user,
  setUser,
  loading,
}: Props) => {
  const [showPass, setShowPass] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordMinLength = 8;
    const nameMinLength = 2;

    if (!user.first_name) {
      setError("First name is required");
    } else if (user.first_name.length < nameMinLength) {
      setError(`First name must be at least ${nameMinLength} characters long`);
    } else if (!user.last_name) {
      setError("Last name is required");
    } else if (user.last_name.length < nameMinLength) {
      setError(`Last name must be at least ${nameMinLength} characters long`);
    } else if (!user.email) {
      setError("Email is required");
    } else if (!isEmail(user.email)) {
      setError("Please enter a valid email address");
    } else if (!user.password) {
      setError("Password is required");
    } else if (user.password.length < passwordMinLength) {
      setError(
        `Password must be at least ${passwordMinLength} characters long`
      );
    } else {
      setError(null);
      handleSignup(user);
    }
  };

  const handleInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      <form onSubmit={handleSubmit}>
        <h1 className="mt-5 font-bold md:text-xl text-primary text-center lg:text-left">
          Sign Up
        </h1>
        <div className="mt-6 grid gap-3">
          <input
            type="text"
            placeholder="First name"
            className="input input-sm h-11 input-bordered bg-white focus:border-primary focus:outline-none w-full"
            name="first_name"
            value={user.first_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Last name"
            className="input input-sm h-11 input-bordered bg-white focus:border-primary focus:outline-none w-full"
            name="last_name"
            value={user.last_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-sm h-11 input-bordered bg-white focus:border-primary focus:outline-none w-full"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
          <label className="input input-sm flex items-center gap-2 h-11 input-bordered bg-white focus-within:outline-none focus-within:border-primary">
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
          type="submit"
        >
          {loading && <span className="loading loading-spinner"></span>}
          Sign Up
        </button>
      </form>

      <div className="text-center lg:text-left">
        <p className="mt-6 text-sm text-black04">Or, sign up with</p>
        <div className="grid grid-cols-2 gap-2 mt-6">
          <button
            className="btn btn-sm btn-outline h-12 text-black04 border-black05"
            onClick={() => setError("SignUp with Google is disabled")}
          >
            <GoogleSVG className="w-8 h-8" />
            Google
          </button>
          <button
            className="btn btn-sm btn-outline h-12 text-black04 border-black05"
            onClick={() => setError("SignUp with Facebook is disabled")}
          >
            <FacebookSVG className="h-6 -mr-1" />
            Facebook
          </button>
        </div>
        <p className="mt-3 text-sm text-black04">
          Already have an account?&nbsp;
          <Link href="/auth/login" className="btn btn-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
