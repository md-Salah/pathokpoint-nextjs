import { GoKebabHorizontal } from 'react-icons/go';

import { Order } from '@/interface';
import { OrderStatusBadge } from '@/micro-components';
import { dateTime } from '@/utils';

const OrderItem = ({
  order,
  dropdownTop = false,
}: {
  order: Order;
  dropdownTop?: boolean;
}) => {
  return (
    <tr className="hover">
      <td className="text-black04 min-w-24">
        {dateTime(order.created_at).date}
        <br />
        {dateTime(order.created_at).time}
      </td>
      <td>{order.invoice}</td>
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
      <td>{order.due}৳</td>
      <td>
        {order.transactions.length > 0 && order.transactions[0].gateway.name}
      </td>
      <td>{order.is_full_paid ? "Yes" : "COD"}</td>
      <td>
        <OrderStatusBadge
          status={order.order_status[order.order_status.length - 1].status}
        />
      </td>
      <td>
        <div
          className={`dropdown dropdown-end ${
            dropdownTop ? "dropdown-top" : "dropdown-bottom"
          }`}
        >
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle btn-sm"
          >
            <GoKebabHorizontal
              color="#363739"
              size={18}
              className="text-center rotate-90"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 z-[1]"
          >
            <li>
              <h6>View</h6>
            </li>
            <li>
              <h6>Delete</h6>
            </li>
            <li>
              <h6>Mark as Confirmed</h6>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default OrderItem;
