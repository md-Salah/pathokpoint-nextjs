import { useRef } from 'react';

import { Order } from '@/interface';

import SuccessPopup from './SuccessPopup';

interface Props {
  order: Order | null;
  modalRef: React.RefObject<HTMLDialogElement>;
}

const Success = ({ order, modalRef }: Props) => {
  const closeModal = () => {
    modalRef.current?.close();
  };
  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal-box bg-white">
        <SuccessPopup order={order} handleOk={closeModal} />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Success;
