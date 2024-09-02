import Link from 'next/link';

import { isEnglish } from '@/utils';

interface Props {
  name: string;
  href: string;
}

const Item = ({ name, href }: Props) => {
  return (
    <li>
      <Link
        href={href}
        className={`block py-[5px] truncate text-black02 ${
          isEnglish(name) ? "" : "font-bn"
        } hover:cursor-pointer hover:text-primary hover:underline visited:text-black05`}
      >
        {name}
      </Link>
    </li>
  );
};

export default Item;
