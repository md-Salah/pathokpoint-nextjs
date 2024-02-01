import Image from "next/image";

const Logo = () => {
  const theme = "light";

  return (
    <a className="btn btn-link text-xl relative w-32 h-auto" href="/">
      <Image
        alt="Pathok Point"
        src={theme === "light" ? "/logo-trans.png" : "/logo-trans-white.png"}
        fill
        priority
        className="object-contain object-left mr-8"
        sizes="25vw"
      />
    </a>
  );
};

export default Logo;
