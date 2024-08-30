import Image from 'next/image';
import Link from 'next/link';

import { defaultSrc } from '@/constants';

const Logo = () => {
  return (
    <Link href="/" className='block'>
      <div className="w-[80px] md:w-[123px]">
        <Image
          alt="Pathok Point"
          src={defaultSrc.logo}
          priority
          width={123}
          height={40}
          className="text-xl font-bold"
        />
      </div>
    </Link>
  );
};

export default Logo;
