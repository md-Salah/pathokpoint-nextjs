import { FaStar } from "react-icons/fa";

const Rating = ({ rating }: { rating: number }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <span className="rating rating-xs">
      {ratings.map((value) => (
        <FaStar
          key={value}
          className={`${
            value <= rating ? "text-orange-400" : "text-gray-400"
          } inline`}
        />
      ))}
    </span>
  );
};
export default Rating;
