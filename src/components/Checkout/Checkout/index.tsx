"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AcceptTerms, {
    OrderSummary, PaymentMethods, ShippingAddress, ShippingMethods
} from '@/components/Checkout';
import { useUser } from '@/hooks';
import { OrderTerms } from '@/micro-components';
import { placeOrder } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { termsAggreed } = useSelector((state: RootState) => state.cart);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { user } = useUser();

  const handleCheckout = async () => {
    setErr(null);
    setLoading(true);
    const action = await dispatch(placeOrder());
    if (placeOrder.rejected.match(action)) {
      setErr(action.payload as string);
    } else if (placeOrder.fulfilled.match(action)) {
      router.push(action.payload.payment_url);
    }
    setLoading(false);
  };

  return (
    <div className="layout-container">
      {!user && (
        <div className="flex items-center justify-center layout-mt bg-white h-10 text-sm text-primary">
          <Link href="/auth/login" className="hover:underline">
            CLICK HERE TO LOGIN
          </Link>
        </div>
      )}

      <div className="grid grid-cols-12 md:gap-3">
        <section className="layout-p layout-mt bg-white col-span-12 md:col-span-5 xl:col-span-4">
          <ShippingAddress />
        </section>
        <div className="col-span-12 md:col-span-7 xl:col-span-8 grid">
          <PaymentMethods />
          <ShippingMethods />
        </div>
      </div>

      {/* Summary section */}
      <section className="layout-p layout-mt bg-white">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-6 lg:col-span-7 hidden sm:block">
            <OrderTerms />
          </div>
          <div className="col-span-12 sm:col-span-1"></div>
          <div className="col-span-12 sm:col-span-5 lg:col-span-4">
            <OrderSummary />
            <div className="sm:hidden mt-8">
              <OrderTerms />
            </div>
            <div className="mt-8">
              <AcceptTerms />
              {err && <p className="text-highlight text-sm mt-8">{err}</p>}
              <button
                className="mt-4 btn btn-primary w-full"
                onClick={handleCheckout}
                disabled={!termsAggreed || loading}
              >
                {loading && <span className="loading loading-spinner"></span>}
                Pay now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
