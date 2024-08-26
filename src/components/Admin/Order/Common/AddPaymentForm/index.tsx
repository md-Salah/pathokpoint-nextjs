import useSWR from 'swr';

import { paymentGateway, TransactionInput } from '@/interface';
import { capitalize } from '@/utils';
import { fetcher } from '@/utils/axiosConfig';

interface Props {
  handleSubmit: () => void;
  transaction: TransactionInput;
  setTransaction: (transaction: TransactionInput) => void;
  err: string | null;
  loading?: boolean;
}

const AddPaymentForm = (props: Props) => {
  const { transaction, setTransaction, handleSubmit, err, loading } = props;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };

  const { data, error } = useSWR("/payment_gateway/all", fetcher);

  return (
    <div className="modal-box bg-white">
      <div className="space-y-4 max-w-sm mx-auto my-4">
        <label className="form-control gap-1">
          <span className="label-text">Payment Method</span>
          <select
            className="select select-bordered bg-white focus-within:outline-none focus-within:border-primary"
            value={transaction.payment_method}
            name="payment_method"
            onChange={handleChange}
          >
            <option value="">Select payment method</option>
            {data &&
              data.map((item: paymentGateway) => (
                <option key={item.id} value={item.name}>
                  {capitalize(item.name.replace(/-/g, " "))}
                </option>
              ))}
          </select>
        </label>
        <label className="form-control gap-1">
          <span className="label-text">Account/Phone number</span>
          <input
            type="text"
            className="input input-bordered bg-white"
            placeholder="01311101110"
            maxLength={11}
            name="account_number"
            value={transaction.account_number}
            onChange={handleChange}
          />
        </label>
        <label className="form-control gap-1">
          <span className="label-text">Transaction ID</span>
          <input
            type="text"
            className="input input-bordered bg-white"
            placeholder="UYTRE123456"
            maxLength={20}
            name="transaction_id"
            value={transaction.transaction_id}
            onChange={handleChange}
          />
        </label>
        <label className="form-control gap-1">
          <span className="label-text">Amount</span>
          <input
            type="text"
            className="input input-bordered bg-white focus:outline-none focus:border-primary"
            placeholder="100"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
          />
        </label>
        {err && <p className="text-highlight text-sm">{err}</p>}
        {error && <p className="text-highlight text-sm">{error}</p>}
        <button className="btn btn-primary w-full" onClick={handleSubmit}>
          {loading && <div className="loading loading-spinner"></div>}
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddPaymentForm;
