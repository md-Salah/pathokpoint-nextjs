import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Pathok Point",
  description: "Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
