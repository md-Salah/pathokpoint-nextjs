import { CartItem } from "@/interface";
import { IoInformationCircleOutline } from "react-icons/io5";

const CartSummary = ({
  items,
  discount,
}: {
  items: CartItem[];
  discount: number;
}) => {
  const totalSum = items.reduce(
    (sum, item) => sum + item.count * item.sale_price,
    0
  );
  const grandTotal = totalSum + 100 - discount;

  return (
    <table className="mt-2 sm:mt-3 lg:mt-5 table text-xs table-px-0 dropdown">
      <tbody>
        <tr>
          <td className="pl-0">Sub total ({items.length} items)</td>
          <td></td>
          <td className="w-10">৳{totalSum}</td>
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
          <td>৳100</td>
        </tr>
        {discount > 0 && (
          <tr>
            <td>Voucher</td>
            <td>-</td>
            <td>৳{discount}</td>
          </tr>
        )}
        <tr className="font-bold">
          <td>Grand total</td>
          <td></td>
          <td>৳{grandTotal}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartSummary;
