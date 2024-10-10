"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { SidebarDesktop } from '@/components';
import { useUser } from '@/hooks';

const Template = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && user === null) {
      router.push("/auth/login");
    }
  }, [user, isLoading]);

  if (user)
    return (
      <div className="layout-container layout-mt layout-px grid grid-cols-12 gap-4">
        <div className="hidden md:block md:col-span-4 lg:col-span-3">
          <SidebarDesktop />
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          {children}
        </div>
      </div>
    );
  return (
    <div className="layout-container layout-mt skeleton w-full h-96"></div>
  );
};

export default Template;
