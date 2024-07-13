import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignUp | Pathok Point",
  description: "Sign up to Pathok Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
