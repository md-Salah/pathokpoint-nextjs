import { GrNext } from "react-icons/gr";

const NextArrow = ({ handleNext, positionClass }: { handleNext: () => void, positionClass: string }) => (
  <button
    onClick={handleNext}
    className={`absolute z-10 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md opacity-60 hover:opacity-95 ${positionClass}`}
    aria-label="next"
  >
    <GrNext />
  </button>
);

export default NextArrow;
