import { FiSearch } from "react-icons/fi";

import { categories, publishers } from "@/constants";
import { Category, Publisher } from "@/interface";
import { PriceRangeFilter } from "@/components";
import { isEnglish } from "@/utils";

const Filter = () => {
  return (
    <div className="flex flex-col gap-3">
      <CategoryFilter categories={categories} />
      <PublisherFilter publishers={publishers} />
      <ConditionFilter />
      <InStockFilter />
      <PriceRangeFilter />
    </div>
  );
};

export default Filter;

const CategoryFilter = ({ categories }: { categories: Category[] }) => (
  <div className="bg-white">
    <div className="flex justify-between items-center py-3 px-5 border-b">
      <h4 className="font-semibold text-black02 text-base">Category</h4>
      <span className="font-semibold text-xs text-[#1A97D6] btn btn-xs btn-link">
        Reset filter
      </span>
    </div>
    <div className="px-5 pt-3 pb-5">
      <div className="form-control">
        <label className="input input-bordered input-sm flex items-center justify-between gap-2 bg-white overflow-hidden rounded-2xl">
          <input type="text" className="input-ghost min-w-0 flex-1" />
          <FiSearch className="text-primary h-6 w-6" />
        </label>
      </div>
      <div className="mt-3 form-control h-48 overflow-y-scroll">
        {/* Sort checked items first */}
        {categories.map((category) => (
          <label
            key={category.id}
            className="label py-1 pl-0 cursor-pointer justify-start gap-2"
          >
            <input
              type="checkbox"
              className="checkbox checkbox-xs checkbox-primary"
            />
            <span
              className={`label-text ${!isEnglish(category.name) && "font-bn"}`}
            >
              {category.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  </div>
);

const PublisherFilter = ({ publishers }: { publishers: Publisher[] }) => (
  <div className="bg-white">
    <div className="flex justify-between items-center py-3 px-5 border-b">
      <h4 className="font-semibold text-black02 text-base">Publisher</h4>
      <span className="font-semibold text-xs text-[#1A97D6] btn btn-xs btn-link">
        Reset filter
      </span>
    </div>
    <div className="px-5 pt-3 pb-5">
      <div className="form-control">
        <label className="input input-bordered input-sm flex items-center justify-between gap-2 bg-white overflow-hidden rounded-2xl">
          <input type="text" className="input-ghost min-w-0 flex-1" />
          <FiSearch className="text-primary h-6 w-6" />
        </label>
      </div>
      <div className="mt-3 form-control h-44 overflow-y-scroll">
        {/* Sort checked items first */}
        {publishers.map((publisher) => (
          <label
            key={publisher.id}
            className="label py-1 pl-0 cursor-pointer justify-start gap-2"
          >
            <input
              type="checkbox"
              className="checkbox checkbox-xs checkbox-primary"
            />
            <span
              className={`label-text ${
                !isEnglish(publisher.name) && "font-bn"
              }`}
            >
              {publisher.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  </div>
);

const ConditionFilter = () => (
  <div className="bg-white">
    <div className="flex justify-between items-center py-3 px-5 border-b">
      <h4 className="font-semibold text-black02 text-base">Condition</h4>
    </div>
    <div className="px-5 pt-3 pb-5 form-control">
      <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-xs checkbox-primary"
        />
        <span className={`label-text`}>New</span>
      </label>
      <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-xs checkbox-primary"
        />
        <span className={`label-text`}>Old</span>
      </label>
      <div className="ml-4">
        <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
          />
          <span className={`label-text`}>Old like new</span>
        </label>
        <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
          />
          <span className={`label-text`}>Old good enough</span>
        </label>
        <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
          />
          <span className={`label-text`}>Old acceptable</span>
        </label>
      </div>
    </div>
  </div>
);

const InStockFilter = () => (
  <div className="bg-white form-control">
    <div className="flex justify-between items-center py-4 px-5">
      <h4 className="font-semibold text-black02 text-base">In Stock</h4>
      <input type="checkbox" className="toggle toggle-primary" defaultChecked />
    </div>
  </div>
);
