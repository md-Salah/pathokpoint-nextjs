import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lilabotir Mrittu | Pathok Point",
  description: "Lilabotir mrittu by humayun ahmed",
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
