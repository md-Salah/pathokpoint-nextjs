"use client";
import useSWR from 'swr';

import { Carousel, CategoryCard } from '@/components';
import { Category } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const PopularCategoriesEn = () => {
  const { data, isLoading } = useSWR("/category/all?is_islamic=true", fetcher);
  return (
    <Carousel
      title="ইসলামিক ক্যাটাগরি"
      isLoading={isLoading}
      href="/categories?is_islamic=true"
    >
      {data &&
        data.map((category: Category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
    </Carousel>
  );
};

export default PopularCategoriesEn;
