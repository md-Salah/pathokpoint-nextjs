"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useUser } from '@/hooks';

interface Props {
  children: React.ReactNode;
}

const AuthorizedUser = ({ children }: Props) => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && !isLoading && !user) {
      router.push("/auth/login");
    }
  }, [user, isLoading, router, hasMounted]);

  if (!hasMounted || isLoading || !user) {
    return (
      <div className="layout-container layout-px layout-mt skeleton w-full h-96"></div>
    );
  }

  return <>{children}</>;
};

export default AuthorizedUser;
