import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <div className="w-full h-full flex items-center">
    <Link href="/">
      <Image src="/logo.png" alt="PATHOK POINT" width={90} height={40} />
    </Link>
  </div>
);

export default Logo;
