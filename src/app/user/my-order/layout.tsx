import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Order | Pathok Point",
  description: "My order list on Pathok Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
