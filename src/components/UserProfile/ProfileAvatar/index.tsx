import Image from 'next/image';

import { defaultSrc } from '@/constants';
import { useUser } from '@/hooks';

const ProfileAvatar = () => {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center space-y-2 py-6">
      <div className="avatar online">
        <div className="w-20 h-20 rounded-full">
          <Image
            src={defaultSrc.user}
            alt="avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <h2 className="text-sm font-medium text-[#363739] mx-4 text-center">
        {user && `${user.first_name} ${user.last_name}`}
      </h2>
    </div>
  );
};

export default ProfileAvatar;
