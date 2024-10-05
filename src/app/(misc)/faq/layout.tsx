import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Pathok Point",
  description: "Answers to your most frequent questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
