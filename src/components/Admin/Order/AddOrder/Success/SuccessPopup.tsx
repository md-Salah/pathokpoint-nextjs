import { Order } from '@/interface';
import { NotFound, PaymentSuccessSVG } from '@/micro-components';

import CopyInvoice from './CopyInvoice';

interface Props {
  order: Order | null;
  handleOk: () => void;
}

const Success = ({ order, handleOk }: Props) => {
  if (!order)
    return <NotFound>
      <p className='text-black04'>Order not found</p>
    </NotFound>;
  return (
    <div className="mx-auto my-4 max-w-sm flex flex-col items-center">
      <h1 className="font-bold text-xl md:text-2xl">
        Order placed successfully.
      </h1>
      <div className="mt-7 w-64">
        <PaymentSuccessSVG />
      </div>
      <div className="mt-8 text-lg flex items-center gap-1">
        <p>
          Invoice&nbsp;
          <span className="text-primary font-semibold">#{order.invoice}</span>
        </p>
        <CopyInvoice invoice={order.invoice} />
      </div>
      <p className="mt-8">Total: {order.net_amount}৳</p>
      <p>
        Paid: {order.paid}৳, {order.is_full_paid ? "Due" : "COD"}: {order.due}৳
      </p>
      <button className="btn btn-primary w-full mt-8" onClick={handleOk}>
        Ok
      </button>
    </div>
  );
};

export default Success;
