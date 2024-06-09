import { ReviewCard } from "@/components";
import { reviews } from "@/constants";
import { FiSearch } from "react-icons/fi";

const Test = () => {
  return (
    <div className="m-4 w-44 h-8">
      <label
        className={`w-full h-full input input-bordered flex items-center gap-2 rounded-3xl pr-2 bg-white font-bn
          focus-within:border-primary focus-within:outline-none
          `} 
      >
        <input type="text" className="grow w-full h-full" placeholder="Search" />
        <div className="bg-primary text-white rounded-full p-2 cursor-pointer">
          <FiSearch className="w-4 h-4" />
        </div>
      </label>
    </div>
  );
};

export default Test;
