import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Pathok Point",
  description: "Admin dashboard of Pathok Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
