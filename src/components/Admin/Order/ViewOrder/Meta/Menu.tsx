import { useRef } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';

import { Modal } from '@/components';
import { Order } from '@/interface';

import CopyText from './CopyText';
import DeleteOrder from './DeleteOrder';

interface Props {
  order: Order;
}

const Menu = ({ order }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm btn-circle"
      >
        <GoKebabHorizontal
          color="#363739"
          size={18}
          className="text-center rotate-90"
        />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-44"
      >
        <li
          onClick={() => {
            modalRef.current?.showModal();
          }}
        >
          <span>Delete Order</span>
        </li>
        <CopyText order={order} />
      </ul>

      <Modal modalRef={modalRef}>
        <DeleteOrder orderId={order.id} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Menu;
