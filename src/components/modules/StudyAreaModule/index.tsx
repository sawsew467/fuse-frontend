import Section from "@/components/ui/section";
import Rooms from "./rooms";

function StudyAreaModule() {
  return (
    <Section
      title="Khu vực học tập"
      subTitle="Tạo phòng của bạn <br> hoặc tham gia vào những phòng học hiện có"
    >
      <Rooms/>
    </Section>
  );
}

export default StudyAreaModule;
