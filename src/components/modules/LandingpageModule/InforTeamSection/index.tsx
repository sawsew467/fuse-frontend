"use client";
import Card from "@/components/modules/LandingpageModule/InforTeamSection/card";
import Logos from "@/components/modules/LandingpageModule/InforTeamSection/logos";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    avatar: "./avatar.svg",
    fullName: "Trần Văn Bảo Thắng",
    userName: "@thangtvb",
    description:
      'I just started using Passionfroot to handle sponsorship requests for my podcast and newsletter. Before them, I had pulled together a terrible process of google sheets, random stripe links, and emails back and forth to figure out all of this. \n In my head, I just thought, “damn there must be a tool to solve this." \n Passionfroot is that tool.',
  },
  {
    avatar: "./avatar.svg",
    fullName: "Trần Văn Bảo Thắng",
    userName: "@thangtvb",
    description:
      'I just started using Passionfroot to handle sponsorship requests for my podcast and newsletter. Before them, I had pulled together a terrible process of google sheets, random stripe links, and emails back and forth to figure out all of this. \n In my head, I just thought, “damn there must be a tool to solve this." \n Passionfroot is that tool.',
  },
  {
    avatar: "./avatar.svg",
    fullName: "Trần Văn Bảo Thắng",
    userName: "@thangtvb",
    description:
      'I just started using Passionfroot to handle sponsorship requests for my podcast and newsletter. Before them, I had pulled together a terrible process of google sheets, random stripe links, and emails back and forth to figure out all of this. \n In my head, I just thought, “damn there must be a tool to solve this." \n Passionfroot is that tool.',
  },
  {
    avatar: "./avatar.svg",
    fullName: "Trần Văn Bảo Thắng",
    userName: "@thangtvb",
    description:
      'I just started using Passionfroot to handle sponsorship requests for my podcast and newsletter. Before them, I had pulled together a terrible process of google sheets, random stripe links, and emails back and forth to figure out all of this. \n In my head, I just thought, “damn there must be a tool to solve this." \n Passionfroot is that tool.',
  },
  {
    avatar: "./avatar.svg",
    fullName: "Trần Văn Bảo Thắng",
    userName: "@thangtvb",
    description:
      'I just started using Passionfroot to handle sponsorship requests for my podcast and newsletter. Before them, I had pulled together a terrible process of google sheets, random stripe links, and emails back and forth to figure out all of this. \n In my head, I just thought, “damn there must be a tool to solve this." \n Passionfroot is that tool.',
  },
];
const parent = {
  show: {
    transition: {
      staggerChildren: 0.3,
      type: "spring",
      bounce: 0.8,
      duration: 0.05,
      deplay: 0.5,
    },
  },
};

const child: any = {
  show: {
    y: [20, 0],
    x: [20, 0],
    opacity: [0, 1],
    scale: [0.75, 1],
    transition: {
      type: "spring",
    },
  },
};

function InforTeamSection() {
  return (
    <>
      <Section
        title="Đội ngũ phát triển"
        subTitle={`Những lập trình viên tài năng đã cùng tạo nên <span class="bg-primary px-1 rounded-md">“fuse”</span>`}
      >
        <motion.ul
          variants={parent}
          whileInView="show"
          className="hidden grid-rows-2 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid lg:grid-cols-3"
        >
          {data.map((item, index) => (
            <Card key={index} data={item} childAnimate={child} />
          ))}
          <motion.span
            whileInView={{
              scale: [0.75, 1],
              x: [20, 0],
              y: [20, 0],
              opacity: [0, 1],
              transition: {
                type: "spring",
                bounce: 0.8,
                delay: 0.5,
                duration: 0.5,
              },
            }}
          >
            <Image
              src="/infor_image.svg"
              alt="Image"
              width={400}
              height={321}
              className="h-full w-full"
            />
          </motion.span>
        </motion.ul>

        <Carousel
          opts={{
            align: "start",
          }}
          className="flex w-full flex-col gap-5 md:gap-8 lg:hidden"
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
