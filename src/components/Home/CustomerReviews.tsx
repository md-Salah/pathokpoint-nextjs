"use client";
import { Carousel, ReviewCard } from '@/components';
import { reviews } from '@/constants';

const CustomerReviews = () => {
  return (
    <Carousel title="Customer Reviews">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </Carousel>
  );
};

export default CustomerReviews;
