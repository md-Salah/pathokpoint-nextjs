import { Couriers } from '@/components/Admin/Courier';

interface Props {
  searchParams?: any;
}

const CouriersPage = ({ searchParams }: Props) => {
  return <Couriers searchParams={searchParams} />;
};

export default CouriersPage;
