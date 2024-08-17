"use client";
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Toast } from '@/micro-components';
import { RootState } from '@/redux/store';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

const PasswordContent = () => {
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [userData, setUserData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setBtnDisabled(false);
  };

  const { token } = useSelector((state: RootState) => state.auth);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userData.new_password !== userData.confirm_password) {
      setErr("New password and confirm password does not match");
      return;
    } else if (userData.current_password === userData.new_password) {
      setErr("New password and current password cannot be same");
      return;
    }
    setErr(null);
    setLoading(true);
    try {
      await axiosInstance.post("/auth/change-password", userData, {
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
    <form
      className="bg-white w-full py-10 md:py-14 block"
      onSubmit={handleSubmit}
    >
      {isSuccess && (
        <Toast
          msg="Password is changed successfully"
          handleClose={() => setIsSuccess(false)}
        />
      )}
      <div className="space-y-4 w-full max-w-sm px-5 mx-auto">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">
            Current Password
          </label>
          <input
            type="text"
            name="current_password"
            value={userData.current_password}
            onChange={handleChange}
            placeholder="Enter Current Password"
            className="input input-bordered bg-white text-base text-black02 w-full"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">
            New Password
          </label>
          <input
            type="text"
            name="new_password"
            value={userData.new_password}
            onChange={handleChange}
            placeholder="Enter New Password"
            className="input input-bordered bg-white text-base text-black02"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black03">
            Confirm Password
          </label>
          <input
            type="text"
            name="confirm_password"
            value={userData.confirm_password}
            onChange={handleChange}
            placeholder="Enter Confirm Password"
            className="input input-bordered bg-white text-base text-black02"
          />
        </div>

        <div className="mt-4 text-highlight">{err}</div>
        <button
          className="btn btn-primary px-10 text-base w-full"
          type="submit"
          disabled={btnDisabled}
        >
          {loading && <div className="loading loading-spinner"></div>}
          Update
        </button>
      </div>
    </form>
  );
};

export default PasswordContent;
