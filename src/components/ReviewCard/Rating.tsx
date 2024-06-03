const Rating = ({ rating }: { rating: number }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="rating rating-xs gap-0 sm:gap-0.5">
      {ratings.map((value) => (
        <input
          key={value}
          type="radio"
          className={`mask mask-star-2 ${
                    value <= rating ? "bg-[#F2AE14]" : "bg-[#494747]" }`}
          checked={value == rating}
          readOnly={true}
        />
      ))}
    </div>
  );
};
export default Rating;
