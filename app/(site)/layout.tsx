import AdminPanelLayout from "@/components/sidebar/admin-panel-layout";
import { ThemeProvider } from "@/components/theme-provider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AdminPanelLayout>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </AdminPanelLayout>
    </main>
  );
}
