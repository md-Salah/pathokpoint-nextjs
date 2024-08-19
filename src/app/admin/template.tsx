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
    if (!isLoading && !user) {
      router.push("/auth/login");
    }
  }, [user, isLoading, router]);

  if (user && isStaff(user.role))
    return (
      <div className="flex">
        <aside>
          <Sidebar />
        </aside>
        <div className="w-full overflow-hidden">{children}</div>
      </div>
    );
  else if (user && !isStaff(user.role)) return <Unauthorized />;
  return (
    <div className="layout-container layout-mt skeleton w-full h-96"></div>
  );
};

export default Template;
