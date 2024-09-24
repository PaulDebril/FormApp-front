import AdminPanelLayout from "@/components/sidebar/admin-panel-layout";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AdminPanelLayout>{children}</AdminPanelLayout>;
    </main>
  );
}
