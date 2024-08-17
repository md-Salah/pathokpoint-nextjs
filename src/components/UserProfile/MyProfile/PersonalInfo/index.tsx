"use client";

import React, { useState } from 'react';
import { BsGenderFemale, BsGenderMale, BsGenderTrans } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import { User } from '@/interface';
import { DateInput, Gender, Toast } from '@/micro-components';
import { RootState } from '@/redux/store';
import { isPhoneNumber } from '@/utils';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

import ProfilePicture from './ProfilePicture';

const PersonalInfo = ({ user }: { user: User }) => {
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [userData, setUserData] = useState({
    ...user,
    phone_number: user.phone_number?.replace("+88", "") || "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setBtnDisabled(false);
  };

  const handleGender = (gender: string) => {
    setUserData({
      ...userData,
      gender: gender,
    });
    setBtnDisabled(false);
  };

  const handleDOB = (date: string) => {
    setUserData({
      ...userData,
      date_of_birth: date,
    });
    setBtnDisabled(false);
  };

  const { token } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isPhoneNumber(userData.phone_number))
      return setErr("Invalid phone number. Please enter a valid phone number");

    setErr(null);
    setLoading(true);
    const payload = {
      first_name: userData.first_name,
      last_name: userData.last_name,
      phone_number: "+88" + userData.phone_number,
      date_of_birth: userData.date_of_birth,
      gender: userData.gender,
    };
    try {
      await axiosInstance.patch("/user/me", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsSuccess(true);
      setBtnDisabled(true);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white p-4 md:p-6 lg:p-10">
      <ProfilePicture />
      <form onSubmit={handleSubmit} className="block mt-10">
        {isSuccess && (
          <Toast
            msg="Profile updated successfully"
            handleClose={() => setIsSuccess(false)}
          />
        )}
        <h3 className="border-b py-2 mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-sm lg:max-w-[48rem] mx-auto gap-4 lg:gap-7 sm:mb-10">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-black03">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              value={userData.first_name}
              placeholder="Enter First Name"
              className="input input-bordered bg-white text-base text-black02"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-black03">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className="input input-bordered bg-white text-base text-black02"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-black03">
              Date of Birth
            </label>
            <DateInput
              currentDate={userData.date_of_birth}
              handleChange={handleDOB}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-black03">
              Phone Number
            </label>
            <label className="input input-bordered focus-within:outline-none focus-within:border-primary bg-white flex items-center gap-2">
              +88
              <input
                type="text"
                placeholder="01700001111"
                maxLength={11}
                className="grow bg-transparent"
                name="phone_number"
                value={userData.phone_number || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-black03">Gender</label>
            <Gender gender={userData.gender} handleChange={handleGender} />
          </div>
          <div className="w-full md:flex md:justify-end mt-4 text-highlight lg:col-span-2">
            {err}
          </div>
          <div className="w-full md:flex md:justify-end mt-2 lg:col-span-2">
            <button
              type="submit"
              className="btn btn-primary px-10 text-base w-full md:w-52"
              disabled={btnDisabled}
            >
              {loading && <div className="loading loading-spinner"></div>}
              Update
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PersonalInfo;
