"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { CartItem as CartItemType } from '@/interface';
import { applyCoupon, removeCoupon } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

import ApplyCoupon from './ApplyCoupon';
import CartItem from './CartItem';
import CouponApplied from './CouponApplied';
import EmptyCart from './EmptyCart';
import SuggestedBooks from './SuggestedBooks';
import Summary from './Summary';

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems, coupon, isLoading } = useSelector(
    (state: RootState) => state.cart
  );

  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCoupon = async (code: string) => {
    if (code.trim() === "") return true;
    setErr(null);
    const action = await dispatch(applyCoupon(code.trim()));
    if (applyCoupon.rejected.match(action)) {
      setErr(action.payload as string);
      return false;
    }
    return true;
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    if (coupon) {
      setLoading(true);
      const isValid = await handleCoupon(coupon);
      setLoading(false);
      if (!isValid) return;
    }
    router.push("/checkout");
  };

  const handleRemoveCoupon = () => {
    dispatch(removeCoupon());
  };

  if (cartItems.length === 0) return <EmptyCart />;
  return (
    <div>
      <div className="layout-container layout-mt">
        <div className="flex flex-col md:flex-row gap-2.5">
          <div className="flex flex-1">
            <div className="bg-white w-full layout-p">
              <h1 className="font-semibold sm:text-lg md:text-xl">My cart</h1>
              <div className="mt-3 sm:mt-5 md:mt-6 lg:mt-8 overflow-scroll">
                <table className="table table-px-0 border-t">
                  <tbody>
                    {cartItems.map((item: CartItemType) => (
                      <CartItem key={item.id} book={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="bg-white w-full md:w-64 lg:w-80 layout-p">
            <h1 className="font-semibold sm:text-lg md:text-xl">
              Order summary
            </h1>
            <Summary />
            {coupon ? (
              <CouponApplied handleRemoveCoupon={handleRemoveCoupon} />
            ) : (
              <ApplyCoupon handleCoupon={handleCoupon} isLoading={isLoading} />
            )}
            <p className="text-highlight text-sm mt-8">{err}</p>
            <button
              className="mt-4 btn btn-primary w-full"
              onClick={handleCheckout}
            >
              {loading && <span className="loading loading-spinner"></span>}
              Checkout
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
      <SuggestedBooks />
    </div>
  );
};

export default Cart;
