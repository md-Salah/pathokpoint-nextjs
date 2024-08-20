"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Pagination } from '@/components';

const PaginationHandler = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1");

  const handlePageChange = (page: number) => {
    const queryParams = new URLSearchParams(searchParams.toString());
    queryParams.set("page", page.toString());
    router.push(`${pathname}?${queryParams.toString()}`, { scroll: false });
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      handleChangeCurrentPage={handlePageChange}
    />
  );
};

export default PaginationHandler;
