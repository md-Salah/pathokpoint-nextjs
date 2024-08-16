"use client";
import 'react-datepicker/dist/react-datepicker.css';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { BsGenderFemale, BsGenderMale, BsGenderTrans } from 'react-icons/bs';
import { RiPencilFill } from 'react-icons/ri';

import { defaultSrc } from '@/constants';
import { useUser } from '@/hooks';
import { User } from '@/interface';

type Image = { file: File; previewUrl: string };

const PersonalInformationContent = ({user}: {user: User}) => {
  const fileInput = useRef<HTMLInputElement>(null);
  // const [dateofBirth, setDateofBirth] = useState<Date | null>(null);
  const [profileImage, setProfileImage] = useState<Image | null>(null);

  const [userData, setUserData] = useState(user);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeProfileImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newImage: Image = {
      file: event.target.files?.[0] as File,
      previewUrl: URL.createObjectURL(event.target.files?.[0] as File),
    };

    setProfileImage(newImage);
  };

  if(!user) return null;

  return (
    <div className="w-full bg-white p-4 md:p-6 lg:p-10">
      <div className="w-full flex justify-center md:block">
        <div className="avatar w-28 md:w-32">
          <div className="ring-primary relative w-full rounded-full ring-[1px] ring-offset-4 group cursor-pointer">
            <Image
              src={profileImage?.previewUrl || defaultSrc.user}
              alt="Profile Image"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div
              className="absolute -bottom-2 h-[40%] bg-primary bg-opacity-50 w-full hidden group-hover:block"
              onClick={() => fileInput.current?.click()}
            >
              <RiPencilFill
                color="#ffffff"
                size={28}
                className="mx-auto my-2"
              />
            </div>
            <input
              type="file"
              className="hidden"
              ref={fileInput}
              onChange={handleChangeProfileImage}
              accept="image/*"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 w-full sm:w-80 md:w-full mx-auto md:grid-cols-2 grid-flow-row md:gap-7 pt-10">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">First Name</label>
          <input
            type="text"
            name="first_name"
            value={userData.first_name}
            placeholder="Enter First Name"
            className="input input-bordered text-base text-black02"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={userData.last_name}
            onChange={handleChange}
            placeholder="Enter Last Name"
            className="input input-bordered text-base text-black02"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">
            Email Address
          </label>
          <input
            type="text"
            name = "email"
            value = {userData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="input input-bordered text-base text-black02"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">
            Date of Birth
          </label>
          <DatePicker
            selected={new Date(userData.date_of_birth || "")}
            // onChange={(date: Date | null) => handleChange}
            placeholderText="Enter Date of Birth"
            className="input input-bordered w-full outline-none text-sm sm:text-base"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">
            Phone Number
          </label>
          <input
            type="text"
            value={userData.phone_number || ""}
            name="phone_number"
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="input input-bordered text-base text-black02"
          />
        </div>
        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
          <div className="form-control">
            <label className="label cursor-pointer bg-black07 border border-black05 rounded px-2 md:px-4">
              <div className="flex items-center space-x-1 pr-2 text-base font-normal">
                <BsGenderMale size={20} />
                <span>Male</span>
              </div>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary radio-xs"
                defaultChecked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer bg-black07 border border-black05 rounded px-2 md:px-4">
              <div className="flex items-center space-x-1 pr-2 text-base font-normal">
                <BsGenderFemale size={20} />
                <span>Female</span>
              </div>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary radio-xs"
                defaultChecked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer bg-black07 border border-black05 rounded px-2 md:px-4">
              <div className="flex items-center space-x-1 pr-2 text-base font-normal">
                <BsGenderTrans size={20} />
                <span>Others</span>
              </div>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary radio-xs"
                defaultChecked
              />
            </label>
          </div>
        </div>
      </div>
      <div className="w-full md:flex md:justify-end pt-14">
        <button className="btn btn-primary px-10 text-base w-full md:w-fit">
          Update
        </button>
      </div>
    </div>
  );
};

export default PersonalInformationContent;
