import Image from "next/image";

const Logo = () => {
  return (
    <a className="btn btn-link text-xl relative w-32 h-auto" href="/">
      <Image
        alt="Pathok Point"
        src="/logo-trans.png"
        fill
        priority
        className="object-contain object-left mr-8"
      />
    </a>
  );
};

export default Logo;
