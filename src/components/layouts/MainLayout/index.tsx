import { getCookie } from "cookies-next";
import Footer from "./Footer";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";
import { constants } from "@/settings";
import { cookies } from "next/headers";

function MainLayout({ children }: { children: React.ReactNode }) {
  const user = getCookie(constants.USER_INFO, { cookies });

  return (
    <>
      {user ? <UserHeader /> : <GuestHeader />}
      <main className="mt-[72px] min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
