import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authors | Pathok Point",
  description: "Author list of Pathok Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    </>
  );
}
