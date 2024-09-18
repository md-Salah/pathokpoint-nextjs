import type { Metadata } from "next";
import './globals.css';

import { Anek_Bangla, Inter } from 'next/font/google';
import Script from 'next/script';

import { Footer, Navbar, TopBanner } from '@/components';
import { ReduxProvider } from '@/redux/provider';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anek = Anek_Bangla({
  subsets: ["bengali"],
  variable: "--font-anek-bangla",
});

export const metadata: Metadata = {
  title: "Home | Pathok Point",
  description: "Best bookshop in Bangladesh",
  keywords: ["Cheap books", "Old books"],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}`),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/logo/opengraph.png`,
        width: 1200,
        height: 630,
      },
    ],
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

          {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
            <>
              <Script id="meta-pixel" strategy="afterInteractive">
                {`
            <!-- Meta Pixel Code -->
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');

            var add = window.location.toString();
            if (add.indexOf("/#!/") != -1){
              fbq('track', 'PageView');
            }
            <!-- End Meta Pixel Code -->
          `}
              </Script>
              <noscript>
                <img
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
                />
              </noscript>
            </>
          )}
        </body>
        {process.env.NEXT_PUBLIC_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
        )}
      </html>
    </ReduxProvider>
  );
}
