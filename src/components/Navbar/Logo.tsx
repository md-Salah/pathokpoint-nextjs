import Image from "next/image";

const Logo = () => {
  return (
    <a
      className="btn btn-ghost text-xl relative w-32 h-auto"
      href="/"
    >
      <Image
        alt="Pathok Point"
        src="/logo-trans.png"
        fill
        priority
        className="object-contain object-left"
      />
    </a>
  );
};

export default Logo;
