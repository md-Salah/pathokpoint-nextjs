"use client";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';

import { Courier as CourierInterface } from '@/interface';
import { selectCourier } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { fetcher } from '@/utils/axiosConfig';

import ShippingMethod from './ShippingMethod';

const ShippingMethods = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { address, isCashOnDelivery } = useSelector(
    (state: RootState) => state.cart
  );
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    data,
    isLoading: dataLoading,
    error: dataErr,
  }: { data: CourierInterface[]; isLoading: boolean; error: any } = useSWR(
    `/courier/all?${
      address.city.trim() != "" ? `city=${address.city.trim()}` : ""
    }`,
    fetcher
  );

  const handleSelect = async (courier: CourierInterface) => {
    if (isCashOnDelivery && !courier.allow_cash_on_delivery) {
      setErr(`"${courier.method_name}" does not support cash on delivery`);
      return;
    }

    setErr(null);
    setLoading(true);
    const action = await dispatch(selectCourier(courier.id));
    if (selectCourier.rejected.match(action)) {
      setErr(action.payload as string);
    }
    setLoading(false);
  };

  return (
    <section className="layout-p layout-mt md:mt-3 bg-white">
      <h2 className="font-semibold sm:text-lg md:text-xl">Shipping method</h2>
      {dataLoading && <div className="mt-3 skeleton h-40"></div>}
      {dataErr && <div className="mt-3 h-40 text-highlight">{dataErr}</div>}
      <div
        className={`transition-all duration-300 ease-in-out ${
          err || loading ? "h-4 my-2" : "h-0"
        }`}
      >
        {err && <div className="mt-1 text-highlight text-sm">{err}</div>}
        {loading && (
          <div className="flex justify-center text-black04">
            <div className="loading loading-dots"></div>
          </div>
        )}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {data &&
          data.length > 0 &&
          data.map((courier) => (
            <ShippingMethod
              key={courier.id}
              courier={courier}
              handleSelect={handleSelect}
            />
          ))}
        {!dataLoading && data && data.length === 0 && (
          <div className="w-full text-black04">
            No shipping method available
          </div>
        )}
      </div>
    </section>
  );
};

export default ShippingMethods;
