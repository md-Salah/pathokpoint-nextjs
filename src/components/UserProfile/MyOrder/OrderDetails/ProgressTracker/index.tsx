import { orderStatus } from '@/constants';
import { OrderStatus } from '@/interface';

import Step from './Step';

const ProgressTracker = ({ order_status }: { order_status: OrderStatus[] }) => {
  const getStatus = () => {
    const current = order_status[order_status.length - 1];
    let all = orderStatus.map((sts) => {
      const st = order_status.find((s) => s.status === sts.status);
      return st ? { ...st, isSuccess: true } : sts;
    });

    if (current.status === "cancelled") {
      all.pop(); // remove the delivered status
      all.push({ ...current, isSuccess: true });
    }
    return all;
  };
  const steps = getStatus();

  return (
    <div className="w-full p-4 lg:p-7 lg:mt-4">
      <div className="mx-auto w-fit">
        <ul className="steps steps-vertical lg:steps-horizontal">
          {steps.map((status, index) => (
            <Step key={index} status={status} />
          ))}
        </ul>
      </div>
      {order_status.length > 0 &&
        order_status[order_status.length - 1].note && (
          <div className="text-black04 mt-4 mb-2 text-center text-sm">
            Note: {order_status[order_status.length - 1].note}
          </div>
        )}
    </div>
  );
};

export default ProgressTracker;
