interface Props {
  items: any[];
  currentItem: number;
  handleDotClick: (index: number) => void;
}

const DotButtons = ({ items, currentItem, handleDotClick }: Props) => {
  return (
    <div className="flex justify-center gap-1 mt-1">
      {items.map((_, index) => (
        <div
          key={index}
          className={`size-2 md:size-3 rounded-full cursor-pointer ${
            index == currentItem ? "bg-gray-600" : "bg-gray-400"
          }`}
          onClick={() => handleDotClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default DotButtons;
