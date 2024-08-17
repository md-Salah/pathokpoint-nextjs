import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi2';

const MenuItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="w-full flex item-end justify-between border-b border-b-black06 py-3"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-primary bg-opacity-10 p-2 rounded-full">{icon}</div>
        <span className="text-black0 text-sm">{text}</span>
      </div>
      <div className="pt-2">
        <HiChevronRight size={20} />
      </div>
    </Link>
  );
};

export default MenuItem;
