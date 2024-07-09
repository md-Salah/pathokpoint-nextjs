import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Pathok Point",
  description: "Checkout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
