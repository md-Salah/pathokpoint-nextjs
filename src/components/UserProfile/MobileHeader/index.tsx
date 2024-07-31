import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

const MobileHeader = ({
  title,
  href = "/user",
}: {
  title: string;
  href?: string;
}) => {
  return (
    <div className="w-full py-3 bg-white md:hidden relative">
      <Link href={href} className="absolute pl-4">
        <IoChevronBack size={20} />
      </Link>
      <h2 className="text-base font-bold text-black02 w-full text-center">
        {title}
      </h2>
    </div>
  );
};

export default MobileHeader;
