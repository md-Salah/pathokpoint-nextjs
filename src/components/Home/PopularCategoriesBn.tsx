"use client";
import useSWR from 'swr';

import { Carousel, CategoryCard } from '@/components';
import { Category } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const PopularCategoriesBn = () => {
  const { data, isLoading } = useSWR("/category/all", fetcher);
  return (
    <Carousel
      title="জনপ্রিয় বাংলা ক্যাটাগরি"
      isLoading={isLoading}
      href="/categories"
    >
      {data &&
        data.map((category: Category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
    </Carousel>
  );
};

export default PopularCategoriesBn;
