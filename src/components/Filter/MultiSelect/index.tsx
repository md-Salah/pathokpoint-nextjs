import { Author, Category, Publisher } from "@/interface";
import { isEnglish } from "@/utils";
import { FiSearch } from "react-icons/fi";

interface Props {
  title: string;
  filterBy: string;
  options: Category[] | Author[] | Publisher[];
  selectedSlug: string[];
  handleChange: (filterBy: string, slug: string) => void;
  resetFilter: (filterBy: string) => void;
  searchKey: string;
  searchValue: string;
  handleSearch: (searchKey: string, q: string) => void;
}

const MultiSelect = ({
  title,
  filterBy,
  options,
  handleChange,
  resetFilter,
  searchKey,
  searchValue,
  handleSearch,
  selectedSlug,
}: Props) => {
  const sortedItems = options.sort((a, b) => {
    const aSelected = selectedSlug.includes(a.slug) ? 1 : 0;
    const bSelected = selectedSlug.includes(b.slug) ? 1 : 0;
    return bSelected - aSelected;
  });

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center py-3 px-5 border-b">
        <h4 className="font-semibold text-black02 text-base">{title}</h4>
        <span
          className="font-semibold text-xs text-[#1A97D6] btn btn-xs btn-link"
          onClick={() => resetFilter(filterBy)}
        >
          Reset filter {selectedSlug.length > 0 && ` (${selectedSlug.length})`}
        </span>
      </div>
      <div className="px-5 pt-3 pb-5">
        <div className="form-control">
          <label className="input input-bordered input-sm flex items-center justify-between gap-2 bg-white overflow-hidden rounded-2xl">
            <input
              type="text"
              className="input-ghost min-w-0 flex-1"
              defaultValue={searchValue}
              onChange={(e) => handleSearch(searchKey, e.target.value)}
            />
            <FiSearch className="text-primary h-6 w-6" />
          </label>
        </div>
        <div className="mt-3 form-control h-48 overflow-y-scroll">
          {sortedItems.map((item) => (
            <label
              key={item.id}
              className="label py-1 pl-0 cursor-pointer justify-start gap-2 hover:underline"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-primary"
                checked={selectedSlug.includes(item.slug)}
                onChange={() => handleChange(filterBy, item.slug)}
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
