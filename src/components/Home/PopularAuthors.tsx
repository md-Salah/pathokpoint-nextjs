"use client";
import useSWR from 'swr';

import { AuthorCard, Carousel } from '@/components';
import { Author } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const PopularAuthors = () => {
  const { data, isLoading } = useSWR("/author/all?per_page=20&is_popular=true", fetcher);

  return (
    <Carousel title="জনপ্রিয় লেখক" href="/authors" isLoading={isLoading}>
      {data &&
        data.map((author: Author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
    </Carousel>
  );
};

export default PopularAuthors;
