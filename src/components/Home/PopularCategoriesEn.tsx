"use client";
import useSWR from 'swr';

import { Carousel, CategoryCard } from '@/components';
import { Category } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const PopularCategoriesEn = () => {
  const { data, isLoading } = useSWR("/category/all?per_page=20&is_english_featured=true", fetcher);
  return (
    <Carousel
      title="জনপ্রিয় ইংরেজি ক্যাটাগরি"
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

export default PopularCategoriesEn;
