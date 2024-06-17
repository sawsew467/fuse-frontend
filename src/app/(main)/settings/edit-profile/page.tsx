import SettingModule from "@/components/modules/SettingModule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fuse - latest",
  description: "Generated by create next app",
  icons: "/fuse.svg",
};

export default function EditPage() {
  return <SettingModule></SettingModule>;
}
