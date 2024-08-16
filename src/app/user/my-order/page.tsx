import { MyOrder } from '@/components/UserProfile';

interface Props {
  searchParams?: {
    order_status__status?: string;
  };
}

const MyOrderPage = ({ searchParams }: Props) => {
  return <MyOrder searchParams={searchParams} />;
};

export default MyOrderPage;
