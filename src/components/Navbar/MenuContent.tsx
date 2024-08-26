import Link from 'next/link';
import React from 'react';

import { authors, categories, publishers } from '@/constants';
import { MenuItem, SubMenuItem } from '@/interface';
import { getSubmenuItemPath } from '@/utils';

const MenuContent = ({
  menuItems,
  handleClose,
}: {
  menuItems: MenuItem[];
  handleClose: () => void;
}) => {
  return (
    <ul className="menu px-0">
      {menuItems.map((menuItem: MenuItem, index) => {
        if (menuItem.submenus.length > 0) {
          return (
            <li key={index}>
              <details>
                <summary className="menu-item">
                  <h3>{menuItem.name}</h3>
                </summary>
                <div className="h-48 overflow-y-scroll">
                  <ul>
                    {menuItem.submenus.map((subMenuItem: SubMenuItem, index) => (
                      <Item
                        key={index}
                        name={subMenuItem.name}
                        href={subMenuItem.href}
                        handleClose={handleClose}
                      />
                    ))}
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

const Item = ({
  name,
  href,
  handleClose,
}: {
  name: SubMenuItem["name"];
  href: SubMenuItem["href"];
  handleClose: () => void;
}) => (
  <li
    className={`font-bn hover:bg-[#FF82001A] hover:text-primary hover:opacity-100`}
    onClick={handleClose}
  >
    <Link href={href} className="hover:bg-[#FF82001A]">
      {name}
    </Link>
  </li>
);

export default MenuContent;
