"use client";
import { AddReviewForm, SidebarLayout } from "@/components";
import React, { useRef, useState } from "react";

export type Image = { id: number; file: File; previewUrl: string };

const AddReview = () => {
  const fileInput1 = useRef<HTMLInputElement | null>(null);
  const fileInput2 = useRef<HTMLInputElement | null>(null);
  const fileInput3 = useRef<HTMLInputElement | null>(null);
  const fileInput4 = useRef<HTMLInputElement | null>(null);
  const [productRating, setProductRating] = useState(0);
  const [timeRating, setTimeRating] = useState(0);
  const [deliveryRating, setDeliveryRating] = useState(0);
  const [websiteRating, setWebsiteRating] = useState(0);
  const [images, setImages] = useState<Image[]>([]);

  const handleRatingChange = (rating: number, type: string) => {
    switch (type) {
      case "Product":
        setProductRating(rating);
        break;
      case "Time":
        setTimeRating(rating);
        break;
      case "Delivery":
        setDeliveryRating(rating);
        break;
      case "Website":
        setWebsiteRating(rating);
        break;
      default:
        break;
    }
  };

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
      <AddReviewForm
        fileRefs={{ fileInput1, fileInput2, fileInput3, fileInput4 }}
        ratings={{ productRating, timeRating, websiteRating, deliveryRating }}
        handleChangeImage={handleChangeImage}
        handleDeleteImage={handleDeleteImage}
        handleRatingChange={handleRatingChange}
        images={images}
      />
    </SidebarLayout>
  );
};

export default AddReview;
