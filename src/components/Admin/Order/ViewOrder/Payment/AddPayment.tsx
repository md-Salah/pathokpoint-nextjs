import { useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

import { AddPaymentForm } from '@/components/Admin/Order/Common';
import { useToken } from '@/hooks';
import { TransactionInput } from '@/interface';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';
import { validateTransaction } from '@/utils/validate';

const initialTransaction: TransactionInput = {
  payment_method: "",
  account_number: "",
  transaction_id: "",
  amount: "",
};

interface Props {
  order_id: string;
  refresh: () => void;
}

const AddPayment = ({ order_id, refresh }: Props) => {
  const { token } = useToken();
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);
  const [transaction, setTransaction] =
    useState<TransactionInput>(initialTransaction);

  const handleOk = () => {
    setTransaction(initialTransaction);
    setSuccess(false);
    ref.current?.close();
    refresh();
  };

  const handleSubmit = async () => {
    const validationErr = validateTransaction(transaction);
    if (validationErr) {
      setErr(validationErr);
    } else {
      setErr(null);
      setLoading(true);
      try {
        await axiosInstance.patch(
          `/order/${order_id}`,
          {
            transaction: transaction,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSuccess(true);
      } catch (err) {
        setErr(extractAxiosErr(err));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <button
        className="btn btn-outline btn-sm btn-primary"
        onClick={() => ref.current?.showModal()}
      >
        <AiOutlinePlus className="inline-block" />
        Add Payment
      </button>
      <dialog className="modal" ref={ref}>
        {success ? (
          <div className="modal-box bg-white">
            <div className="mx-auto my-4 max-w-sm">
              <div className="flex flex-col py-24 gap-4 items-center">
                <IoCheckmarkCircleOutline size="64" className="text-success" />
                <p className="text-center text-xl">
                  Payment is added successfully
                </p>
              </div>
              <button className="btn btn-primary w-full" onClick={handleOk}>
                Ok
              </button>
            </div>
          </div>
        ) : (
          <AddPaymentForm
            handleSubmit={handleSubmit}
            transaction={transaction}
            setTransaction={setTransaction}
            err={err}
            loading={loading}
          />
        )}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddPayment;
