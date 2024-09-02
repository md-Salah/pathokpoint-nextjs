import Link from 'next/link';

import { adminMenuItems } from '@/constants';
import { AdminMenuItem, AdminSubMenuItem } from '@/interface';

import Item from './Item';

interface Props {
  handleClose: () => void;
}

const AdminMenu = ({ handleClose }: Props) => {
  return (
    <ul className="menu menu-lg px-0">
      {adminMenuItems.map((menuItem: AdminMenuItem, index) => {
        if (menuItem.submenus.length > 0) {
          return (
            <li key={index}>
              <details>
                <summary className="menu-item">
                  <h3>{menuItem.name}</h3>
                </summary>
                <div>
                  <ul>
                    {menuItem.submenus.map(
                      (subMenuItem: AdminSubMenuItem, index) => (
                        <Item
                          key={index}
                          name={subMenuItem.name}
                          href={subMenuItem.href}
                          handleClose={handleClose}
                        />
                      )
                    )}
                  </ul>
                </div>
              </details>
            </li>
          );
        } else {
          return (
            <li className="menu-item" key={index}>
              <Link
                href={menuItem.href}
                onClick={handleClose}
                className="w-full hover:bg-[#FF82001A]"
              >
                {menuItem.name}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default AdminMenu;
