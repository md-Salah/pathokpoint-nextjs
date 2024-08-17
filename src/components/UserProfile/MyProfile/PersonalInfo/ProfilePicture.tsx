import Image from 'next/image';
import { useRef, useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';

import { defaultSrc } from '@/constants';

type Image = { file: File; previewUrl: string };

const ProfilePicture = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<Image | null>(null);

  const handleChangeProfileImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newImage: Image = {
      file: event.target.files?.[0] as File,
      previewUrl: URL.createObjectURL(event.target.files?.[0] as File),
    };

    setProfileImage(newImage);
  };
  return (
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
    </div>
  );
};

export default ProfilePicture;
