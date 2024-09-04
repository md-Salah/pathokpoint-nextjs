import { capitalize } from '@/utils';
import { getBookByPublicId } from '@/utils/api';

interface Props {
  params: {
    public_id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const book = await getBookByPublicId(params.public_id);
  return {
    title: `${capitalize(book.name)} | Pathok Point`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
