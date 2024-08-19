import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Pathok Point",
  description: "User profile page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
