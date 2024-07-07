import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publishers | Pathok Point",
  description: "All Publishers at Pathok Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
