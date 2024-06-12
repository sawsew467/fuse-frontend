import AuthLayout from "@/components/layouts/AuthLayout";
import { constants } from "@/settings";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function AuthRootLayout({ children }: { children: React.ReactNode }) {
  const user = getCookie(constants.USER_INFO, { cookies });

  if (user) {
    redirect(`/`);
  }
  return <AuthLayout>{children}</AuthLayout>;
}

export default AuthRootLayout;
