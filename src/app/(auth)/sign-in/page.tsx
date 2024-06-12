import type { Metadata } from "next";

import SignInModule from "@/components/modules/SignInModule";

export const metadata: Metadata = {
  title: "fuse - Đăng nhập",
  description: "Generated by create next app",
  icons: "/fuse.svg",
};

export default function SignInPage() {
  return <SignInModule pageMode={"SIGNIN"} />;
}
