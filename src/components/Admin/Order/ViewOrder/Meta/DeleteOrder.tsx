import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { useToken } from '@/hooks';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

interface Props {
  closeModal: () => void;
  orderId: string;
}

const DeleteOrder = ({ closeModal, orderId }: Props) => {
  const router = useRouter();
  const { token } = useToken();
  const [restock, setRestock] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axiosInstance.delete(`/order/${orderId}?restock=${restock}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess(true);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const handleOk = () => {
    closeModal();
    router.replace("/admin/orders");
  };

  return (
    <div className="max-w-sm mx-auto flex flex-col items-center mb-2">
      {success ? (
        <>
          <div className="my-8 flex flex-col items-center">
            <IoIosCheckmarkCircleOutline size="64" className="text-success" />
            <h2 className="mt-4 text-center text-2xl font-semibold">
              Successfully removed
            </h2>
          </div>
          <button className="mt-2 btn btn-primary w-96" onClick={handleOk}>
            Ok
          </button>
        </>
      ) : (
        <>
          <h2 className="text-center text-2xl font-semibold">Are you sure?</h2>
          <p className="text-center text-sm text-black04 mt-2">
            You are going to delete this order permanently.
          </p>

          <label className="label cursor-pointer w-fit gap-2 mt-12">
            <input
              type="checkbox"
              className="checkbox checkbox-xs checkbox-primary"
              checked={restock}
              onChange={() => setRestock(!restock)}
            />
            <span className="font-medium text-sm">Restock items</span>
          </label>
          <p className="text-error mt-2">{err}</p>
          <div className="grid grid-cols-2 gap-2 mt-4 w-full">
            <button
              className="btn btn-primary w-full max-w-48"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading && <span className="loading loading-spinner"></span>}
              Yes
            </button>
            <button
              className="btn btn-error btn-outline w-full max-w-48"
              onClick={closeModal}
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DeleteOrder;
