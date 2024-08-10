"use client";
import { useDispatch, useSelector } from 'react-redux';

import { paymentMethods } from '@/constants';
import { toggleCashOnDelivery } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

import PaymentMethod from './PaymentMethod';

const PaymentMethods = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isCashOnDelivery } = useSelector((state: RootState) => state.cart);

  return (
    <section className="layout-p layout-mt bg-white">
      <h2 className="font-semibold sm:text-lg md:text-xl">Payment method</h2>
      {/* COD */}
      <div className="mt-4 sm:mt-6 form-control">
        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
            checked={isCashOnDelivery}
            onChange={() => dispatch(toggleCashOnDelivery())}
          />
          <span className="label-text font-medium">Cash on delivery</span>
        </label>
        {isCashOnDelivery && (
          <label className="mt-2 ml-6 text-xs font-bn text-black04 tracking-wide">
            অর্ডারটি কনফার্ম করতে
            <span className="font-semibold mx-1">100৳</span>
            অগ্রিম পেমেন্ট করুন, বাকী
            <span className="font-semibold mx-1">170৳</span>
            বই হাতে পেয়ে পরিশোধ করুন।
          </label>
        )}
      </div>

      {/* Options */}
      <div className="mt-7 flex flex-wrap gap-3">
        {paymentMethods.map((method) => (
          <PaymentMethod
            key={method.name}
            src={method.src}
            alt={method.alt}
            name={method.name}
          />
        ))}
      </div>
    </section>
  );
};

export default PaymentMethods;
