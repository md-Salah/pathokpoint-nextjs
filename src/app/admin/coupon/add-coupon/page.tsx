"use client";

import React, { useState } from 'react';

import AddCouponForm from '@/components/Admin/AdminCoupon/AddCouponForm';

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
  const [includedBooks, setIncludedBooks] = useState<any[]>(
    []
  );
  const [includedConditions, setIncludedConditions] = useState<
    any[]
  >([]);
  const [includedAuthors, setIncludedAuthors] = useState<
    any[]
  >([]);
  const [includedCategories, setIncludedCategories] = useState<
    any[]
  >([]);
  const [includedPublishers, setIncludedPublishers] = useState<
    any[]
  >([]);
  const [includedTags, setIncludedTags] = useState<any[]>([]);
  const [excludedBooks, setExcludedBooks] = useState<any[]>(
    []
  );
  const [excludedAuthors, setExcludedAuthors] = useState<
    any[]
  >([]);
  const [excludedCategories, setExcludedCategories] = useState<
    any[]
  >([]);
  const [excludedPublishers, setExcludedPublishers] = useState<
    any[]
  >([]);
  const [excludedTags, setExcludedTags] = useState<any[]>([]);
  const [allowedUsers, setAllowedUsers] = useState<any[]>([]);

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
