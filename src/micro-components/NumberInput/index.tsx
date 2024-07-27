import { HiMinus, HiPlus } from "react-icons/hi2";

const NumberInput = ({
  min,
  max,
  size = "xs",
  value,
  setValue,
}: {
  min: number;
  max: number;
  size?: string;
  value: number;
  setValue: (value: number) => void;
}) => {
  const handleIncrement = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  return (
    <div className="flex items-center justify-end">
      <button
        onClick={handleDecrement}
        className={`btn btn-xs bg-black07 rounded ${
          value == min && "btn-disabled"
        } ${size === "xxs" ? "w-6 h-6" : "w-[30px] h-[30px]"} `}
      >
        <HiMinus className="min-w-3 min-h-3" />
      </button>
      <input
        type="text"
        className={`text-center bg-black07 rounded text-xs ${
          size === "xxs" ? "w-9 h-6" : "w-[42px] h-[30px]"
        } ${size === "xxs" ? "mx-0.5" : "mx-1"} `}
        value={value}
        readOnly
        min={min}
        max={max}
      />
      <button
        onClick={handleIncrement}
        className={`btn btn-xs bg-black07 rounded ${
          value == max && "btn-disabled"
        } ${size === "xxs" ? "w-6 h-6" : "w-[30px] h-[30px]"} `}
      >
        <HiPlus className="min-w-3 min-h-3" />
      </button>
    </div>
  );
};

export default NumberInput;