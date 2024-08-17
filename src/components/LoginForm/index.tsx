"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { FacebookSVG, GoogleSVG } from '@/micro-components';
import { login } from '@/redux/features/auth-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { isEmail } from '@/utils';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [showPass, setShowPass] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [err, setErr] = useState<string | null>(null);
  const { loading } = useSelector((state: RootState) => state.auth);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordMinLength = 8;

    if (!email) {
      setErr("Email is required");
    } else if (!isEmail(email)) {
      setErr("Please enter a valid email address");
    } else if (!password) {
      setErr("Password is required");
    } else if (password.length < passwordMinLength) {
      setErr(`Password must be at least ${passwordMinLength} characters long`);
    } else {
      setErr(null);
      const action = await dispatch(
        login({
          username: email,
          password: password,
        })
      );
      if (login.rejected.match(action)) {
        setErr(action.payload as string);
      } else if (login.fulfilled.match(action)) {
        router.back();
      }
    }
  };
  return (
    <div className="bg-white">
      <form onSubmit={handleLogin}>
        <h1 className="mt-5 font-bold md:text-xl text-primary text-center lg:text-left">
          Login
        </h1>
        <div className="mt-6 grid gap-3">
          <input
            type="text"
            placeholder="Email"
            className="input input-sm h-11 input-bordered focus:border-primary focus:outline-none w-full"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="input input-sm flex items-center gap-2 h-11 input-bordered focus-within:outline-none focus-within:border-primary">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="grow bg-transparent"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <p className="text-highlight text-sm mt-4">{err}</p>
        <button
          className="btn btn-primary btn-sm btn-block h-12 bg-primary mt-2 rounded"
          type="submit"
        >
          {loading && <span className="loading loading-spinner"></span>}
          Login
        </button>
      </form>

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
          Don&apos;t have an account?&nbsp;
          <Link href="/auth/signup" className="btn btn-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
