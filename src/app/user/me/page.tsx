import React from "react";
import { MyProfile, SidebarDesktopLayout } from "@/components";

const MyProfilePage = () => {
  return (
    <>
      <SidebarDesktopLayout>
        <MyProfile />
      </SidebarDesktopLayout>
      <MyProfile/>
    </>
  );
};

export default MyProfilePage;
