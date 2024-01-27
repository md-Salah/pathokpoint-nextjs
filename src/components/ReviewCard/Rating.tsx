const Rating = ({ rating }: { rating: number }) => {
  return (
    <span className="rating rating-xs">
      {[...Array(5)].map((_, index) => (
        <input
          key={index}
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
          checked={index + 1 === rating}
          readOnly
        />
      ))}
    </span>
  );
};
export default Rating;
