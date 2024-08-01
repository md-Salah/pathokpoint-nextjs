"use client";
import { AddAuthorForm } from "@/components";
import React, { useRef, useState } from "react";

export type Image = { file: File; previewUrl: string };

const AddAuthor = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [deathDate, setDeathDate] = useState<Date | null>(null);
  const fileInput1 = useRef<HTMLInputElement | null>(null);
  const fileInput2 = useRef<HTMLInputElement | null>(null);

  const [profileImage, setProfileImage] = useState<Image | null>(null);
  const [bannerImage, setBannerImage] = useState<Image | null>(null);

  const handleChangeBirthDate = (date: Date | null) => {
    setBirthDate(date);
  };

  const handleChangeDeathDate = (date: Date | null) => {
    setDeathDate(date);
  };

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
    <AddAuthorForm
      fileRefs={{ fileInput1, fileInput2 }}
      handleChangeProfileImage={handleChangeProfileImage}
      handleChangeBannerImage={handleChangeBannerImage}
      handleDeleteBannerImage={handleDeleteBannerImage}
      handleDeleteProfileImage={handleDeleteProfileImage}
      profileImage={profileImage}
      bannerImage={bannerImage}
      dates={{ birthDate, deathDate }}
      handleChangeBirthDate={handleChangeBirthDate}
      handleChangeDeathDate={handleChangeDeathDate}
    />
  );
};

export default AddAuthor;
