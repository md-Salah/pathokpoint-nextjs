"use client";
import React, { useState } from 'react';

import { MobileHeader, TabOptions } from '@/components/UserProfile';
import { useUser } from '@/hooks';

import AddressContent from './AddressContent';
import PasswordContent from './PasswordContent';
import PersonalInformationContent from './PersonalInformationContent';

const MyProfile = () => {
  const [tab, setTab] = useState<string>("Personal Information");
  const { user } = useUser();

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
        {tab === "Personal Information" && <PersonalInformationContent user={user} />}
        {tab === "Address" && <AddressContent />}
        {tab === "Password" && <PasswordContent />}
      </div>
    </div>
  );
};

export default MyProfile;
