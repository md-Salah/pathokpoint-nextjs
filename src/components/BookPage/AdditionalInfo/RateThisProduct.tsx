import { FaRegPenToSquare } from "react-icons/fa6";

const RateThisProduct = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="rating rating-sm">
          <input type="radio" name="rating-1" className="mask mask-star-2" />
          <input type="radio" name="rating-1" className="mask mask-star-2" />
          <input type="radio" name="rating-1" className="mask mask-star-2" />
          <input type="radio" name="rating-1" className="mask mask-star-2" />
          <input type="radio" name="rating-1" className="mask mask-star-2" />
        </div>
        <h3 className="mt-4">Rate this product</h3>
        <button className="btn btn-outline btn-primary w-36 h-10 mt-4">
          Submit a review
        </button>
      </div>
      <div className="block lg:hidden">
        <button className="btn btn-link font-medium text-xs">
          <FaRegPenToSquare className="inline-block" />
          Submit a review
        </button>
      </div>
    </div>
  );
};

export default RateThisProduct;
