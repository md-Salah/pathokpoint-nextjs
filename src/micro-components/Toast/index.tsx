import { IoCheckmarkCircleOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';

const Toast = ({
  msg,
  successMode = true,
  handleClose,
}: {
  msg: string;
  successMode?: boolean;
  handleClose: () => void;
}) => {
  setTimeout(() => {
    handleClose();
  }, 4000);

  return (
    <div
      className={`toast toast-center toast-top top-36 text-white rounded shadow-lg ${
        successMode ? "bg-primary" : "bg-highlight"
      }`}
    >
      <div className="flex items-center gap-3">
        <span>
          {successMode ? (
            <IoCheckmarkCircleOutline size="22" />
          ) : (
            <IoInformationCircleOutline size="22" />
          )}
        </span>
        <span>{msg}</span>
        <span
          className={`border hover:border-white p-1 rounded cursor-pointer ${
            successMode ? "border-primary" : "border-highlight"
          }`}
          onClick={handleClose}
        >
          <RxCross1 size="15" />
        </span>
      </div>
    </div>
  );
};

export default Toast;
