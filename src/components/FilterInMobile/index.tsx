"use client";
import { useState } from 'react';
import { SlEqualizer } from 'react-icons/sl';

import { Drawer, Filter } from '@/components';

interface Props {
  className?: string;
}

const FilterInMobile = ({ className = "btn-sm" }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div>
      <button className={`btn bg-white ${className}`} onClick={toggleDrawer}>
        Filter
        <SlEqualizer className="w-4 h-4 inline-block" />
      </button>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} right={true}>
        <div className="bg-base-200 pb-8">
          <Filter />
        </div>
      </Drawer>
    </div>
  );
};

export default FilterInMobile;
