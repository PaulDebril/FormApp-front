import AdminPanelLayout from "@/components/sidebar/admin-panel-layout";
import { ThemeProvider } from "@/components/theme-provider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AdminPanelLayout>{children}</AdminPanelLayout>
      </ThemeProvider>
    </main>
  );
}
