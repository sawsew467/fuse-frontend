import MainLayout from "@/components/layouts/MainLayout";

async function MainRootLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}

export default MainRootLayout;
