import { PiWarningCircleBold } from "react-icons/pi";

type Props = {
  handleYes: () => void;
  handleNo: () => void;
};

const LogoutModal = ({ handleYes, handleNo }: Props) => {
  return (
    <div className="modal-box rounded-lg bg-[#F3F5F6] flex flex-col items-center space-y-5 py-10">
      <div className="bg-primary bg-opacity-20 rounded-full p-2 w-fit">
        <PiWarningCircleBold color="#FF8200" size={36} />
      </div>
      <span className="text-2xl text-[#363739] font-bold">Are you sure ?</span>
      <div className="flex items-center space-x-4">
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
