"use client";
import React, { useState } from "react";
import TabOptions from "../shared/TabOptions";
import { myProfileTabs } from "@/constants/userProfile";
import PersonalInformationContent from "./PersonalInformationContent";
import AddressContent from "./AddressContent";
import PasswordContent from "./PasswordContent";

const getTabContent = (tabIndex: number) => {
  switch (tabIndex) {
    case 0:
      return <PersonalInformationContent />;
      break;
    case 1:
      return <AddressContent />;
      break;
    case 2:
      return <PasswordContent />;
      break;
    default:
      return <PersonalInformationContent />;
      break;
  }
};

const MyProfile = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const handleSetActiveTabIndex = (index: number) => {
    setActiveTabIndex(index);
  };
  return (
    <div className="w-full flex flex-col md:space-y-4">
      <TabOptions
        tabOptions={myProfileTabs}
        activeIndex={activeTabIndex}
        setActiveIndex={handleSetActiveTabIndex}
      />
      {getTabContent(activeTabIndex)}
    </div>
  );
};

export default MyProfile;
