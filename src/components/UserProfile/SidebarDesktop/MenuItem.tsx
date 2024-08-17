import Link from 'next/link';
import { ReactNode } from 'react';

const MenuItem = ({
  Icon,
  isSelected,
  text,
  href,
}: {
  Icon: ReactNode;
  isSelected: boolean;
  text: string;
  href: string;
}) => {
  return (
    <Link
      className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
        isSelected && "bg-primary bg-opacity-10 border-r-[6px] border-r-primary"
      } hover:bg-primary hover:bg-opacity-10 hover:border-r-[6px] hover:border-r-primary w-full`}
      href={href}
    >
      {Icon}
      <span className="text-black04 text-sm font-semibold">{text}</span>
    </Link>
  );
};

export default MenuItem;
