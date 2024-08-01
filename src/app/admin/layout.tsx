import type { Metadata } from "next";
import { Sidebar } from "@/components";

export const metadata: Metadata = {
  title: "Admin | Pathok Point",
  description: "Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <aside>
        <Sidebar />
      </aside>
      <div className="w-full">{children}</div>
    </div>
  );
}
