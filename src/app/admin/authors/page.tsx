import { Authors } from '@/components/Admin/Author';

interface Props {
  searchParams?: any;
}

const AuthorsPage = ({ searchParams }: Props) => {
  return <Authors searchParams={searchParams} />;
};

export default AuthorsPage;
