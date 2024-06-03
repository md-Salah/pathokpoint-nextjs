import { ReviewCard } from "@/components";
import { reviews } from "@/constants";

const Test = () => {
  return (
    <div className="p-4">
      <ReviewCard review={reviews[0]} />
    </div>
  );
};

export default Test;
