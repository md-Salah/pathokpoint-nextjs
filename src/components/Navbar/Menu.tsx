"use client";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Drawer } from '@/components';
import { adminMenuItems, menuItems } from '@/constants';
import { HambugerIcon } from '@/micro-components';

import MenuContent from './MenuContent';

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <div onClick={() => setIsOpen(true)} className="hover:cursor-pointer">
        <HambugerIcon />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <MenuContent
          handleClose={handleClose}
          menuItems={
            pathname.split("/").includes("admin")
              ? adminMenuItems
              : menuItems
          }
        />
      </Drawer>
    </div>
  );
};

export default Menu;
