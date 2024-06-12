"use client";
import Card from "@/components/modules/LandingpageModule/InforTeamSection/card";
import Demo from "@/components/modules/LandingpageModule/InforTeamSection/demo";
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
    description: "Trần Văn Bảo Thắng đã đóng góp vào sự phát triển của dự án Fuse từ những ngày đầu tiên. \n Với sự sáng tạo và quyết đoán, anh đã giúp trang web phát triển với nhiều tính năng mới mẻ. \n Anh không chỉ là một lập trình viên tài năng mà còn là một người dẫn dắt đội ngũ đầy cảm hứng.",
  },
  {
    avatar: "./avatar.svg",
    fullName: "Võ Huy Hoàng",
    userName: "@hoangvo",
    description: "Võ Huy Hoàng đã giúp nâng cao hiệu suất và tính năng của Fuse. \n Với sự chăm chỉ và nỗ lực không ngừng, anh đã cải thiện đáng kể tốc độ tải trang và độ ổn định của hệ thống. \n Những đóng góp của anh đã mang lại sự hài lòng tuyệt đối cho người dùng Fuse.",
  },
  {
    avatar: "./avatar.svg",
    fullName: "Võ Văn Vũ",
    userName: "@vovanvu",
    description: "Võ Văn Vũ là người đứng sau nhiều cải tiến kỹ thuật của Fuse. \n Anh đã phát triển các tính năng quan trọng giúp trang web hoạt động ổn định và đáng tin cậy. \n Những nỗ lực của anh đã giúp Fuse trở thành một nền tảng mạnh mẽ và hiệu quả.",
  },
  {
    avatar: "./avatar.svg",
    fullName: "Lê Đức Anh Phương",
    userName: "@phuongle",
    description: "Lê Đức Anh Phương đã góp phần không nhỏ vào việc phát triển giao diện và trải nghiệm người dùng của Fuse. \n Với tài năng thiết kế và tư duy sáng tạo, anh đã tạo nên những trải nghiệm trực quan và hấp dẫn cho người dùng. \n Những đóng góp của anh đã giúp Fuse ghi điểm trong mắt người dùng từ cái nhìn đầu tiên.",
  },
  {
    avatar: "./avatar.svg",
    fullName: "Nguyễn Văn Duy Khang",
    userName: "@khangnguyen",
    description: "Nguyễn Văn Duy Khang luôn nỗ lực để cải thiện Fuse từ góc độ hiệu năng đến bảo mật. \n Với kiến thức vững chắc về bảo mật, anh đã triển khai nhiều biện pháp bảo vệ dữ liệu quan trọng. \n Sự tận tâm và chuyên nghiệp của anh đã giúp Fuse trở thành một nền tảng đáng tin cậy cho hàng triệu người dùng.",
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
        {/* <Demo/> */}
      </Section>
    </>
  );
}

export default InforTeamSection;
