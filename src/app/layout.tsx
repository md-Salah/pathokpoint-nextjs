import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
const anek = Anek_Bangla({ subsets: ["bengali", "latin"] });
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { ReduxProvider } from "@/redux/provider";
import { ThemeProvider } from "@/redux/theme";

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
      <body className={anek.className}>
        <ReduxProvider>
          <main>
            <ThemeProvider>
              <Navbar />
              {children}
              <Footer />
            </ThemeProvider>
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
