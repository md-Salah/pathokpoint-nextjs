import { Orders } from '@/components/Admin/Order';

type Props = {
  searchParams?: any;
};

const OrdersPage = ({ searchParams }: Props) => {
  return <Orders searchParams={searchParams} />;
};

export default OrdersPage;
