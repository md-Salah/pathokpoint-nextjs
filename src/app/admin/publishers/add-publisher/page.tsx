"use client";
import { AddPublisherForm } from "@/components/Admin/ProductManagement";
import React, { useRef, useState } from "react";

export type Image = {
  file: File;
  previewUrl: string;
};

const AddPublisher = () => {
  const fileInput1 = useRef<HTMLInputElement | null>(null);
  const fileInput2 = useRef<HTMLInputElement | null>(null);

  const [profileImage, setProfileImage] = useState<Image | null>(null);
  const [bannerImage, setBannerImage] = useState<Image | null>(null);

  const handleChangeProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileImage({
      file: e.target.files?.[0] as File,
      previewUrl: URL.createObjectURL(e.target.files?.[0] as File),
    });
  };

  const handleDeleteProfileImage = () => {
    setProfileImage(null);
  };

  const handleChangeBannerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBannerImage({
      file: e.target.files?.[0] as File,
      previewUrl: URL.createObjectURL(e.target.files?.[0] as File),
    });
  };

  const handleDeleteBannerImage = () => {
    setBannerImage(null);
  };

  return (
    <AddPublisherForm
      fileRefs={{ fileInput1, fileInput2 }}
      handleChangeProfileImage={handleChangeProfileImage}
      handleChangeBannerImage={handleChangeBannerImage}
      handleDeleteBannerImage={handleDeleteBannerImage}
      handleDeleteProfileImage={handleDeleteProfileImage}
      profileImage={profileImage}
      bannerImage={bannerImage}
    />
  );
};

export default AddPublisher;
