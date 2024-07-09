import { IoInformationCircleOutline } from "react-icons/io5";

const OrderSummary = () => {
  const totalItems = 5;
  const totalSum = 500;
  const discount = 200;
  const deliveryCharge = 100;
  const weightCharge = 50;
  const grandTotal = totalSum + 100 - discount;

  return (
    <div>
      <h2 className="font-semibold sm:text-lg md:text-xl">Order summary</h2>
      <table className="mt-4 table text-sm table-px-0 table-no-border dropdown text-black02">
        <tbody>
          <tr>
            <td className="pl-0">Sub total ({totalItems} items)</td>
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
                className="dropdown-content dropdown-open font-bn left-0 right-0 z-[1] bg-white shadow-lg py-4 px-4 mt-4"
              >
                <p>{"Base charge: " + deliveryCharge + " Tk"}</p>
                <p>{"Weight charge: " + weightCharge + " Tk"}</p>
              </div>
            </td>
            <td></td>
            <td>৳{deliveryCharge}</td>
          </tr>
          {discount > 0 && (
            <tr>
              <td>Voucher</td>
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
            <td>৳{100}</td>
          </tr>
          <tr>
            <td>Cash on delivery</td>
            <td></td>
            <td>৳{grandTotal - 100}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderSummary;
