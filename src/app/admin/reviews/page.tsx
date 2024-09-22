import { Reviews } from '@/components/Admin/Review';

interface Props {
  searchParams?: any;
}

const tabOptions = [
  {
    label: "All",
    value: 'all'
  },
  {
    label: "Approved",
    value: 'true'
  },
  {
    label: "Pending",
    value: 'false'
  },
];

const ReviewsPage = ({ searchParams }: Props) => {
  return <Reviews tabOptions={tabOptions} searchParams={searchParams} />;
};

export default ReviewsPage;
