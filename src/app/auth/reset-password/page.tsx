"use client";
import React, { useState } from "react";

import { ForgotPassword, SetPassword, VerifyOTP } from "@/components";
import { ForgotPassSVG } from "@/micro-components";

const ResetPassword = () => {
  const [step, setStep] = useState<number>(1); // [1, 2, 3]
  const [user, setUser] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const setOTP = (otp: string) => {
    setUser({ ...user, otp });
  };
  const handleEmailSubmit = () => {
    // Send OTP
    setStep(2);
  };
  const handleOTPSubmit = () => {
    // Verify OTP
    setStep(3);
  };

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
                handleEmailSubmit={handleEmailSubmit}
              />
            )}
            {step === 2 && <VerifyOTP handleOTPSubmit={handleOTPSubmit} />}
            {step === 3 && <SetPassword />}
            {/* <div className="toast toast-top toast-center top-36">
              <div className="alert alert-info">
                <span>Password changed successfully.</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
