import { Publishers } from '@/components/Admin/Publisher';

interface Props {
  searchParams?: any;
}

const PublishersPage = ({ searchParams }: Props) => {
  return <Publishers searchParams={searchParams} />;
};

export default PublishersPage;
