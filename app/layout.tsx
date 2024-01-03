import "./globals.css";
import type { Metadata } from "next";

import { Navbar, Footer } from "../components";

export const metadata: Metadata = {
  title: "PATHOK POINT | Buy Old and New Books",
  description: "Ecommerce website for buying old and new books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="h-12" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
