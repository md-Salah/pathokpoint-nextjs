import Image from "next/image";

const Logo = () => {
  return (
    <a
      className="btn btn-ghost text-xl bg-base-100 relative w-32 h-auto"
      href="/"
    >
      <Image
        alt="Pathok Point"
        src="/logo-trans.png"
        fill
        priority
        className="object-contain"
      />
    </a>
  );
};

export default Logo;
