import ExamRoomModule from "@/components/modules/ExamRoomModule";
import StudyAreaModule from "@/components/modules/StudyAreaModule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fuse - latest",
  description: "Generated by create next app",
  icons: "/fuse.svg",
};

export default function ExamRoom() {
  return <ExamRoomModule/>;
}   
