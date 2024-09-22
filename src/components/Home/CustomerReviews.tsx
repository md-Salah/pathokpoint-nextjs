"use client";
import { Carousel, ReviewCard } from '@/components';
import { reviews } from '@/constants';
import { Review } from '@/interface';

const CustomerReviews = () => {
  return (
    <Carousel title="Customer Reviews">
      {reviews.map((review: Review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </Carousel>
  );
};

export default CustomerReviews;
