import { PiWarningCircle } from 'react-icons/pi';

type Props = {
  handleYes: () => void;
  handleNo: () => void;
};

const LogoutModal = ({ handleYes, handleNo }: Props) => {
  return (
    <div className="modal-box rounded-lg bg-white flex flex-col items-center">
      <div className="w-20 h-20 bg-[#EE485C1A] rounded-full flex items-center justify-center">
        <PiWarningCircle className="text-primary" size="36" />
      </div>
      <span className="mt-3 text-2xl text-black02 font-semibold">
        Are you sure?
      </span>
      <div className="mt-8 flex items-center gap-4">
        <button
          className="btn btn-secondary btn-sm  text-white w-36"
          onClick={handleYes}
        >
          Yes
        </button>
        <button
          className="btn btn-secondary btn-sm btn-outline w-36"
          onClick={handleNo}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
