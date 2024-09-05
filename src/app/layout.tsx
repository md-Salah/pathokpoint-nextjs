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
  description: "Best bookshop in Bangladesh",
  keywords: ["Cheap books", "Old books"],
  metadataBase: new URL("https://pathokpoint.com"),
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
    <ReduxProvider>
      <html lang="en" data-theme="light">
        <body className={`${inter.className} ${inter.variable}`}>
          <main className={anek.variable}>
            {/* <TopBanner /> */}
            <Navbar />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ReduxProvider>
  );
}
