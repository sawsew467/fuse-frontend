import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HaveAnyThing from "./collection/haveAnything";
import LiveNow from "./collection/liveNow";
import Compass from "@public/svgr/Compass";
import PinColor from "@public/svgr/PinColor";
import ForYou from "./collection/forYou";

function CommunicationSection() {
  return (
    <>
      <Section
        title="Mọi người suy nghĩ gì về Fuse?"
        subTitle="Dưới đây là những phát biểu của những người đã tham gia sử dụng Fuse"
      >
        <Tabs defaultValue="discover" className="w-full">
          <TabsList>
            <TabsTrigger value="discover" className="flex gap-2">
              <span>Khám phá</span>
              <Compass className="scale-125" />
            </TabsTrigger>
            <TabsTrigger value="gim" className="flex gap-2">
              <span>Đã ghim</span>
              <PinColor className="scale-125" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="discover">
            <LiveNow></LiveNow>
            <ForYou></ForYou>
            <HaveAnyThing></HaveAnyThing>
          </TabsContent>
          <TabsContent value="gim"> </TabsContent>
        </Tabs>
      </Section>
    </>
  );
}

export default CommunicationSection;
