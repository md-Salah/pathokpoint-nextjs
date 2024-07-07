"use client";
import React, { useState } from "react";
import SidebarBase from "./SidebarBase";
import SidebarCollapse from "./SidebarCollapse";

const Sidebar = () => {
  const [isSidebarExpandClicked, setIsSidebarExpandClicked] = useState(true);
  return (
    <>
      {isSidebarExpandClicked ? (
        <SidebarBase
          isSidebarExpandClicked={isSidebarExpandClicked}
          setIsSidebarExpandClicked={setIsSidebarExpandClicked}
        />
      ) : (
        <SidebarCollapse
          isSidebarExpandClicked={isSidebarExpandClicked}
          setIsSidebarExpandClicked={setIsSidebarExpandClicked}
        />
      )}
    </>
  );
};

export default Sidebar;
