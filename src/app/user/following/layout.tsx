import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Following | Pathok Point",
  description: "Following list of authors on Pathok Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
