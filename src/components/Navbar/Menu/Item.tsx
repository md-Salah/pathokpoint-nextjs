import Link from 'next/link';

import { isEnglish } from '@/utils';

interface Props {
  name: string;
  href: string;
  handleClose?: () => void;
}

const Item = ({ name, href, handleClose }: Props) => (
  <li className={`${!isEnglish(name) && "font-bn"}`} onClick={handleClose}>
    <Link href={href} className="menu-item">
      {name}
    </Link>
  </li>
);

export default Item;
