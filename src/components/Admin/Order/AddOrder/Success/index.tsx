import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import { Order } from '@/interface';

import SuccessPopup from './SuccessPopup';

interface Props {
  order: Order | null;
  modalRef: React.RefObject<HTMLDialogElement>;
}

const Success = ({ order, modalRef }: Props) => {
  const router = useRouter();
  const closeModal = () => {
    modalRef.current?.close();
  };

  const handleOk = () => {
    closeModal();
    router.replace(`/admin/orders/view/${order?.invoice}`);
  }

  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal-box bg-white">
        <SuccessPopup order={order} handleOk={handleOk} />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Success;
