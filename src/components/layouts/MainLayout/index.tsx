import Footer from "./Footer";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";

function MainLayout({ children }: { children: React.ReactNode }) {
  const isAuth = false;

  return (
    <>
      {isAuth ? <UserHeader /> : <GuestHeader />}
      <main className="min-h-screen mt-[72px]">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
