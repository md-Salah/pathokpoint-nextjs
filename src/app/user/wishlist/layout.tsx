import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist | Pathok Point",
  description: "Wishlist on Pathok Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
