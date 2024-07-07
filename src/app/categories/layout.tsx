import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories | Pathok Point",
  description: "Categories of Pathok Point",
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
