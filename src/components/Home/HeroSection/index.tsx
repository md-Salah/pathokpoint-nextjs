"use client";
import { useState } from 'react';

import { menuItems } from '@/constants';
import { MenuItem } from '@/interface';

import HeroBanner from './HeroBanner';
import MenuExpand from './MenuExpand';
import MenuPanel from './MenuPanel';

const HeroSection = () => {
  const [selected, setSelected] = useState<MenuItem | null>(null);

  return (
    <div className="layout-container layout-mt h-44 sm:h-96">
      <div className="flex gap-3" onMouseLeave={() => setSelected(null)}>
        <div className="hidden md:block">
          <MenuPanel
            menuItems={menuItems}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className="flex-1 shadow-sm bg-white min-w-0 layout-mx sm:mx-0">
          {selected ? (
            <MenuExpand
              query={selected.query}
              hrefPrefix={selected.hrefPrefix}
              filter={selected.filter}
            />
          ) : (
            <HeroBanner />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
