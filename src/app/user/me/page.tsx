import React from "react";
import { MyProfile, SidebarDesktopLayout } from "@/components";

const MyProfilePage = () => {
  return (
    <>
      <SidebarDesktopLayout>
        <MyProfile />
      </SidebarDesktopLayout>

      <div className="block md:hidden">
        <MyProfile />
      </div>
    </>
  );
};

export default MyProfilePage;
