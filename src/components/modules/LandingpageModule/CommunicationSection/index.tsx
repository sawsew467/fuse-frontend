import Section from "@/components/ui/section";

import { Join } from "./join";
import { Slider } from "./slider";

function CommunicationSection() {
  return (
    <Section
      title="Mọi người suy nghĩ gì về Fuse?"
      subTitle="Dưới đây là những phát biểu của những người đã tham gia sử dụng Fuse"
    >
      <Slider></Slider>
      <Join></Join>
    </Section>
  );
}

export default CommunicationSection;
