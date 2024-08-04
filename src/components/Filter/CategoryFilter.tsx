import { Category } from "@/interface";
import { isEnglish } from "@/utils";
import { useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";

interface Props {
  categories: Category[];
  handleCategoryChange: (slug: string) => void;
  resetFilter: () => void;
  handleSearch: (q: string) => void;
}

const CategoryFilter = ({
  categories,
  handleCategoryChange,
  resetFilter,
  handleSearch,
}: Props) => {
  const searchParams = useSearchParams();

  const selectedCategories = new Set(
    searchParams.get("category__slug__in")?.split(",") || []
  );

  const sortedCategories = categories.sort((a, b) => {
    const aSelected = selectedCategories.has(a.slug) ? 1 : 0;
    const bSelected = selectedCategories.has(b.slug) ? 1 : 0;
    return bSelected - aSelected;
  });

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center py-3 px-5 border-b">
        <h4 className="font-semibold text-black02 text-base">Category</h4>
        <span
          className="font-semibold text-xs text-[#1A97D6] btn btn-xs btn-link"
          onClick={resetFilter}
        >
          Reset filter
        </span>
      </div>
      <div className="px-5 pt-3 pb-5">
        <div className="form-control">
          <label className="input input-bordered input-sm flex items-center justify-between gap-2 bg-white overflow-hidden rounded-2xl">
            <input
              type="text"
              className="input-ghost min-w-0 flex-1"
              defaultValue={searchParams.get("category_q")?.toString()}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <FiSearch className="text-primary h-6 w-6" />
          </label>
        </div>
        <div className="mt-3 form-control h-48 overflow-y-scroll">
          {sortedCategories.map((category) => (
            <label
              key={category.id}
              className="label py-1 pl-0 cursor-pointer justify-start gap-2 hover:underline"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-primary"
                checked={selectedCategories.has(category.slug)}
                onChange={() => handleCategoryChange(category.slug)}
              />
              <span
                className={`label-text ${
                  !isEnglish(category.name) && "font-bn"
                }`}
              >
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
