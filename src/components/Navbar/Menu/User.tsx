import Image from 'next/image';
import Link from 'next/link';

import { defaultSrc } from '@/constants';
import { useUser } from '@/hooks';

type Props = {
  handleClose: () => void;
};

const User = ({ handleClose }: Props) => {
  const { user } = useUser();
  return (
    <div className="bg-primary py-4 px-7">
      <div className="avatar mask mask-squircle h-12 w-12">
        <Image
          src={user?.src || defaultSrc.user}
          alt="Photo"
          width={48}
          height={48}
        />
      </div>
      {user ? (
        <div className='mt-1'>
          <h3 className="text-white text-lg">
            {user.first_name + " " + user.last_name}
          </h3>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <Link
            href="/auth/login"
            className="text-white btn btn-sm btn-link"
            onClick={handleClose}
          >
            Login
          </Link>
          <span className="text-white">|</span>
          <Link
            href="/auth/signup"
            className="text-white btn btn-sm btn-link"
            onClick={handleClose}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;
