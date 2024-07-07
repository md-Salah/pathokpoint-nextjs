import { capitalize } from "@/utils";

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  return {
    title: `${capitalize(params.slug)} | Pathok Point`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
