import Image from 'next/image';

import { Description } from '@/micro-components';
import { isEnglish } from '@/utils';

interface Props {
  name: string;
  dp: string;
  cover?: string;
  description?: string | null;
  handleFollow?: () => void;
  following?: boolean;
  handleUnfollow?: () => void;
  loading?: boolean;
}

const Profile = ({
  name,
  dp,
  cover,
  description,
  handleFollow,
  following,
  handleUnfollow,
  loading,
}: Props) => {
  return (
    <section className="bg-white pb-8 layout-container">
      <figure className="w-full h-24 sm:h-64 relative bg-gray-300">
        {cover && (
          <Image src={cover} alt="Banner" className="object-cover" fill />
        )}
      </figure>

      <div className="grid grid-cols-1 sm:grid-cols-4 px-8">
        <div className="flex justify-center sm:justify-end sm:pr-5">
          <figure className="relative max-w-24 max-h-24 w-24 h-24 lg:w-48 lg:h-48 lg:max-w-48 lg:max-h-48 -mt-10 lg:-mt-16 rounded-full border-4 border-black07 bg-white">
            <Image
              src={dp}
              alt={name}
              fill
              className="object-cover object-center rounded-full"
            />
          </figure>
        </div>
        <div className="col-span-3">
          <h1
            className={`mt-4 lg:mt-8 text-center sm:text-left font-semibold lg:font-bold text-sm lg:text-2xl ${
              !isEnglish(name) && "font-bn"
            }`}
          >
            {name}
          </h1>
          <div className="flex flex-col-reverse sm:flex-col items-center sm:items-start">
            {description && (
              <div className="mt-3 lg:mt-4">
                <Description text={description} char={120} />
              </div>
            )}

            {/* Follow Author */}
            {handleFollow && handleUnfollow && (
              <div className="mt-3 lg:mt-5">
                {following ? (
                  <button
                    className="btn btn-primary btn-outline btn-sm"
                    onClick={handleUnfollow}
                    disabled={loading}
                  >
                    {loading && (
                      <span className="loading loading-spinner"></span>
                    )}
                    Unfollow
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-outline btn-sm"
                    onClick={handleFollow}
                    disabled={loading}
                  >
                    {loading && (
                      <span className="loading loading-spinner"></span>
                    )}
                    Follow
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
