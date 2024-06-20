"use client";
import Image from "next/image";

import Card from "./card";

import Section from "@/components/ui/section";
import { motion } from "framer-motion";
import { useRef } from "react";

import managements from "@public/images/management.svg";
import security from "@public/images/security.svg";
import effective from "@public/images/effective.svg";
import support from "@public/images/Support.svg";
import fast_easy from "@public/images/fast_easy.svg";
import infinity from "@public/images/infinity.svg";
import lovely from "@public/images/lovely.svg";
import setting from "@public/images/setting.svg";
import touch_real_time from "@public/images/touch_real_time.svg";

const data = [
  {
    title: "Quản lý nhóm dễ dàng",
    description:
      "Sắp xếp và quản lý các nhóm, dự án, và thư mục một cách trực quan và hiệu quả.",
    animate: {
      translateX: [-200, 0, 0],
      translateY: [-200, 0, 0],
    },
    icon: () => (
      <Image
        src={managements}
        alt="quản lí"
        width={100}
        height={100}
        className="w-7 md:w-11 lg:w-11"
      />
    ),
  },
  {
    title: "Tích hợp công cụ mạnh mẽ",
    description:
      "Kết nối và sử dụng các công cụ mạnh mẽ giúp bạn nâng cao hiệu suất làm việc.",
    animate: {
      translateX: [0, 0, 0],
      translateY: [-200, 0, 0],
    },
    icon: () => (
      <Image
        src={infinity}
        alt="quản lí"
        width={100}
        height={100}
        className="w-9 md:w-12 lg:w-14"
      />
    ),
  },
  {
    title: "Tương tác thời gian thực",
    description:
      "Cộng tác và chia sẻ ý tưởng với đồng đội trong thời gian thực mà không gặp trở ngại.",
    animate: {
      translateX: [200, 0, 0],
      translateY: [-200, 0, 0],
    },
    icon: () => (
      <Image
        src={touch_real_time}
        alt="quản lí"
        width={100}
        height={100}
        className="w-5 md:w-6 lg:w-7"
      />
    ),
  },
  {
    title: "Bảo mật hàng đầu",
    description:
      "Đảm bảo an toàn dữ liệu với các tiêu chuẩn bảo mật hàng đầu thế giới.",
    animate: {
      translateX: [-200, 0, 0],
      translateY: [200, 0, 0],
    },
    icon: () => (
      <Image
        src={security}
        alt="quản lí"
        width={100}
        height={100}
        className="w-7 md:w-11 lg:w-11"
      />
    ),
  },
  {
    title: "Hỗ trợ đa nền tảng",
    description:
      "Truy cập và làm việc trên mọi thiết bị, từ máy tính để bàn đến điện thoại di động.",
    animate: {
      translateX: [0, 0, 0],
      translateY: [200, 0, 0],
    },
    icon: () => (
      <Image
        src={support}
        alt="quản lí"
        width={100}
        height={100}
        className="w-7 md:w-11 lg:w-11"
      />
    ),
  },
  {
    title: "Tùy chỉnh linh hoạt",
    description:
      "Tùy chỉnh giao diện và tính năng theo nhu cầu riêng của bạn để tối ưu hóa trải nghiệm.",
    animate: {
      translateX: [200, 0, 0],
      translateY: [200, 0, 0],
    },
    icon: () => (
      <Image
        src={setting}
        alt="quản lí"
        width={100}
        height={100}
        className="w-7 md:w-11 lg:w-11"
      />
    ),
  },
];

const benefits = [
  {
    image:
    fast_easy,
    title: "Nhanh chóng và dễ dàng",
    description:
      "Nhanh chóng và dễ dàng để bạn có thể dành thời gian tạo nội dung tuyệt vời. Dễ dàng vì không ai thích sự khó khăn.",
  },
  {
    image:
    effective,
    title: "Hiệu quả và linh hoạt",
    description:
      "Hiệu quả và linh hoạt để đáp ứng mọi nhu cầu của bạn. Linh hoạt để bạn có thể làm việc theo cách của mình.",
  },
  {
    image:
    lovely,
    title: "Được yêu thích và tin tưởng",
    description:
      "Được yêu thích và tin tưởng bởi hàng triệu người dùng trên toàn thế giới. Tin tưởng để bạn biết rằng dữ liệu của bạn an toàn.",
  },
];

function BenefitSection() {
  const ref = useRef(null);
  return (
    <div className="overflow-hidden">
      <div
        ref={ref}
        className="container px-5 pb-0 pt-10 sm:px-8 sm:pb-0 sm:pt-12 md:px-10 md:pb-0 md:pt-14 lg:px-[60px] lg:pb-0 lg:pt-28"
      >
        <ul className="flex flex-col justify-between gap-10 sm:flex-col md:flex-row lg:flex-row">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex transform flex-row items-center justify-end gap-2 transition-transform duration-500 md:flex-col lg:flex-col"
            >
              <motion.span
                initial={{
                  scale: 0.75,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,

                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    delay: 0.1,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={80}
                  height={80}
                />
              </motion.span>
              <div className="flex flex-col gap-0 md:gap-2 lg:gap-2">
                <motion.h3
                  initial={{
                    y: 20,
                    scale: 0.75,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    scale: 1,
                    opacity: 1,

                    transition: {
                      type: "spring",
                      bounce: 0.5,
                      delay: 0.2,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-left font-title text-xl sm:text-2xl md:text-center md:text-3xl lg:text-center lg:text-3xl"
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  initial={{
                    y: 20,
                    scale: 0.75,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    scale: 1,
                    opacity: 1,

                    transition: {
                      type: "spring",
                      bounce: 0.5,
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-left text-sm sm:text-base md:text-center md:text-base lg:text-center lg:text-base"
                >
                  {benefit.description}
                </motion.p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:mb-20 mb-10">
        <Section
          title="Và còn nhiều hơn thế nữa"
          subTitle="Hãy sử dụng hiệu quả để tạo nên sự khác biệt"
        >
          <div className="grid grid-rows-2 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item, index) => (
              <Card key={index} data={item} ref={ref} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

export default BenefitSection;
