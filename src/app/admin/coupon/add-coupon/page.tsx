"use client";
import { MultipleItemSelector, Sidebar } from "@/components";
import { SuggestionOpitonType } from "@/components/MultipleItemSelector";
import React, { useState } from "react";

const bookSuggestions = [
  {
    id: 1,
    title: "book 1",
  },
  {
    id: 2,
    title: "book 2",
  },
  {
    id: 3,
    title: "book 3",
  },
  {
    id: 4,
    title: "book 4",
  },
];
const conditionSuggestions = [
  {
    id: 1,
    title: "condition 1",
  },
  {
    id: 2,
    title: "condition 2",
  },
  {
    id: 3,
    title: "condition 3",
  },
  {
    id: 4,
    title: "condition 4",
  },
];
const authorSuggestions = [
  {
    id: 1,
    title: "author 1",
  },
  {
    id: 2,
    title: "author 2",
  },
  {
    id: 3,
    title: "author 3",
  },
  {
    id: 4,
    title: "author 4",
  },
];
const categorySuggestions = [
  {
    id: 1,
    title: "category 1",
  },
  {
    id: 2,
    title: "category 2",
  },
  {
    id: 3,
    title: "category 3",
  },
  {
    id: 4,
    title: "category 4",
  },
];
const publisherSuggestions = [
  {
    id: 1,
    title: "publisher 1",
  },
  {
    id: 2,
    title: "publisher 2",
  },
  {
    id: 3,
    title: "publisher 3",
  },
  {
    id: 4,
    title: "publisher 4",
  },
];
const tagSuggestions = [
  {
    id: 1,
    title: "tag 1",
  },
  {
    id: 2,
    title: "tag 2",
  },
  {
    id: 3,
    title: "tag 3",
  },
  {
    id: 4,
    title: "tag 4",
  },
];
const userSuggestions = [
  {
    id: 1,
    title: "user 1",
  },
  {
    id: 2,
    title: "user 2",
  },
  {
    id: 3,
    title: "user 3",
  },
  {
    id: 4,
    title: "user 4",
  },
];

const AddCoupon = () => {
  const [includedBooks, setIncludedBooks] = useState<SuggestionOpitonType[]>(
    []
  );
  const [includedConditions, setIncludedConditions] = useState<
    SuggestionOpitonType[]
  >([]);
  const [includedAuthors, setIncludedAuthors] = useState<
    SuggestionOpitonType[]
  >([]);
  const [includedCategories, setIncludedCategories] = useState<
    SuggestionOpitonType[]
  >([]);
  const [includedPublishers, setIncludedPublishers] = useState<
    SuggestionOpitonType[]
  >([]);
  const [includedTags, setIncludedTags] = useState<SuggestionOpitonType[]>([]);
  const [excludedBooks, setExcludedBooks] = useState<SuggestionOpitonType[]>(
    []
  );
  const [excludedAuthors, setExcludedAuthors] = useState<
    SuggestionOpitonType[]
  >([]);
  const [excludedCategories, setExcludedCategories] = useState<
    SuggestionOpitonType[]
  >([]);
  const [excludedPublishers, setExcludedPublishers] = useState<
    SuggestionOpitonType[]
  >([]);
  const [excludedTags, setExcludedTags] = useState<SuggestionOpitonType[]>([]);
  const [allowedUsers, setAllowedUsers] = useState<SuggestionOpitonType[]>([]);

  return (
    <div className="flex">
      <Sidebar />
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
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Expired Date</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label>Short Description</label>
            <div className="relative w-full">
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
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Use Limit</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Discount New</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Discount Old</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Max Discount New</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Max Discount Old</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Min Discount New</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Min Discount Old</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Include Conditions</label>
              <MultipleItemSelector
                value={includedConditions}
                setValue={setIncludedConditions}
                suggestions={conditionSuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Include Books</label>
              <MultipleItemSelector
                value={includedBooks}
                setValue={setIncludedBooks}
                suggestions={bookSuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Include Authors</label>
              <MultipleItemSelector
                value={includedAuthors}
                setValue={setIncludedAuthors}
                suggestions={authorSuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Include Categories</label>
              <MultipleItemSelector
                value={includedCategories}
                setValue={setIncludedCategories}
                suggestions={categorySuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Include Publishers</label>
              <MultipleItemSelector
                value={includedPublishers}
                setValue={setIncludedPublishers}
                suggestions={publisherSuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Include Tags</label>
              <MultipleItemSelector
                value={includedTags}
                setValue={setIncludedTags}
                suggestions={tagSuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Exclude Books</label>
              <MultipleItemSelector
                value={excludedBooks}
                setValue={setExcludedBooks}
                suggestions={bookSuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Exclude Authors</label>
              <MultipleItemSelector
                value={excludedAuthors}
                setValue={setExcludedAuthors}
                suggestions={authorSuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Exclude Categories</label>
              <MultipleItemSelector
                value={excludedCategories}
                setValue={setExcludedCategories}
                suggestions={categorySuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Exclude Publisher</label>
              <MultipleItemSelector
                value={excludedPublishers}
                setValue={setExcludedPublishers}
                suggestions={publisherSuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Exclude Tags</label>
              <MultipleItemSelector
                value={excludedTags}
                setValue={setExcludedTags}
                suggestions={tagSuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Allowed Users</label>
              <MultipleItemSelector
                value={allowedUsers}
                setValue={setAllowedUsers}
                suggestions={userSuggestions}
              />
            </div>
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
    </div>
  );
};

export default AddCoupon;
