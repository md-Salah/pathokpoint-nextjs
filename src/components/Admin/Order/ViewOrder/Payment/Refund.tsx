import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import { paymentGateway, TransactionInput } from '@/interface';
import { RootState } from '@/redux/store';
import { capitalize } from '@/utils';
import axiosInstance, { extractAxiosErr, fetcher } from '@/utils/axiosConfig';
import { validateTransaction } from '@/utils/validate';

const initialTransaction: TransactionInput = {
  payment_method: "",
  account_number: "",
  transaction_id: "",
  reference: null,
  refund_reason: null,
  amount: "",
};

interface Props {
  order_id: string;
  refresh: () => void;
}

const Refund = ({ order_id, refresh }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [transaction, setTransaction] =
    useState<TransactionInput>(initialTransaction);

  const { token } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async () => {
    const validationErr = validateTransaction(transaction);
    if (validationErr) {
      setErr(validationErr);
    } else {
      setErr(null);
      setLoading(true);
      try {
        await axiosInstance.post(
          "/transaction/refund",
          { ...transaction, order_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSuccess(true);
      } catch (error) {
        setErr(extractAxiosErr(error));
      } finally {
        setLoading(false);
      }
    }
  };

  const handleOk = () => {
    ref.current?.close();
    setSuccess(false);
    setTransaction(initialTransaction);
    refresh();
  };

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
    <div>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => ref.current?.showModal()}
      >
        Refund
      </button>
      <dialog className="modal" ref={ref}>
        {success ? (
          <div className="modal-box bg-white">
            <div className="mx-auto my-4 max-w-sm">
              <div className="flex flex-col py-24 gap-4 items-center">
                <IoCheckmarkCircleOutline size="64" className="text-success" />
                <p className="text-center text-2xl">Refund successful</p>
              </div>
              <button className="btn btn-primary w-full" onClick={handleOk}>
                Ok
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-box bg-white">
            <div className="space-y-4 max-w-sm mx-auto my-4">
              <label className="form-control gap-1">
                <span className="label-text">Gateway</span>
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
                <span className="label-text">Reference</span>
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  placeholder="Order #1234"
                  maxLength={20}
                  name="reference"
                  value={transaction.reference || ""}
                  onChange={handleChange}
                />
              </label>
              <label className="form-control gap-1">
                <span className="label-text">Refund Reason</span>
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  placeholder="order cancelled"
                  maxLength={100}
                  name="refund_reason"
                  value={transaction.refund_reason || ""}
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
        )}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Refund;
