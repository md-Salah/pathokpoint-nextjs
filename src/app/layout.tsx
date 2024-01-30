import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
const anek = Anek_Bangla({ subsets: ["bengali"] });
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Pathok Point",
  description: "An old and new bookshop in Dhaka, Bangladesh",
  icons: ["favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={anek.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
