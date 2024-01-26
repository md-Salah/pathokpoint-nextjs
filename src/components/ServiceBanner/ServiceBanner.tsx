import Image from "next/image";
import { services } from "@/constants";
import Link from "next/link";

const ServiceBanner = () => {
  return (
    <div className="custom-margin mt-10 sm:py-6">
      <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-9 justify-center">
        {services.map((service, index) => (
          <Link href='/offers/' key={index}>
            <div key={index} className="rounded-md">
              <Image
                src={service.src}
                alt={service.name}
                width={393}
                height={110}
                className="rounded-md"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceBanner;
