import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { ReduxProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });
const anek = Anek_Bangla({
  subsets: ["bengali"],
  variable: "--font-anek-bangla",
});

export const metadata: Metadata = {
  title: "Pathok Point",
  description: "Best old & new bookshop",
  icons: ["favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <main className={anek.variable}>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
