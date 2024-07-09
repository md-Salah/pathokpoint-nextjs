"use client";

import Image from "next/image";
import { useState } from "react";

interface PaymentMethodProps {
  cod: boolean;
  gateway: string | null;
}

const PaymentMethod = () => {
  const [method, setMethod] = useState<PaymentMethodProps>({
    cod: false,
    gateway: null,
  });

  return (
    <section className="layout-p layout-mt bg-white">
      <h2 className="font-semibold sm:text-lg md:text-xl">Payment method</h2>
      {/* COD */}
      <div className="mt-4 sm:mt-6 form-control">
        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
            checked={method.cod}
            onChange={() => setMethod({ ...method, cod: !method.cod })}
          />
          <span className="label-text font-medium">Cash on delivery</span>
        </label>
        {method.cod && (
          <label className="mt-2 ml-6 text-xs font-bn text-black04 tracking-wide">
            অর্ডারটি কনফার্ম করতে
            <span className="font-semibold mx-1">100৳</span>
            অগ্রিম পেমেন্ট করুন, বাকী
            <span className="font-semibold mx-1">170৳</span>
            বই হাতে পেয়ে পরিশোধ করুন।
          </label>
        )}
      </div>

      {/* Gateway */}
      <div className="mt-7 flex flex-wrap gap-3">
        <Gateway
          src="/payment/bkash.png"
          alt="Bkash"
          name="bkash"
          method={method}
          setMethod={setMethod}
        />
        <Gateway
          src="/payment/rocket.png"
          alt="Rocket"
          name="rocket"
          method={method}
          setMethod={setMethod}
        />
        <Gateway
          src="/payment/upay.png"
          alt="Upay"
          name="upay"
          method={method}
          setMethod={setMethod}
        />
        <Gateway
          src="/payment/nagad.png"
          alt="Nagad"
          name="nagad"
          method={method}
          setMethod={setMethod}
        />
        <Gateway
          src="/payment/amex.png"
          alt="American Express"
          name="amex"
          method={method}
          setMethod={setMethod}
        />
        <Gateway
          src="/payment/visa.png"
          alt="Visa"
          name="visa"
          method={method}
          setMethod={setMethod}
        />
        <Gateway
          src="/payment/mastercard.png"
          alt="MasterCard"
          name="mastercard"
          method={method}
          setMethod={setMethod}
        />
        <Gateway
          src="/payment/bank.png"
          alt="Bank"
          name="bank"
          method={method}
          setMethod={setMethod}
        />
      </div>
    </section>
  );
};

export default PaymentMethod;

const Gateway = ({
  src,
  alt,
  name,
  method,
  setMethod,
}: {
  src: string;
  alt: string;
  name: string;
  method: PaymentMethodProps;
  setMethod: (val: PaymentMethodProps) => void;
}) => {
  return (
    <label className="cursor-pointer flex items-center gap-6 border border-black05 rounded p-2 pl-5 min-w-36 grow max-w-60 h-16">
      <input
        type="radio"
        className="radio radio-sm radio-primary"
        checked={method.gateway === name}
        name={name}
        onChange={(e) => setMethod({ ...method, gateway: e.target.name })}
      />
      <figure className="w-16 h-10 relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain object-left"
        />
      </figure>
    </label>
  );
};
