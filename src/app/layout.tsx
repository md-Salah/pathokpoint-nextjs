import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import "./globals.css";

const anek = Anek_Bangla({ subsets: ["bengali"] });

export const metadata: Metadata = {
  title: "Pathok Point",
  description: "An old and new bookshop in Dhaka, Bangladesh",
  icons: ['favicon.ico'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anek.className}>{children}</body>
    </html>
  );
}
