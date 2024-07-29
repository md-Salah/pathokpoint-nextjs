"use client";
import React, { useState } from "react";
import TabOptions from "../shared/TabOptions";
import { myProfileTabs } from "@/constants/userProfile";
import PersonalInformationContent from "./PersonalInformationContent";
import AddressContent from "./AddressContent";
import PasswordContent from "./PasswordContent";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";

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
    <div className="w-full flex flex-col space-y-0 md:space-y-4 my-10 md:my-0">
      <div className="flex items-center w-full pt-6 pb-3 md:pt-0 md:pb-0 bg-white md:hidden">
        <Link href={"/user"} className="pl-5">
          <IoChevronBack size={20} />
        </Link>
        <div className="flex justify-center w-full absolute">
          <h2 className="text-base font-bold text-black02">My Profile</h2>
        </div>
      </div>
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
