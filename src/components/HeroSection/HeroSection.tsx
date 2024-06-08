"use client";
import { CategoryPanel, CategoryExpand, HeroBanner } from "@/components";
import { useState } from "react";

const HeroSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="layout-container layout-mt h-44 sm:h-96">
      <div className="flex gap-3" onMouseLeave={() => setSelected(null)}>
        <div className="hidden md:block">
          <CategoryPanel selected={selected} setSelected={setSelected} />
        </div>
        <div className="flex-1 shadow-sm bg-white min-w-0 layout-mx sm:mx-0">
          {selected ? <CategoryExpand /> : <HeroBanner />}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
