'use client';
import { VerifyOTP } from "@/components";

const SignUp = () => {
  const handleOTPSubmit = () => {
    //verify otp
    console.log("OTP verified");
  };

  return (
    <div className="layout-container layout-mt layout-p bg-white">
      <div className="my-5 grid">
        <div className="mx-auto max-w-xs">
          <VerifyOTP handleOTPSubmit={handleOTPSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
