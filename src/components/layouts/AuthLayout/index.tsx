import { constants } from "@/settings";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

function AuthLayout({ children }: { children: React.ReactNode }) {
  const user = getCookie(constants.USER_INFO, { cookies });

  // if (!user) {
  //   redirect(`/sign-in`);
  // }

  return (
    <main className="flex h-screen w-screen items-center justify-center overflow-hidden">
      {children}
    </main>
  );
}

export default AuthLayout;
