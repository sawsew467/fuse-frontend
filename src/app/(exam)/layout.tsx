import ExamRoomMainLayout from "@/components/layouts/ExamRoomLayout";

async function ExamRoomLayout({ children }: { children: React.ReactNode }) {
  return <ExamRoomMainLayout>{children}</ExamRoomMainLayout>;
}
export default ExamRoomLayout;
