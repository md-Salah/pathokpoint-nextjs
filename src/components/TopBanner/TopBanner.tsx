import Image from "next/image";

const TopBanner = () => {
  return (
    <div className="w-full h-12 relative bg-[#031344]">
    <Image
      alt="Get Special Discount | Learn More"
      src="/top-banner.gif"
      fill
      priority
      className="object-contain"
    />
  </div>
  )
}

export default TopBanner