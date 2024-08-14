"use client";

import { IoInformationCircleOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';

import { RootState } from '@/redux/store';

const Summary = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <table className="mt-2 sm:mt-3 lg:mt-5 table text-xs table-px-0 dropdown">
      <tbody>
        <tr>
          <td className="pl-0">Sub total ({cart.cartItems.length} items)</td>
          <td></td>
          <td className="w-10">৳{cart.subTotal}</td>
        </tr>
        <tr>
          <td>
            Delivery charge
            <IoInformationCircleOutline
              tabIndex={0}
              role="button"
              className="inline-block w-4 h-4 ml-1"
            />
            <div
              tabIndex={0}
              className="dropdown-content dropdown-open font-bn left-0 right-0 z-[1] bg-white shadow-lg py-8 px-4 mt-4"
            >
              বইয়ের পরিমাণ, আপনার ঠিকানা ও কুরিয়ার অনুযায়ী ডেলিভারি চার্জ
              নির্ধারণ করা হবে।
            </div>
          </td>
          <td></td>
          <td>৳{cart.deliveryCharge}</td>
        </tr>
        {cart.coupon && (
          <tr>
            <td>Voucher</td>
            <td>-</td>
            <td>৳{cart.discount}</td>
          </tr>
        )}
        <tr className="font-bold">
          <td>Grand total</td>
          <td></td>
          <td>৳{cart.grandTotal}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Summary;
