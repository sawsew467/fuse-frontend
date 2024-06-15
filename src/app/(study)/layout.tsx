import StudyRoomMainLayout from "@/components/layouts/StudyRoomLayout";

async function StudyRoomLayout({ children }: { children: React.ReactNode }) {
  return <StudyRoomMainLayout>{children}</StudyRoomMainLayout>;
}
export default StudyRoomLayout;
