import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pathok Point",
  description: "Terms of service — what you need to know.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
