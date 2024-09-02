import { MenuItem } from '@/interface';

import Item from './Item';

interface Props {
  menuItems: MenuItem[];
  selected: MenuItem | null;
  setSelected: (val: MenuItem | null) => void;
}

const MenuPanel = ({ menuItems, selected, setSelected }: Props) => {
  return (
    <div className="w-52 min-w-44 py-2 bg-white shadow-sm overflow-y-scroll h-96">
      <ul className="">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setSelected(item)}
            onClick={() => setSelected(item)}
          >
            <Item name={item.name} isSelected={selected?.name === item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPanel;
