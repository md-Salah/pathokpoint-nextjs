import { SidebarDesktop } from '@/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layout-container layout-mt layout-px grid grid-cols-12 gap-4">
      <div className="hidden md:block md:col-span-4 lg:col-span-3">
        <SidebarDesktop />
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-9">{children}</div>
    </div>
  );
}
