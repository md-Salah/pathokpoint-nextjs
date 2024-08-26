import { Order } from '@/interface';
import { dateTime } from '@/utils';

import Menu from './Menu';
import Status from './Status';

interface Props {
  order: Order;
  refresh: () => void;
}

const Meta = ({ order, refresh }: Props) => {
  return (
    <div className="flex justify-between mb-2">
      <div>
        <h1 className="text-xl sm:text-2xl font-medium">
          Invoice {order.invoice}
        </h1>
        <span className="text-xs text-black03">
          {dateTime(order.created_at).datetime}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Status
          statuses={order.order_status}
          order_id={order.id}
          refresh={refresh}
        />
        <Menu />
      </div>
    </div>
  );
};

export default Meta;
