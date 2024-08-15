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
  const {
    data,
    isLoading: dataLoading,
    error: dataErr,
  }: { data: CourierInterface[]; isLoading: boolean; error: any } = useSWR(
    `/courier/all?${
      address.city.trim() != "" ? `city=${address.city.trim()}` : ""
    }${isCashOnDelivery ? "&allow_cash_on_delivery=true" : ""}`,
    fetcher
  );

  const handleSelect = async (id: string) => {
    setErr(null);
    const action = await dispatch(selectCourier(id));
    if (selectCourier.rejected.match(action)) {
      setErr(action.payload as string);
    }
  };

  return (
    <section className="layout-p layout-mt md:mt-3 bg-white">
      <h2 className="font-semibold sm:text-lg md:text-xl">Shipping method</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {dataLoading && <div className="skeleton h-40 w-full"></div>}
        {dataErr && <div className="h-40 w-full text-highlight">{dataErr}</div>}
        {err && <div className="w-full text-highlight">{err}</div>}
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
