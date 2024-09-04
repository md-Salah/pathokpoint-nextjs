import { importantLinks, menuItems } from '@/constants';
import { isEnglish } from '@/utils';

import Item from '../Item';
import SubMenu from './SubMenu';

interface Props {
  handleClose: () => void;
}

const CustomerMenu = ({ handleClose }: Props) => {
  return (
    <ul className="menu menu-lg px-0">
      {menuItems.map((mainMenu, index) => (
        <li key={index}>
          <details>
            <summary className="menu-item">
              <h3 className={`${!isEnglish(mainMenu.name) && "font-bn"}`}>
                {mainMenu.name}
              </h3>
            </summary>
            <div className="h-64 overflow-y-scroll" onClick={handleClose}>
              <SubMenu
                query={mainMenu.query}
                hrefPrefix={mainMenu.hrefPrefix}
                filter={mainMenu.filter}
              />
            </div>
          </details>
        </li>
      ))}

      <div className="mt-16 pt-2 border-t">
        <div onClick={handleClose}>
          {importantLinks.map((link: { name: string; href: string }, index) => (
            <Item key={index} name={link.name} href={link.href} />
          ))}
        </div>
      </div>
    </ul>
  );
};

export default CustomerMenu;
