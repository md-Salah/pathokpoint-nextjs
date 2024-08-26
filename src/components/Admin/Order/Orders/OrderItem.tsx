import Link from 'next/link';

import { Order } from '@/interface';
import { OrderStatusBadge } from '@/micro-components';
import { dateTime } from '@/utils';

interface Props {
  order: Order;
}

const OrderItem = ({ order }: Props) => {
  return (
    <tr className="hover h-12">
      <td className="text-black04 min-w-24">
        {dateTime(order.created_at).datetime}
      </td>
      <td>
        <Link
          href={`/admin/orders/view/${order.invoice}`}
          target="_blank"
          className="hover:underline block w-full"
        >
          {order.invoice}
        </Link>
      </td>
      <td>{order.address ? order.address.name : "-"}</td>
      <td className="text-black04">x{order.order_items.length}</td>
      <td>
        <div>{order.net_amount}৳</div>
        {order.net_amount !== order.total && (
          <div className="line-through text-xs text-black04">
            {order.total}৳
          </div>
        )}
      </td>
      <td>{order.paid}৳</td>
      <td>{order.is_full_paid ? order.due : 0}</td>
      <td>{order.is_full_paid ? 0 : order.due}</td>
      <td>
        {order.transactions.length > 0 && order.transactions[0].gateway.name}
      </td>
      <td>{order.courier ? order.courier.method_name : "-"}</td>
      <td>
        <OrderStatusBadge
          status={order.order_status[order.order_status.length - 1].status}
        />
      </td>
    </tr>
  );
};

export default OrderItem;
