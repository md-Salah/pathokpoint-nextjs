import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pathok Point",
  description: "Your data, our responsibility — safeguarding your privacy every step of the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
