import { PublisherCard } from "@/components";
import { publishers } from "@/constants";

const Test = () => {

  return (
    <div className="p-4">
      <PublisherCard publisher={publishers[0]} />
    </div>
  );
};

export default Test;
