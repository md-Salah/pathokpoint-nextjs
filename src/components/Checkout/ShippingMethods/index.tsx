"use client";
import useSWR from 'swr';

import { Courier as CourierInterface } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

import ShippingMethod from './ShippingMethod';

const ShippingMethods = () => {
  const {
    data,
    isLoading,
    error,
  }: { data: CourierInterface[]; isLoading: boolean; error: any } = useSWR(
    "/courier/all",
    fetcher
  );

  return (
    <section className="layout-p layout-mt md:mt-3 bg-white">
      <h2 className="font-semibold sm:text-lg md:text-xl">Shipping method</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {isLoading && <div className="skeleton h-40 w-full"></div>}
        {!isLoading && error && (
          <div className="h-40 w-full text-black04">{error}</div>
        )}
        {data &&
          data.map((courier) => (
            <ShippingMethod
              key={courier.id}
              id={courier.id}
              title={courier.method_name}
              baseCharge={courier.base_charge}
              weightChargePerKg={courier.weight_charge_per_kg}
              duration="3-5 days"
            />
          ))}
      </div>
    </section>
  );
};

export default ShippingMethods;
