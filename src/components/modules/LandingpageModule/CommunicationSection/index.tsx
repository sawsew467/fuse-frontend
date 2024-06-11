import Section from "@/components/ui/section";

import { Join } from "./join";
import { Slider } from "./slider";
import Banner from "./banner";

function CommunicationSection() {
  return (
    <>
      <Section
        title="Mọi người suy nghĩ gì về Fuse?"
        subTitle="Dưới đây là những phát biểu của những người đã tham gia sử dụng Fuse"
      >
        <Slider />
        <Join />
      </Section>
      <Banner />
    </>
  );
}

export default CommunicationSection;
