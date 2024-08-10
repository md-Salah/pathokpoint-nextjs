"use client";

import { useRouter } from 'next/navigation';
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

  const { user } = useUser();

  const handleCheckout = async () => {
    if (!termsAggreed) return;
    // if (!user) {
    //   router.push("/auth/login");
    // }
    dispatch(placeOrder());
  };

  return (
    <div className="layout-container">
      {/* {!user && (
        <div className="flex items-center justify-center layout-mt bg-white h-10 text-sm text-primary">
          <Link href="/auth/login" className="hover:underline">
            CLICK HERE TO LOGIN
          </Link>
        </div>
      )} */}

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
              <button
                className={`mt-4 btn btn-primary w-full ${
                  !termsAggreed && "btn-disabled"
                }`}
                onClick={handleCheckout}
              >
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
