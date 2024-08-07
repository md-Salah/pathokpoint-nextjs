import { Author, Category, Publisher } from "@/interface";
import { isEnglish } from "@/utils";
import { FiSearch } from "react-icons/fi";

interface CategoryExtend extends Category {
  selected: boolean;
}

interface AuthorExtend extends Author {
  selected: boolean;
}

interface PublisherExtend extends Publisher {
  selected: boolean;
}

interface Props {
  title: string;
  options: CategoryExtend[] | AuthorExtend[] | PublisherExtend[];
  handleChange: (slug: string) => void;
  resetFilter: () => void;
  search: string;
  handleSearch: (text: string) => void;
}

const MultiSelect = ({
  title,
  options,
  handleChange,
  resetFilter,
  search,
  handleSearch,
}: Props) => {
  const selectedItems = options.filter((item) => item.selected);

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center py-3 px-5 border-b">
        <h4 className="font-semibold text-black02 text-base">{title}</h4>
        <span
          className="font-semibold text-xs text-[#1A97D6] btn btn-xs btn-link"
          onClick={resetFilter}
        >
          Reset filter{" "}
          {selectedItems.length > 0 && ` (${selectedItems.length})`}
        </span>
      </div>
      <div className="px-5 pt-3 pb-5">
        <div className="form-control">
          <label className="input input-bordered input-sm flex items-center justify-between gap-2 bg-white overflow-hidden rounded-2xl pr-2 focus-within:outline-none focus-within:border-primary">
            <input
              type="text"
              className="input-ghost min-w-0 flex-1"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <FiSearch className="text-primary" size={20} />
          </label>
        </div>
        <div className="mt-3 form-control h-48 overflow-y-scroll">
          {options.map((item) => (
            <label
              key={item.id}
              className="label py-1 pl-0 cursor-pointer justify-start gap-2 hover:underline"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-primary"
                checked={item.selected}
                onChange={() => handleChange(item.slug)}
              />
              <span
                className={`label-text ${!isEnglish(item.name) && "font-bn"}`}
              >
                {item.name}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
