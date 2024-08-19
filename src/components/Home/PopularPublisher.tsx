"use client";
import useSWR from 'swr';

import { Carousel, PublisherCard } from '@/components';
import { Publisher } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const PopularPublisher = () => {
  const { data, isLoading } = useSWR("/publisher/all", fetcher);
  return (
    <Carousel title="জনপ্রিয় প্রকাশনী" href="/publishers" isLoading={isLoading}>
      {data &&
        data.map((publisher: Publisher) => (
          <PublisherCard key={publisher.id} publisher={publisher} />
        ))}
    </Carousel>
  );
};

export default PopularPublisher;
