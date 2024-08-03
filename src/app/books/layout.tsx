import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | Pathok Point",
  description: "Available books in Pathok Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
