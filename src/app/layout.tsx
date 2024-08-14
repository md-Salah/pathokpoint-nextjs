import type { Metadata } from "next";
import './globals.css';

import { Anek_Bangla, Inter } from 'next/font/google';

import { Footer, Navbar, TopBanner } from '@/components';
import { ReduxProvider } from '@/redux/provider';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anek = Anek_Bangla({
  subsets: ["bengali"],
  variable: "--font-anek-bangla",
});

export const metadata: Metadata = {
  title: "Home | Pathok Point",
  description: "Best bookshop in bangladesh with cheap price",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>
        <ReduxProvider>
          <main className={anek.variable}>
            <TopBanner />
            <Navbar />
            {children}
            <Footer />
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
