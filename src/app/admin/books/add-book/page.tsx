"use client";
import { AddBookForm } from "@/components/Admin/ProductManagement";
import { SuggestionOpitonType } from "@/components/MultipleItemSelector";
import Image from "next/image";
import React, { useRef, useState } from "react";

export type Image = { id: number; file: File; previewUrl: string };

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

const AddBook = () => {
  const [includedAuthors, setIncludedAuthors] = useState<
    SuggestionOpitonType[]
  >([]);
  const [includedTags, setIncludedTags] = useState<SuggestionOpitonType[]>([]);
  const [includedCategories, setIncludedCategories] = useState<
    SuggestionOpitonType[]
  >([]);
  const fileInput1 = useRef<HTMLInputElement | null>(null);
  const fileInput2 = useRef<HTMLInputElement | null>(null);
  const fileInput3 = useRef<HTMLInputElement | null>(null);
  const fileInput4 = useRef<HTMLInputElement | null>(null);

  const [images, setImages] = useState<Image[]>([]);

  const handleChangeImage = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newImage: Image = {
      id,
      file: event.target.files?.[0] as File,
      previewUrl: URL.createObjectURL(event.target.files?.[0] as File),
    };

    setImages((prev) => [...prev, newImage]);
  };

  const handleDeleteImage = (id: number) => {
    setImages((prev) => {
      const allImages = prev.filter((img) => img.id !== id);
      return allImages;
    });
  };

  return (
    <AddBookForm
      fileRefs={{ fileInput1, fileInput2, fileInput3, fileInput4 }}
      handleDeleteImage={handleDeleteImage}
      handleChangeImage={handleChangeImage}
      images={images}
      includedAuthors={includedAuthors}
      setIncludedAuthors={setIncludedAuthors}
      includedCategories={includedCategories}
      setIncludedCategories={setIncludedCategories}
      includedTags={includedTags}
      setIncludedTags={setIncludedTags}
      authorSuggestions={authorSuggestions}
      categorySuggestions={categorySuggestions}
      tagSuggestions={tagSuggestions}
    />
  );
};

export default AddBook;
