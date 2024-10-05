import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offers | Pathok Point",
  description: "Explore our latest promotions and save big!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
