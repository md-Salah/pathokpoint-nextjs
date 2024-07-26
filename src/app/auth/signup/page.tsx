"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import axios, { AxiosError } from "@/utils/axiosConfig";
import { SignUpForm, VerifyOTP } from "@/components";
import { SignUpSVG } from "@/micro-components";
import { login } from "@/redux/features/auth-slice";
import { AppDispatch, RootState } from "@/redux/store";

interface UserSignup {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { user: currentUser } = useSelector((state: RootState) => state.auth);

  const [step, setStep] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserSignup>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleSignup = async (user: UserSignup) => {
    setLoading(true);
    try {
      await axios.post("/auth/signup", user);
      setError(null);
      setStep(2);
    } catch (error) {
      const err = error as AxiosError;
      setError(
        err.response?.data.detail.message || "An unknown error occurred"
      );
    }
    setLoading(false);
  };

  const handleOTPSubmit = async (otp: string) => {
    setError(null);
    setLoading(true);
    try {
      await axios.post("/auth/verify-otp", { email: user.email, otp });
      const action = await dispatch(
        login({
          username: user.email,
          password: user.password,
        })
      );
      if (login.rejected.match(action)) {
        setError(action.payload as string);
      }
      setLoading(false);
      router.push("/");
    } catch (error) {
      const err = error as AxiosError;
      setError(
        err.response?.data.detail.message || "An unknown error occurred"
      );
    }
    setLoading(false);
  };

  if (currentUser) {
    router.push("/");
  }

  return (
    <div className="layout-container layout-mt layout-p bg-white">
      <div className="my-5 grid lg:grid-cols-2">
        <div className="hidden lg:flex items-center justify-center ">
          <SignUpSVG className="w-96" />
        </div>
        <div className="flex items-center">
          <div className="mx-auto max-w-full w-80">
            {step === 1 && (
              <SignUpForm
                handleSignup={handleSignup}
                error={error}
                setError={setError}
                user={user}
                setUser={setUser}
                loading={loading}
              />
            )}
            {step === 2 && (
              <VerifyOTP handleOTPSubmit={handleOTPSubmit} error={error} loading={loading} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
