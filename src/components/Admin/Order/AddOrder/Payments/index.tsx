"use client";
import { useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { AddPaymentForm } from '@/components/Admin/Order/Common';
import { TransactionInput } from '@/interface';
import { addTransaction, removeTransaction } from '@/redux/features/admin-cart-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { validateTransaction } from '@/utils/validate';

const initialTransaction: TransactionInput = {
  payment_method: "",
  account_number: "",
  transaction_id: "",
  amount: "",
};

const Payments = () => {
  const ref = useRef<HTMLDialogElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { transactions } = useSelector((state: RootState) => state.adminCart);

  const [err, setErr] = useState<string | null>(null);
  const [transaction, setTransaction] =
    useState<TransactionInput>(initialTransaction);

  const handleSubmit = async () => {
    const validationErr = validateTransaction(transaction);
    if (validationErr) {
      setErr(validationErr);
    } else {
      setErr(null);
      dispatch(addTransaction({ ...transaction, amount: +transaction.amount }));
      ref.current?.close();
    }
  };

  return (
    <div className="admin-container admin-mt lg:p-10 bg-white">
      <div className="flex justify-between items-baseline border-b pb-2">
        <h4 className="text-base">Payment</h4>
        <button
          className="btn btn-outline btn-sm btn-primary"
          onClick={() => ref.current?.showModal()}
        >
          <AiOutlinePlus className="inline-block" />
          Add Payment
        </button>
        <dialog className="modal" ref={ref}>
          <AddPaymentForm
            handleSubmit={handleSubmit}
            transaction={transaction}
            setTransaction={setTransaction}
            err={err}
          />
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      {transactions.length > 0 && (
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Payment Method</th>
              <th>Account Number</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.payment_method}</td>
                <td>{transaction.account_number}</td>
                <td>{transaction.transaction_id}</td>
                <td>{transaction.amount}</td>
                <td>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() =>
                      dispatch(removeTransaction(transaction.transaction_id))
                    }
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Payments;
