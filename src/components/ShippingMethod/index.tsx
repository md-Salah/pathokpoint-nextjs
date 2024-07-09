"use client";
import { TbClock, TbCoinTaka } from "react-icons/tb";

import { isEnglish } from "@/utils";
import { useState } from "react";

const ShippingMethod = () => {
  const [courier, setCourier] = useState<string>("dt-home-delivery");

  return (
    <section className="layout-p layout-mt md:mt-3 bg-white">
      <h2 className="font-semibold sm:text-lg md:text-xl">Shipping method</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        <Courier
          name="dt-home-delivery"
          title="Home delivery"
          by="Delivery Tiger"
          charge="120 Tk"
          duration="3-5 days"
          qoute="উপজেলা সদর পর্যন্ত যাবে।"
          courier={courier}
          setCourier={setCourier}
        />
        <Courier
          name="shundarban-courier"
          title="Shundarban courier"
          charge="60 Tk"
          duration="2-3 days"
          qoute="সুন্দরবন অফিস থেকে পার্সেল নিতে হবে।"
          courier={courier}
          setCourier={setCourier}
        />
      </div>
    </section>
  );
};

export default ShippingMethod;

const Courier = ({
  name,
  title,
  by,
  charge,
  duration,
  qoute,
  courier,
  setCourier,
}: {
  name: string;
  title: string;
  by?: string;
  charge: string;
  duration: string;
  qoute?: string;
  courier: string;
  setCourier: (val: string) => void;
}) => {
  return (
    <div
      className="flex flex-row items-center p-2 pl-5 gap-x-5 min-w-72 grow cursor-pointer border rounded border-black05"
      onClick={() => setCourier(name)}
    >
      <input
        type="radio"
        className="radio radio-sm radio-primary"
        name={name}
        checked={courier === name}
        readOnly
      />
      <div className="flex flex-col gap-1.5 text-xs text-black04">
        <h3 className="label-text font-medium">{title}</h3>
        {by && (
          <h4 className={`${!isEnglish(by) && "font-bn"}`}>{"by " + by}</h4>
        )}
        <div className="flex items-center">
          <TbCoinTaka className="inline-block mr-1 min-w-4 min-h-4" />
          <span>{charge + ","}</span>
          <TbClock className="inline-block mr-1 ml-2 min-w-4 min-h-4" />
          <span>{duration}</span>
        </div>
        {qoute && <h4 className="font-bn">{qoute}</h4>}
      </div>
    </div>
  );
};
