"use client";
import Link from "next/link";
import { useState } from "react";

import { HambugerIcon } from "@/micro-components";
import { Drawer } from "@/components";
import { categories, publishers, authors } from "@/constants";
import { usePathname } from "next/navigation";
import { adminMenuItems, frontendMenuItems } from "@/constants/constants";
import MenuContent from "./MenuContent";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <div onClick={() => setIsOpen(true)}>
        <HambugerIcon />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <MenuContent
          handleClose={handleClose}
          menuItems={
            pathname.split("/").includes("admin")
              ? adminMenuItems
              : frontendMenuItems
          }
        />
      </Drawer>
    </div>
  );
};

export default Menu;
