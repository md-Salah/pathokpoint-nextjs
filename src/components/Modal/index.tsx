import { IoCloseOutline } from 'react-icons/io5';

interface Props {
  modalRef: React.RefObject<HTMLDialogElement>;
  children: React.ReactNode;
}

const Modal = ({ children, modalRef }: Props) => {
  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <div className="modal-action mt-0">
          <form method="dialog">
            <button className="btn btn-sm btn-square bg-base-300 group">
              <IoCloseOutline
                size="20"
                className="text-black03 group-hover:text-black02"
              />
            </button>
          </form>
        </div>
        <div className="mt-2">{children}</div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default Modal;
