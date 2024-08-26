import { Order, Transaction } from '@/interface';
import { dateTime } from '@/utils';

import AddPayment from './AddPayment';
import Refund from './Refund';

interface Props {
  order: Order;
  refresh: () => void;
}

const Payment = ({ order, refresh }: Props) => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-baseline mb-2">
        <h1 className="text-lg font-medium">Payment</h1>
        <div className="flex items-center gap-2">
          <AddPayment order_id={order.id} refresh={refresh} />
          <Refund order_id={order.id} refresh={refresh} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows">
          <thead>
            <tr className="h-12">
              <th>Date</th>
              <th>Method</th>
              <th>Account Number</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Reference</th>
              <th>Is Manual</th>
              <th>Refunded by</th>
              <th>Refunded reason</th>
            </tr>
          </thead>
          <tbody>
            {order.transactions.map((trx: Transaction) => (
              <tr key={trx.id} className="h-12">
                <td>{dateTime(trx.created_at).datetime}</td>
                <td>{trx.gateway.name}</td>
                <td>{trx.account_number}</td>
                <td>{trx.transaction_id}</td>
                <td
                  className={`${
                    trx.is_refund ? "text-highlight" : "text-success"
                  }`}
                >
                  {trx.is_refund && "-"}
                  {trx.amount}
                </td>
                <td>{trx.reference}</td>
                <td>{trx.is_manual ? "Yes" : "No"}</td>
                <td>{trx.refunded_by?.username}</td>
                <td>{trx.refund_reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
