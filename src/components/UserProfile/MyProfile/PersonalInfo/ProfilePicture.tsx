import Image from 'next/image';
import { useRef, useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';

import { defaultSrc } from '@/constants';
import { useToken } from '@/hooks';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

type Image = { file: File; previewUrl: string };

const ProfilePicture = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<Image | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);

  const { token } = useToken();

  const handleChangeProfileImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newImage: Image = {
      file: event.target.files?.[0] as File,
      previewUrl: URL.createObjectURL(event.target.files?.[0] as File),
    };

    setProfileImage(newImage);
    setEditMode(true);
  };

  const handleUpdate = async () => {
    if (!profileImage) {
      setErr("Please select an image");
      return;
    }
    try {
      setErr(null);
      setLoading(true);

      const formData = new FormData();
      formData.append("files", profileImage.file);

      await axiosInstance.post("/image/user?is_profile_pic=true", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess(true);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setProfileImage(null);
    setEditMode(false);
    setErr(null);
    setSuccess(false);
  };

  return (
    <div className="w-full flex flex-col items-center lg:items-start">
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
            <RiPencilFill color="#ffffff" size={28} className="mx-auto my-2" />
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
      {false && (
        <div className="mt-1 flex flex-col items-center">
          {err && <p className="text-highlight text-sm mt-2">{err}</p>}
          {loading && <p className="mt-2 loading loading-dots"></p>}
          {success && (
            <p className="text-primary text-sm mt-2">Profile image updated</p>
          )}
          <div className="mt-2 flex gap-2">
            <button
              className="btn btn-primary btn-sm w-24"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="btn btn-error btn-sm w-24"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;
