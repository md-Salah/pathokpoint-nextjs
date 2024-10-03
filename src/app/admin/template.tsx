"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Sidebar } from '@/components/Admin';
import { useUser } from '@/hooks';
import { Unauthorized } from '@/micro-components';
import { isStaff } from '@/utils';

const Template = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && user === null) {
      router.push("/auth/login");
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <div className="layout-container layout-mt w-full h-96 flex items-center justify-center">
        <span className="loading loading-bars"></span>
      </div>
    );
  }

  if (user && isStaff(user.role))
    return (
      <div className="flex">
        <aside>
          <Sidebar />
        </aside>
        <div className="w-full overflow-hidden">{children}</div>
      </div>
    );
  if (user && !isStaff(user.role)) return <Unauthorized />;
  return null;
};

export default Template;
