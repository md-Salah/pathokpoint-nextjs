"use client";
import { AddBookForm, Sidebar, SidebarLayout } from "@/components";
import Image from "next/image";
import React, { Ref, useEffect, useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

export type Image = { id: number; file: File; previewUrl: string };

const AddBook = () => {
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
    <SidebarLayout>
      <AddBookForm
        fileRefs={{ fileInput1, fileInput2, fileInput3, fileInput4 }}
        handleDeleteImage={handleDeleteImage}
        handleChangeImage={handleChangeImage}
        images={images}
      />
    </SidebarLayout>
  );
};

export default AddBook;
