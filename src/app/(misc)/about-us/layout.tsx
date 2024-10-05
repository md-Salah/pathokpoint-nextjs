import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pathok Point",
  description: "Your journey, our mission &mdash; helping you every step of the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
