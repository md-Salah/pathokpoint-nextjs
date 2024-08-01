import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({
  name,
  href,
  Icon,
  sub = false,
  collapse = false,
}: {
  name: string;
  href: string;
  Icon: React.ReactNode;
  sub?: boolean;
  collapse?: boolean;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 pr-2 hover:bg-[#374151] hover:text-black05 rounded text-sm ${
        sub ? "py-2 pl-10" : "py-4 pl-6"
      } ${pathname == href && "bg-[#374151] text-black05"} `}
    >
      {Icon}
      {!collapse && <span>{name}</span>}
    </Link>
  );
};

export default MenuItem;
