"use client";
import { HeroBanner } from "@/components";
import { CategoryExpand, CategoryPanel } from "@/components/HeroSection";
import { Category } from "@/interface";
import { useState } from "react";

const HeroSection = ({ categories }: { categories: Category[] }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="layout-container layout-mt h-44 sm:h-96">
      <div className="flex gap-3" onMouseLeave={() => setSelected(null)}>
        <div className="hidden md:block">
          <CategoryPanel
            selected={selected}
            setSelected={setSelected}
            categories={categories}
          />
        </div>
        <div className="flex-1 shadow-sm bg-white min-w-0 layout-mx sm:mx-0">
          {selected ? (
            <CategoryExpand categories={categories} />
          ) : (
            <HeroBanner />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
