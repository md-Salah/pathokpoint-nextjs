import Image from 'next/image';
import { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';

import { defaultSrc } from '@/constants';
import { User as UserInterface } from '@/interface';
import { dateTime } from '@/utils';

const User = ({ user }: { user: UserInterface }) => {
  const [viewEmail, setViewEmail] = useState(false);
  const [viewPhone, setViewPhone] = useState(false);

  const handleViewEmail = () => {
    setViewEmail(true);
    setTimeout(() => {
      setViewEmail(false);
    }, 10000);
  };

  const handleViewPhone = () => {
    setViewPhone(true);
    setTimeout(() => {
      setViewPhone(false);
    }, 10000);
  };

  return (
    <tr>
      <td>
        <figure className="w-8">
          <Image
            src={user.image?.src || defaultSrc.user}
            alt=""
            width={120}
            height={120}
          />
        </figure>
      </td>
      <td>{user.first_name + " " + user.last_name}</td>
      <td>{user.role}</td>
      <td>
        {viewEmail ? (
          user.email
        ) : (
          <div className="flex gap-2 items-center">
            <span>**********</span>
            <button
              className="btn btn-ghost btn-xs btn-circle"
              onClick={handleViewEmail}
            >
              <IoEyeOutline size="18" />
            </button>
          </div>
        )}
      </td>
      <td className="w-40">
        {user.phone_number && (
          <>
            {viewPhone ? (
              user.phone_number
            ) : (
              <>
                <span>**********</span>
                <button
                  className="btn btn-ghost btn-xs btn-circle"
                  onClick={handleViewPhone}
                >
                  <IoEyeOutline size="18" />
                </button>
              </>
            )}
          </>
        )}
      </td>
      <td className="capitalize">{user.gender}</td>
    </tr>
  );
};

export default User;
