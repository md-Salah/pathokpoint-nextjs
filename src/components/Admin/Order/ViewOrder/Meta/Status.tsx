import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { orderStatusAdmin } from '@/constants';
import { OrderStatus } from '@/interface';
import { OrderStatusBadge } from '@/micro-components';
import { RootState } from '@/redux/store';
import { dateTime, title } from '@/utils';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

interface StatusIn {
  status: string;
  note: string | null;
  notify_customer: boolean;
}

const initialStatus: StatusIn = {
  status: "",
  note: "",
  notify_customer: false,
};

interface Props {
  order_id: string;
  statuses: OrderStatus[];
  refresh: () => void;
}

const Status = (props: Props) => {
  const { order_id, statuses, refresh } = props;
  const [isAdding, setIsAdding] = useState(false);
  const [newStatus, setNewStatus] = useState<StatusIn>(initialStatus);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const ref = useRef<HTMLDialogElement>(null);

  const { token } = useSelector((state: RootState) => state.auth);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewStatus({ ...newStatus, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!newStatus.status) {
      setErr("Please select a status");
      return;
    }
    setLoading(true);
    try {
      await axiosInstance.patch(
        `/order/${order_id}`,
        {
          order_status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsAdding(false);
      refresh();
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const toggleNotifyCustomer = () =>
    setNewStatus({
      ...newStatus,
      notify_customer: !newStatus.notify_customer,
    });

  const handleCancel = () => {
    setNewStatus(initialStatus);
    setErr(null);
    setIsAdding(false);
  };

  return (
    <div>
      <div onClick={() => ref.current?.showModal()} className="cursor-pointer">
        <OrderStatusBadge status={statuses[statuses.length - 1].status} />
      </div>
      <dialog className="modal" ref={ref}>
        {isAdding ? (
          <div className="modal-box bg-white py-10">
            <div className="max-w-sm mx-auto space-y-4">
              <label className="form-control gap-1">
                <span className="label-text">Status</span>
                <select
                  className="select select-bordered bg-white focus-within:outline-none focus-within:border-primary"
                  value={newStatus.status}
                  name="status"
                  onChange={handleChange}
                >
                  <option value="">Select status</option>
                  {orderStatusAdmin
                    .filter((st) => !statuses.some((s) => s.status === st))
                    .map((status) => (
                      <option key={status} value={status}>
                        {title(status.replace(/-/g, " "))}
                      </option>
                    ))}
                </select>
              </label>
              <label className="form-control gap-1">
                <span className="label-text">Note to customer (optional)</span>
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  placeholder="Your order is on the way"
                  name="note"
                  value={newStatus.note || ""}
                  onChange={handleChange}
                />
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs checkbox-primary"
                  name="notify_customer"
                  checked={newStatus.notify_customer}
                  onChange={toggleNotifyCustomer}
                />
                <span className="label-text font-medium">Notify customer</span>
              </label>
              {err && <p className=" text-highlight text-center">{err}</p>}
              <div className="grid grid-cols-2 gap-2">
                <button
                  className="btn btn-primary w-full"
                  disabled={loading}
                  onClick={handleSubmit}
                >
                  {loading && <div className="loading loading-spinner"></div>}
                  Submit
                </button>
                <button
                  className="btn btn-error btn-outline w-full"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal-box bg-white p-10">
            <div className="mx-auto w-fit">
              <ul className="steps steps-vertical">
                {statuses.map((status, index) => (
                  <li
                    key={index}
                    className="step step-success"
                    data-content="✔"
                  >
                    <div className="flex flex-col items-start gap-1 px-2">
                      <span className="text-xs font-medium">
                        {title(status.status.replace(/-/g, " "))}
                      </span>
                      {status.created_at && (
                        <span className="text-black04 text-xxs">
                          {dateTime(status.created_at).datetime}
                        </span>
                      )}
                      <p className="text-xxs max-w-80 text-black04">{status.note}</p>
                    </div>
                  </li>
                ))}
                <li
                  className="step cursor-pointer"
                  data-content="+"
                  onClick={() => setIsAdding(true)}
                ></li>
              </ul>
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

export default Status;
