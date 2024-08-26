import { Sidebar } from '@/components/Admin';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Pathok Point",
  description: "Admin dashboard of Pathok Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
  // return (
  //   <div className="flex">
  //     <aside>
  //       <Sidebar />
  //     </aside>
  //     <div className="w-full overflow-hidden">{children}</div>
  //   </div>
  // );
}
