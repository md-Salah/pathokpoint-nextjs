"use client";
import useSWR from 'swr';

import { paymentGateway } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

import CashOnDelivery from './CashOnDelivery';
import PaymentMethod from './PaymentMethod';

const PaymentMethods = () => {
  const {
    data: paymentMethods,
    error,
    isLoading,
  }: { data: paymentGateway[]; error: any; isLoading: boolean } = useSWR(
    "/payment_gateway/customer",
    fetcher
  );

  return (
    <section className="layout-p layout-mt bg-white">
      <h2 className="font-semibold sm:text-lg md:text-xl">Payment method</h2>

      <CashOnDelivery />

      {/* Options */}
      <div className="mt-7">
        {isLoading && <div className="skeleton h-40"></div>}
        {error && <div className="mt-3 h-40 text-highlight">{error}</div>}
      </div>
      <div className="mt-7 flex flex-wrap gap-3">
        {paymentMethods &&
          paymentMethods.map((method: paymentGateway) => (
            <PaymentMethod key={method.name} method={method} />
          ))}
      </div>
    </section>
  );
};

export default PaymentMethods;
