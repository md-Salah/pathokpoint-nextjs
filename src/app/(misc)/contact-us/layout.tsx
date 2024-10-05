import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pathok Point",
  description: "Questions, bug reports, feedback — we're here for it all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
