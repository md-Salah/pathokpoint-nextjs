import Image from "next/image";

const TopBanner = () => {
  return (
    <div className="w-full h-12 bg-[#031344] relative">
      <Image
        alt="Get Special Discount | Learn More"
        src="/top-banner.gif"
        fill
        priority
        className="object-contain"
        unoptimized
      />
    </div>
  );
};

export default TopBanner;
