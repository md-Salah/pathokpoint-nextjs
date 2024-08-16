import { Transaction } from '@/interface';
import { dateTime } from '@/utils';

const PaymentItem = ({ transaction }: { transaction: Transaction }) => {
  const { date, time } = dateTime(transaction.created_at);
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center space-x-2 pb-2 border-b border-b-black06 w-full text-xxs">
        <span className="bg-black07 py-[3px] px-2 rounded">{date}</span>
        <span className="bg-black07 py-[3px] px-2 rounded">{time}</span>
      </div>
      <div className="flex items-center justify-between w-full pt-2">
        <div className="space-y-1 text-xs text-black03">
          <p>Payment Method</p>
          <p className="font-bold">{transaction.gateway.name}</p>
        </div>
        <div className="space-y-1 text-xs text-black03">
          <p>Transaction ID</p>
          <p className="font-bold">{transaction.transaction_id}</p>
        </div>
        <div className="space-y-1 text-xs text-black03">
          <p>Amount</p>
          <p className="font-bold">৳{transaction.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentItem;
