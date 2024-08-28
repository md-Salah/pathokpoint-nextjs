"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { CartItem as CartItemType } from '@/interface';
import {
    applyCoupon, refreshCartItems, removeCoupon, verifyStock
} from '@/redux/features/cart-slice';
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
  const { cartItems, coupon } = useSelector((state: RootState) => state.cart);

  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [couponLoading, setCouponLoading] = useState<boolean>(false);

  const handleCoupon = async (code: string): Promise<void> => {
    if (code.trim() === "") return;

    setErr(null);
    setCouponLoading(true);
    const action = await dispatch(applyCoupon(code));
    if (applyCoupon.rejected.match(action)) {
      setErr(action.payload as string);
    }
    setCouponLoading(false);
  };

  const handleCheckout = async (): Promise<void> => {
    setErr(null);
    if (cartItems.length === 0) {
      setErr("Cart is empty");
      return;
    }

    setLoading(true);
    const action = await dispatch(verifyStock(cartItems));
    if (verifyStock.rejected.match(action)) {
      setErr(action.payload as string);
      setLoading(false);
      return;
    }

    if (coupon) {
      const action = await dispatch(applyCoupon(coupon));
      if (applyCoupon.rejected.match(action)) {
        setErr(action.payload as string);
        setLoading(false);
        return;
      }
    }

    setLoading(false);
    router.push("/checkout");
  };

  const handleRemoveCoupon = () => {
    dispatch(removeCoupon());
  };

  useEffect(() => {
    dispatch(refreshCartItems());
  }, []);

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
          <div className="bg-white w-full md:w-64 lg:w-96 layout-p">
            <h1 className="font-semibold sm:text-lg md:text-xl">
              Order summary
            </h1>
            <Summary />
            {coupon ? (
              <CouponApplied handleRemoveCoupon={handleRemoveCoupon} />
            ) : (
              <ApplyCoupon
                handleCoupon={handleCoupon}
                isLoading={couponLoading}
              />
            )}
            <p className="text-highlight text-sm mt-8">{err}</p>
            <button
              className="mt-4 btn btn-primary w-full"
              onClick={handleCheckout}
              disabled={loading}
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
