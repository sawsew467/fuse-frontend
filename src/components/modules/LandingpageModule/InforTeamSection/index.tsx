import Card from "@/components/modules/LandingpageModule/InforTeamSection/card";
import Logos from "@/components/modules/LandingpageModule/InforTeamSection/logos";
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import Image from "next/image";

const data = [
  {
    avatar: "./avatar.svg",
    fullName: "Trần Văn Bảo Thắng",
    userName: "@thangtvb",
    description: "I just started using Passionfroot to handle sponsorship requests for my podcast and newsletter. Before them, I had pulled together a terrible process of google sheets, random stripe links, and emails back and forth to figure out all of this. \n In my head, I just thought, “damn there must be a tool to solve this.\" \n Passionfroot is that tool.",
  },
  {
    avatar: "./avatar.svg",
    fullName: "Trần Văn Bảo Thắng",
    userName: "@thangtvb",
    description: "I just started using Passionfroot to handle sponsorship requests for my podcast and newsletter. Before them, I had pulled together a terrible process of google sheets, random stripe links, and emails back and forth to figure out all of this. \n In my head, I just thought, “damn there must be a tool to solve this.\" \n Passionfroot is that tool.",
  },
  {
    avatar: "./avatar.svg",
    fullName: "Trần Văn Bảo Thắng",
    userName: "@thangtvb",
    description: "I just started using Passionfroot to handle sponsorship requests for my podcast and newsletter. Before them, I had pulled together a terrible process of google sheets, random stripe links, and emails back and forth to figure out all of this. \n In my head, I just thought, “damn there must be a tool to solve this.\" \n Passionfroot is that tool.",
  },
  {
    avatar: "./avatar.svg",
    fullName: "Trần Văn Bảo Thắng",
    userName: "@thangtvb",
    description: "I just started using Passionfroot to handle sponsorship requests for my podcast and newsletter. Before them, I had pulled together a terrible process of google sheets, random stripe links, and emails back and forth to figure out all of this. \n In my head, I just thought, “damn there must be a tool to solve this.\" \n Passionfroot is that tool.",
  },
  {
    avatar: "./avatar.svg",
    fullName: "Trần Văn Bảo Thắng",
    userName: "@thangtvb",
    description: "I just started using Passionfroot to handle sponsorship requests for my podcast and newsletter. Before them, I had pulled together a terrible process of google sheets, random stripe links, and emails back and forth to figure out all of this. \n In my head, I just thought, “damn there must be a tool to solve this.\" \n Passionfroot is that tool.",
  },
]

function InforTeamSection() {
  return (
    <>
      <Section
        title="Đội ngũ phát triển"
        subTitle={`Những lập trình viên tài năng đã cùng tạo nên <span class="bg-primary px-1 rounded-md">“fuse”</span>`}
      >
        <div className="lg:grid hidden lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-rows-2  gap-10">
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
            <Image
              src="/infor_image.svg"
              alt="Image"
              width={400}
              height={321}
              className="h-full w-full"
            />
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="lg:hidden block w-full"
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card key={index} data={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
        </Carousel>

        <Logos />
      </Section>
    </>
  );
}

export default InforTeamSection;