import { ViewOrder } from '@/components/Admin/Order';

type Props = {
  params: { invoice: string };
};

const ViewOrderPage = async ({ params }: Props) => {
  return <ViewOrder invoice={params.invoice} />;
};

export default ViewOrderPage;
