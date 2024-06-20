import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HaveAnyThing from "./collection/haveAnything";
import LiveNow from "./collection/liveNow";
import Compass from "@public/svgr/Compass";
import PinColor from "@public/svgr/PinColor";
import ForYou from "./collection/forYou";
import MyCollect from "./collection/myCollect";

function CommunicationSection() {
  return (
    <>
      <Section
        title="Khu vực ôn thi"
        subTitle="Nơi bạn có thể ôn tập kiến thức theo từng chương học hàng tuần, <br/> ôn tập cùng mọi người, và xem lại các câu hỏi, <br/> tất cả đều dành cho bạn."
      >
        <Tabs defaultValue="discover" className="w-full pb-10">
          <TabsList>
            <TabsTrigger value="discover" className="flex gap-2">
              <span className="sm:text-md md:text-xl lg:text-2xl">Khám phá</span>
              <Compass className="scale-125" />
            </TabsTrigger>
            <TabsTrigger value="gim" className="flex gap-2">
              <span className=" sm:text-md md:text-xl lg:text-2xl">Đã ghim</span>
              <PinColor className="scale-125" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="discover">
            <LiveNow></LiveNow>
            <ForYou></ForYou>
            <HaveAnyThing></HaveAnyThing>
          </TabsContent>
          <TabsContent value="gim"> 
            <MyCollect/>
          </TabsContent>
        </Tabs>
      </Section>
    </>
  );
}

export default CommunicationSection;
