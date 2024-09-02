import { MdOutlineNavigateNext } from 'react-icons/md';

import { isEnglish } from '@/utils';

const Item = ({ name, isSelected }: { name: string; isSelected: boolean }) => {
  return (
    <div
      className={`flex items-center justify-between text-black02 pl-6 pr-5 h-12 border-l-4 
          hover:text-primary hover:border-l-primary hover:bg-[#FF82001A] hover:cursor-pointer 
          ${
            isSelected
              ? "text-primary border-l-primary bg-[#FF82001A]"
              : "border-l-white"
          }`}
    >
      <h3
        className={`text-base truncate ${
          isEnglish(name) ? "" : "font-bn"
        } w-11/12`}
      >
        {name}
      </h3>
      <MdOutlineNavigateNext className="w-6" />
    </div>
  );
};

export default Item;
