"use client";

import AddCouponForm from "@/components/Admin/AdminCoupon/AddCouponForm";
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
    <AddCouponForm
      includedConditions={includedConditions}
      setIncludedConditions={setIncludedConditions}
      includedBooks={includedBooks}
      setIncludedBooks={setIncludedBooks}
      includedAuthors={includedAuthors}
      setIncludedAuthors={setIncludedAuthors}
      includedCategories={includedCategories}
      setIncludedCategories={setIncludedCategories}
      includedPublishers={includedPublishers}
      setIncludedPublishers={setIncludedPublishers}
      includedTags={includedTags}
      setIncludedTags={setIncludedTags}
      excludedBooks={excludedBooks}
      setExcludedBooks={setExcludedBooks}
      excludedAuthors={excludedAuthors}
      setExcludedAuthors={setExcludedAuthors}
      excludedCategories={excludedCategories}
      setExcludedCategories={setExcludedCategories}
      excludedPublishers={excludedPublishers}
      setExcludedPublishers={setExcludedPublishers}
      excludedTags={excludedTags}
      setExcludedTags={setExcludedTags}
      allowedUsers={allowedUsers}
      setAllowedUsers={setAllowedUsers}
      conditionSuggestions={conditionSuggestions}
      bookSuggestions={bookSuggestions}
      authorSuggestions={authorSuggestions}
      categorySuggestions={categorySuggestions}
      publisherSuggestions={publisherSuggestions}
      tagSuggestions={tagSuggestions}
      userSuggestions={userSuggestions}
    />
  );
};

export default AddCoupon;
