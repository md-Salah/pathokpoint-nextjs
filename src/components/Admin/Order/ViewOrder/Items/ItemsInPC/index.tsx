import { OrderItem as OrderItemInterface } from '@/interface';

import OrderItem from './OrderItem';

interface Props {
  order_items: OrderItemInterface[];
}

const ItemsInPC = ({ order_items }: Props) => {
  return (
    <div className="mt-4 overflow-x-auto min-h-48">
      <table className="table table-pin-rows">
        <thead className="">
          <tr>
            <th>Item</th>
            <th>Regular Price</th>
            <th>Sold Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {order_items.map((item: OrderItemInterface) => (
            <tr key={item.book.id}>
              <td>
                <OrderItem item={item} />
              </td>
              <td>{item.regular_price}৳</td>
              <td>{item.sold_price}৳</td>
              <td>x{item.quantity}</td>
              <td>{item.sold_price * item.quantity}৳</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsInPC;
