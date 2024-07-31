"use client";
import React, { useState } from "react";

import PersonalInformationContent from "./PersonalInformationContent";
import AddressContent from "./AddressContent";
import PasswordContent from "./PasswordContent";
import { MobileHeader, TabOptions } from "@/components/UserProfile";

const MyProfile = () => {
  const [tab, setTab] = useState<string>("Personal Information");

  return (
    <div>
      <MobileHeader title="My Profile" />

      {/* Tabs */}
      <TabOptions
        tab={tab}
        setTab={setTab}
        tabOptions={[
          { name: "Personal Information" },
          { name: "Address" },
          { name: "Password" },
        ]}
      />

      {/* Tab Content */}
      <div>
        {tab === "Personal Information" && <PersonalInformationContent />}
        {tab === "Address" && <AddressContent />}
        {tab === "Password" && <PasswordContent />}
      </div>
    </div>
  );
};

export default MyProfile;
