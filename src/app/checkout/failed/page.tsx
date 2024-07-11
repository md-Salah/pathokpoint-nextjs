import { PaymentCanceledSVG } from "@/micro-components";
import React from "react";

const Failed = () => {
  return (
    <div className="layout-container layout-mt layout-p bg-white">
      <div className="mx-auto my-4 max-w-3xl flex flex-col items-center">
        <h1 className="font-bold text-xl md:text-2xl">Payment canceled!</h1>
        <div className="mt-7 w-64">
          <PaymentCanceledSVG />
        </div>
        <p className="mt-6 text-xs sm:text-sm">Your order has been canceled.</p>
        <button className="mt-8 btn btn-primary btn-sm h-11 w-72">
          Back to checkout
        </button>
      </div>
    </div>
  );
};

export default Failed;
