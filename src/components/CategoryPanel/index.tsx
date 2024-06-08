import { categories } from "@/constants";
import { Category } from "@/interface";
import { isEnglish } from "@/utils";
import { MdOutlineNavigateNext } from "react-icons/md";

interface Props {
  selected: string | null;
  setSelected: (val: string | null) => void;
}

const CategoryPanel = ({ selected, setSelected }: Props) => {
  return (
    <div className="w-52 min-w-44 py-2 bg-white shadow-sm overflow-y-scroll h-96">
      <ul className="">
        {categories.map((cat) => (
          <li
            key={cat.id}
            onMouseEnter={() => setSelected(cat.id)}
            onClick={() => setSelected(cat.id)}
          >
            <Cat cat={cat} selected={selected} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;

const Cat = ({ cat, selected }: { cat: Category; selected: string | null }) => {
  return (
    <div
      className={`flex items-center justify-between text-black02 pl-6 pr-5 h-12 border-l-4 border-l-white 
        hover:text-primary hover:border-l-primary hover:bg-[#FF82001A] hover:cursor-pointer 
        ${
          cat.id === selected
            ? "text-primary border-l-primary bg-[#FF82001A]"
            : ""
        }`}
    >
      <h3
        className={`text-base truncate ${
          isEnglish(cat.name) ? "" : "font-bn"
        } w-11/12`}
      >
        {cat.name}
      </h3>
      <MdOutlineNavigateNext className="w-6" />
    </div>
  );
};
