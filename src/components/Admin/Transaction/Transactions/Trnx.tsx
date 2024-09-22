import { Transaction as TrnxInterface } from '@/interface';
import { dateTime } from '@/utils';

const Transaction = ({ trnx }: { trnx: TrnxInterface }) => {
  return (
    <tr>
      <td>
        <div className='min-w-24'>
        {dateTime(trnx.created_at).datetime}
        </div>
      </td>
      <td>
        <div className='min-w-32 break-words'>
        {trnx.gateway.name}
        </div>
      </td>
      {trnx.is_refund ? (
        <td className="text-error font-bold">-{trnx.amount}৳</td>
      ) : (
        <td className="text-success font-bold">{trnx.amount}৳</td>
      )}
      <td> {trnx.transaction_id}</td>
      <td> {trnx.reference}</td>
      <td>{trnx.is_manual ? "Admin" : "API"}</td>
    </tr>
  );
};

export default Transaction;
