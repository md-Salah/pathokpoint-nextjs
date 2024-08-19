import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Reviews | Pathok Point",
  description: "My reviews on Pathok Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
