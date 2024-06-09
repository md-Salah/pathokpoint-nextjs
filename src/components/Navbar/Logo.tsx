import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="block relative h-[26px] md:h-[70px] max-w-[128px]">
      <Image
        alt="Pathok Point"
        src="/logo-trans.png"
        fill
        priority
        className="object-contain object-left text-xl font-bold"
      />
    </Link>
  );
};

export default Logo;
