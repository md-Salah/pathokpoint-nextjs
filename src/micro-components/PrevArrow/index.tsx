import { GrPrevious } from "react-icons/gr";

const PrevArrow = ({ handlePrev, positionClass }: { handlePrev: () => void, positionClass: string }) => (
  <button
    onClick={handlePrev}
    className={`absolute z-10 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md opacity-60 hover:opacity-95 ${positionClass}`}
    aria-label="prev"
  >
    <GrPrevious />
  </button>
);

export default PrevArrow;
