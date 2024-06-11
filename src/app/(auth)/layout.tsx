import AuthLayout from "@/components/layouts/AuthLayout";

async function AuthRootLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default AuthRootLayout;
