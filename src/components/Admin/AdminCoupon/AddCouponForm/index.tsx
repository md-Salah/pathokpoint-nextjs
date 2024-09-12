import React from 'react';

import { MultipleItemSelector } from '@/components';

type Props = {
  includedConditions: any[];
  setIncludedConditions: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  includedBooks: any[];
  setIncludedBooks: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  includedAuthors: any[];
  setIncludedAuthors: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  includedCategories: any[];
  setIncludedCategories: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  includedPublishers: any[];
  setIncludedPublishers: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  includedTags: any[];
  setIncludedTags: React.Dispatch<React.SetStateAction<any[]>>;
  excludedBooks: any[];
  setExcludedBooks: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  excludedAuthors: any[];
  setExcludedAuthors: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  excludedCategories: any[];
  setExcludedCategories: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  excludedPublishers: any[];
  setExcludedPublishers: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  excludedTags: any[];
  setExcludedTags: React.Dispatch<React.SetStateAction<any[]>>;
  allowedUsers: any[];
  setAllowedUsers: React.Dispatch<React.SetStateAction<any[]>>;
  conditionSuggestions: any[];
  bookSuggestions: any[];
  authorSuggestions: any[];
  categorySuggestions: any[];
  publisherSuggestions: any[];
  tagSuggestions: any[];
  userSuggestions: any[];
};

const AddCouponForm = ({
  includedConditions,
  setIncludedConditions,
  includedBooks,
  setIncludedBooks,
  includedAuthors,
  setIncludedAuthors,
  includedCategories,
  setIncludedCategories,
  includedPublishers,
  setIncludedPublishers,
  includedTags,
  setIncludedTags,
  excludedBooks,
  setExcludedBooks,
  excludedAuthors,
  setExcludedAuthors,
  excludedCategories,
  setExcludedCategories,
  excludedPublishers,
  setExcludedPublishers,
  excludedTags,
  setExcludedTags,
  allowedUsers,
  setAllowedUsers,
  conditionSuggestions,
  bookSuggestions,
  authorSuggestions,
  categorySuggestions,
  publisherSuggestions,
  tagSuggestions,
  userSuggestions,
}: Props) => {
  return (
    <div className="bg-white rounded-md my-8 mx-auto w-[95%] sm:w-[50%]">
      <h4 className="text-secondary-content text-base px-6 py-3 font-semibold">
        Add Coupon
      </h4>
      <div className="border-[1px] border-[#E6E6E6]"></div>
      <div className="px-6 py-3 space-y-2 sm:px-14 sm:py-8 sm:space-y-8 text-[#6F6E77] text-xs sm:text-sm">
        <div className="grid grid-cols-2 grid-flow-row gap-3 sm:gap-8">
          <div className="flex flex-col items-start space-y-2">
            <label>Date</label>
            <span className="font-semibold">02 Jan, 2023</span>
          </div>
          <div></div>
          <div className="flex flex-col items-start space-y-2">
            <label>Coupon Code</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Expired Date</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label>Short Description</label>
          <div className="relative w-full md:w-[90%]">
            <textarea
              className="textarea textarea-sm sm:textarea-lg w-full relative z-0"
              placeholder="Enter Short Description"
            ></textarea>
            <span className="absolute right-2 bottom-2 z-20 text-xs">
              0/150 Words
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-3 sm:gap-8">
          <div className="flex flex-col items-start space-y-2">
            <label>Discount Type</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Use Limit</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Discount New</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Discount Old</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Max Discount New</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Max Discount Old</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Min Discount New</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Min Discount Old</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          {/* <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Include Conditions</label>
            <MultipleItemSelector
              value={includedConditions}
              setValue={setIncludedConditions}
              suggestions={conditionSuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Include Books</label>
            <MultipleItemSelector
              value={includedBooks}
              setValue={setIncludedBooks}
              suggestions={bookSuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Include Authors</label>
            <MultipleItemSelector
              value={includedAuthors}
              setValue={setIncludedAuthors}
              suggestions={authorSuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Include Categories</label>
            <MultipleItemSelector
              value={includedCategories}
              setValue={setIncludedCategories}
              suggestions={categorySuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Include Publishers</label>
            <MultipleItemSelector
              value={includedPublishers}
              setValue={setIncludedPublishers}
              suggestions={publisherSuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Include Tags</label>
            <MultipleItemSelector
              value={includedTags}
              setValue={setIncludedTags}
              suggestions={tagSuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Exclude Books</label>
            <MultipleItemSelector
              value={excludedBooks}
              setValue={setExcludedBooks}
              suggestions={bookSuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Exclude Authors</label>
            <MultipleItemSelector
              value={excludedAuthors}
              setValue={setExcludedAuthors}
              suggestions={authorSuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Exclude Categories</label>
            <MultipleItemSelector
              value={excludedCategories}
              setValue={setExcludedCategories}
              suggestions={categorySuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Exclude Publisher</label>
            <MultipleItemSelector
              value={excludedPublishers}
              setValue={setExcludedPublishers}
              suggestions={publisherSuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Exclude Tags</label>
            <MultipleItemSelector
              value={excludedTags}
              setValue={setExcludedTags}
              suggestions={tagSuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Allowed Users</label>
            <MultipleItemSelector
              value={allowedUsers}
              setValue={setAllowedUsers}
              suggestions={userSuggestions}
            />
          </div> */}
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="space-y-2 flex flex-col items-start">
            <label>Individual Use</label>
            <input type="checkbox" className="toggle toggle-primary" />
          </div>
          <div className="space-y-2 flex flex-col items-start">
            <label>Is Active</label>
            <input type="checkbox" className="toggle toggle-primary" />
          </div>
          <div className="space-y-2 flex flex-col items-start">
            <label>Free Shipping</label>
            <input type="checkbox" className="toggle toggle-primary" />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <button className="btn btn-outline btn-black05 px-3 rounded-lg">
            Cancel
          </button>
          <button className="btn bg-primary text-white px-8 rounded-lg">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCouponForm;
