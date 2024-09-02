"use client";
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Drawer } from '@/components';
import { HambugerIcon } from '@/micro-components';
import { RootState } from '@/redux/store';

import AdminMenu from './AdminMenu';
import CustomerMenu from './CustomerMenu';
import User from './User';

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => setIsOpen(false);
  const { isStaff } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <div onClick={() => setIsOpen(true)} className="hover:cursor-pointer">
        <HambugerIcon />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <User handleClose={handleClose} />
        {isStaff ? (
          <AdminMenu handleClose={handleClose} />
        ) : (
          <CustomerMenu handleClose={handleClose} />
        )}
      </Drawer>
    </div>
  );
};

export default Menu;
