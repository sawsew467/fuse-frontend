import StudyRoomLayout from "@/components/layouts/StudyRoomLayout";

async function StudyLayout({ children }: { children: React.ReactNode }) {
  return <StudyRoomLayout> {children}</StudyRoomLayout>;
}

export default StudyLayout
