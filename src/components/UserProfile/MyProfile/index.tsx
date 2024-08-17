"use client";
import React, { useState } from 'react';

import { MobileHeader, TabOptions } from '@/components/UserProfile';
import { useUser } from '@/hooks';

import AddressContent from './AddressContent';
import PasswordContent from './PasswordContent';
import PersonalInfo from './PersonalInfo';

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
          // { name: "Address" },
          { name: "Password" },
        ]}
      />

      {/* Tab Content */}
      {user ? (
        <div>
          {tab === "Personal Information" && (
            <PersonalInfo user={user} />
          )}
          {/* {tab === "Address" && <AddressContent />} */}
          {tab === "Password" && <PasswordContent />}
        </div>
      ): (
        <div className='skeleton w-full h-96'></div>
      )}
    </div>
  );
};

export default MyProfile;
