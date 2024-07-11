"use client";
import { social } from "@/constants";
import {
  MessengerSVG,
  PaymentSuccessSVG,
  WhatsAppSVG,
} from "@/micro-components";
import Link from "next/link";
import { FaRegCopy } from "react-icons/fa";

const Success = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("ID#87452");
  };

  return (
    <div className="layout-container layout-mt layout-p bg-white">
      <div className="mx-auto my-4 max-w-3xl flex flex-col items-center">
        <h1 className="font-bold text-xl md:text-2xl">Payment successful!</h1>
        <div className="mt-7 w-64">
          <PaymentSuccessSVG />
        </div>
        <p className="mt-6 text-xs sm:text-sm">Order placed successfully.</p>
        <div className="text-xs sm:text-sm flex items-center gap-1">
          <p>
            Track your order&nbsp;
            <span className="text-primary font-semibold">ID#87452</span>
          </p>
          <button className="btn btn-link">
            <FaRegCopy
              className="inline-block text-black04 w-4 sm:w-5 h-4 sm:h-5"
              onClick={copyToClipboard}
            />
          </button>
        </div>

        <div className="mt-6 flex gap-2">
          <Link
            href={social.Messenger.href}
            target="_blank"
            className="w-12 md:w-14 h-12 md:h-14 border-black05 rounded border"
          >
            <MessengerSVG />
          </Link>
          <Link
            href={social.WhatsApp.href}
            target="_blank"
            className="w-12 md:w-14 h-12 md:h-14 border-black05 rounded border p-2 md:p-3"
          >
            <WhatsAppSVG />
          </Link>
        </div>
        <p className="mt-3 text-xs sm:text-sm font-bn text-center text-black04">
          পুরাতন বই অর্ডার করে থাকলে বইয়ের কন্ডিশন দেখতে
          <br />
          অর্ডার আইডি আমাদেরকে ইনবক্স করুন।
        </p>

        <div className="mt-6 flex gap-2">
          <button className="btn btn-primary btn-sm w-36 md:w-40 h-10 md:h-11">
            Track Order
          </button>
          <button className="btn btn-primary btn-sm btn-outline w-36 md:w-40 h-10 md:h-11">
            Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
