import { Order } from '@/interface';

interface Props {
  order: Order;
}

const Summary = ({ order }: Props) => {
  return (
    <div className="mt-8 flex w-full gap-3 flex-col lg:flex-row">
      <div className="bg-[#F6F6F6] w-full lg:w-1/3 p-4 lg:p-8 rounded">
        <h4>Customer Note:</h4>
        <p className="mt-2 text-black04 text-sm">
          {order.customer_note || "empty"}
        </p>
      </div>
      <div className="flex justify-end bg-[#F6F6F6] w-full lg:w-2/3 p4 lg:p-8 rounded">
        <div className="my-4 lg:my-0">
          <table className="table text-xs table-px-0 table-no-border w-72">
            <tbody>
              <tr>
                <td className="pl-0">Old book total</td>
                <td></td>
                <td className="w-12">৳{order.old_book_total}</td>
              </tr>
              <tr>
                <td>New book total</td>
                <td></td>
                <td>৳{order.new_book_total}</td>
              </tr>
              <tr className="border-t font-bold">
                <td>Sub total ({order.order_items.length} items)</td>
                <td></td>
                <td>৳{order.old_book_total + order.new_book_total}</td>
              </tr>
              <tr>
                <td>Delivery charge</td>
                <td></td>
                <td>৳{order.shipping_charge}</td>
              </tr>
              <tr>
                <td>Weight charge</td>
                <td></td>
                <td>৳{order.weight_charge}</td>
              </tr>
              <tr>
                <td>
                  Discount (
                  <span className="text-xs">{order.coupon?.code}</span>)
                </td>
                <td>-</td>
                <td>৳{order.discount}</td>
              </tr>
              <tr className="font-bold border-t">
                <td>Grand total</td>
                <td></td>
                <td>৳{order.net_amount}</td>
              </tr>
              <tr>
                <td>Paid</td>
                <td></td>
                <td>৳{order.paid}</td>
              </tr>
              {!order.is_full_paid ? (
                <tr>
                  <td>Cash on delivery</td>
                  <td></td>
                  <td>৳{order.due}</td>
                </tr>
              ) : (
                <tr>
                  <td>Due</td>
                  <td></td>
                  <td>৳{order.due}</td>
                </tr>
              )}
              {order.refunded > 0 && (
                <tr>
                  <td>Refunded</td>
                  <td></td>
                  <td>৳{order.refunded}</td>
                </tr>
              )}
              {order.payment_reversed > 0 && (
                <tr>
                  <td>Payment Reversed</td>
                  <td></td>
                  <td>৳{order.payment_reversed}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Summary;
