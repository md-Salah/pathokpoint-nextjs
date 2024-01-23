import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | Pathok Point",
  description: "Cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    </>
  );
}
