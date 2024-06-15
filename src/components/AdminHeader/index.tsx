"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { getAdminHeader } from "../../utils/index";
import { IconKeys } from "@/interface/icon";
import { iconsMap } from "../../constants/icons";

export const IconComponent = ({
  componentKey,
  size,
}: {
  componentKey: IconKeys;
  size: number;
}) => {
  const Component = iconsMap[componentKey];

  return Component ? <Component size={size} color="#FF8200" /> : null;
};

const AdminHeader = () => {
  const fullPathname = usePathname();

  const pathname = fullPathname.split("/")?.[2];

  return (
    <div className="w-full py-4 px-6 fixed top-0 overflow-hidden bg-white text-xl font-semibold flex items-center space-x-3">
      <div className="bg-primary bg-opacity-20 p-3 rounded-full">
        <IconComponent componentKey={pathname as IconKeys} size={20} />
      </div>
      <span>{getAdminHeader(pathname)}</span>
    </div>
  );
};

export default AdminHeader;
