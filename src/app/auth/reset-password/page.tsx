"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import axiosInstance, { AxiosError } from "@/utils/axiosConfig";
import ForgotPassword from "./ForgotPassword";
import SetPassword from "./SetPassword";
import { ForgotPassSVG } from "@/micro-components";

const ResetPassword = () => {
  const { user: currentUser } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const [step, setStep] = useState<number>(1); // [1, 2]
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const [user, setUser] = useState({
    email: "",
    new_password: "",
    confirm_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const sendOTP = async () => {
    setLoading(true);
    try {
      await axiosInstance.post("/auth/reset-password", {
        email: user.email.trim(),
      });
      setStep(2);
    } catch (error) {
      const err = error as AxiosError;
      setError(
        err.response?.data.detail.message || "An unknown error occurred"
      );
    }
    setLoading(false);
  };

  const setNewPassword = async (OTP: string) => {
    setLoading(true);
    try {
      await axiosInstance.post("/auth/set-new-password", {
        email: user.email.trim(),
        new_password: user.new_password,
        otp: OTP,
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        router.push("/auth/login");
      }, 3000);
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
          <ForgotPassSVG />
        </div>
        <div className="flex items-center">
          <div className="mx-auto max-w-xs">
            {step === 1 && (
              <ForgotPassword
                email={user.email}
                handleChange={handleChange}
                sendOTP={sendOTP}
                error={error}
                setError={setError}
                loading={loading}
              />
            )}
            {step === 2 && (
              <SetPassword
                error={error}
                setError={setError}
                loading={loading}
                user={user}
                handleChange={handleChange}
                setNewPassword={setNewPassword}
              />
            )}
            {success && (
              <div className="toast toast-top toast-center top-36">
                <div className="alert alert-success">
                  <span>Password changed successfully. Please login.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
