import React from "react";
import Sidebar from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

const SidebarLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default SidebarLayout;
