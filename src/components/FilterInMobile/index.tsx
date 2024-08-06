"use client";
import { useState } from "react";
import { SlEqualizer } from "react-icons/sl";

import { Drawer, Filter } from "@/components";
import { Author, Category, Publisher } from "@/interface";

interface Props {
  categories: Category[];
  publishers: Publisher[];
  authors: Author[];
}

const FilterInMobile = ({ categories, publishers, authors }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div>
      <button className="btn btn-sm bg-white" onClick={toggleDrawer}>
        Filter
        <SlEqualizer className="w-4 h-4 inline-block" />
      </button>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} right={true}>
        <div className="bg-base-200 pb-8">
          <Filter
            categories={categories}
            publishers={publishers}
            authors={authors}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default FilterInMobile;
