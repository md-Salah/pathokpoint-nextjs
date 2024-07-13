import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Pathok Point",
  description: "Login to Pathok Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
