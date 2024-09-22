import { Users } from '@/components/Admin/User';

const tabOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Customer",
    value: "customer",
  },
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Super Admin",
    value: "super-admin",
  },
  {
    label: "Staff",
    value: "staff",
  },
];

interface Props {
  searchParams?: any;
}

const UsersPage = ({ searchParams }: Props) => {
  return <Users tabOptions={tabOptions} searchParams={searchParams} />;
};

export default UsersPage;
