import Image from "next/image";
import { services } from "@/constants";
import Link from "next/link";

const ServiceBanner = () => {
  return (
    <div className="custom-mx custom-mt">
      <div className="flex justify-between">
        {services.map((service, index) => (
          <Link href="/offers/" key={index}>
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
