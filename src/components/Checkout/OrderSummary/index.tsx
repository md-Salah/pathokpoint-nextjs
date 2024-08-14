import { IoInformationCircleOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';

import { settings } from '@/constants';
import { RootState } from '@/redux/store';

const OrderSummary = () => {
  const {
    coupon,
    cartItems,
    subTotal,
    grandTotal,
    deliveryCharge,
    weightCharge,
    discount,
    isCashOnDelivery,
  } = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <h2 className="font-semibold sm:text-lg md:text-xl">Order summary</h2>
      <table className="mt-4 table text-sm table-px-0 table-no-border dropdown text-black02">
        <tbody>
          <tr>
            <td className="pl-0">Sub total ({cartItems.length} items)</td>
            <td></td>
            <td className="w-10">৳{subTotal}</td>
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
                className="dropdown-content dropdown-open font-bn left-0 right-0 z-[1] bg-white shadow-lg py-4 px-4 mt-4"
              >
                <p>{`Delivery charge: ${deliveryCharge} Tk`}</p>
                <p>{`Weight charge: ${weightCharge} Tk`}</p>
              </div>
            </td>
            <td></td>
            <td>৳{deliveryCharge + weightCharge}</td>
          </tr>
          {coupon && (
            <tr>
              <td>
                Voucher (<span className="text-xs">{coupon}</span>)
              </td>
              <td>-</td>
              <td>৳{discount}</td>
            </tr>
          )}
          <tr className="font-bold border-t">
            <td>Grand total</td>
            <td></td>
            <td>৳{grandTotal}</td>
          </tr>
          <tr>
            <td>Pay now</td>
            <td></td>
            <td>
              ৳{isCashOnDelivery ? settings.minAdvancePayment : grandTotal}
            </td>
          </tr>
          {isCashOnDelivery && (
            <tr>
              <td>Cash on delivery</td>
              <td></td>
              <td>৳{grandTotal - 100}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderSummary;
