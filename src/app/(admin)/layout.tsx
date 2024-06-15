import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import { Inter } from "next/font/google";
import "../globals.css";
import { ReduxProvider } from "@/redux/provider";
import { AdminHeader, Sidebar } from "@/components";

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

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <main className={anek.variable}>
            <div className="flex items-start">
              <Sidebar />
              <div>
                <AdminHeader />
                <div className="pt-24">{children}</div>
              </div>
            </div>
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
