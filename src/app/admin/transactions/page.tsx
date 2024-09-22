import { Transactions } from '@/components/Admin/Transaction';

const tabOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Bkash",
    value: "bkash",
  },
  {
    label: "Nagad",
    value: "nagad",
  },
];

interface Props {
  searchParams?: any;
}

const TransactionsPage = ({ searchParams }: Props) => {
  return <Transactions tabOptions={tabOptions} searchParams={searchParams} />;
};

export default TransactionsPage;
