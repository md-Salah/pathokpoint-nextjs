import { Transaction } from '@/interface';
import { dateTime } from '@/utils';

const TransactionsTable = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <div className="bg-white overflow-x-auto p-4 lg:p-7">
      <table className="table table-px-0 w-full text-xs md:text-sm text-center">
        <thead className="bg-base-200">
          <tr>
            <th>Date</th>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Method</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{dateTime(transaction.created_at).datetime}</td>
              <td>{transaction.transaction_id}</td>
              <td>৳{transaction.amount}</td>
              <td>{transaction.gateway.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
