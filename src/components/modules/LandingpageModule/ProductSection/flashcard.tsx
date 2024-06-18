"use client";
import Image from "next/image";
import React from "react";
import { Variants, delay, motion } from "framer-motion";

import PassionFruidOne from "@public/passionfruid/passionone.svg";
import PassionFruidTwo from "@public/passionfruid/passiontwo.svg";
import IdeaIcon from "@public/icons/idea.svg";
import ArrowRightIcon from "@public/icons/arrowRight.svg";
import CancleIcon from "@public/icons/cancle.png";
import CheckIcon from "@public/icons/check.png";
import Hourse1 from "../HeroSection/Hourse1";
import Hourse31 from "../HeroSection/Hourse31";
import Hourse32 from "../HeroSection/Hourse32";

function Flashcard({ fade }: { fade: Variants }) {
  const data = [
    "Nhanh chóng và dễ dàng để bạn có thể dành thời gian tạo ra nội dung tuyệt vời. Dễ dàng vì không ai thích những điều khó khăn.",
    "Phương pháp học hiệu quả giúp bạn nhớ lâu và học nhanh hơn. Đơn giản và tiện lợi vì học không cần phải phức tạp.",
    "Tăng cường khả năng ghi nhớ của bạn với phương pháp học trực quan. Dễ dàng và thân thiện với người dùng.",
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {/* Left */}
        <div className="flex h-fit w-full items-center justify-center md:w-[50%]">
          <div className="flex flex-col gap-6 md:gap-8">
            <motion.h1
              initial="hidden-top"
              whileInView="view-top"
              viewport={{ once: true }}
              variants={fade}
              className="text-center font-title text-3xl md:text-start md:text-[52px]"
            >
              FlashCard
            </motion.h1>
            <motion.div
              initial="hidden-right"
              whileInView="view-right"
              viewport={{ once: true }}
              variants={fade}
              className="flex flex-row items-start gap-4"
            >
              <Image src={IdeaIcon} alt="icon" />
              <p className="font-title text-sm font-bold md:text-base">
                Giải pháp hữu dụng để bạn có thể lưu nhớ các kiến thức hiệu quả
                và dễ dàng hơn
              </p>
            </motion.div>
            {data.map((item, index) => {
              return (
                <motion.div
                  initial="hidden-right"
                  whileInView="view-right"
                  viewport={{ once: true }}
                  variants={fade}
                  className="flex flex-row items-start gap-4"
                  key={index}
                >
                  <Image src={ArrowRightIcon} alt="icon" />
                  <p className="text-sm md:text-base">{item}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex w-[100%] flex-col gap-12 md:w-[50%]">
          <div className="flex h-[50%] w-full items-end justify-end gap-2">
            <motion.div
              initial="view-wiggle-hidden"
              whileInView="view-wiggle-more"
              viewport={{ once: true }}
              variants={fade}
            >
              <Image src={PassionFruidOne} alt="image" />
              {/* <Hourse31 /> */}
            </motion.div>
            <motion.div
              initial="hidden-flip-down"
              whileInView="view-flip-down"
              viewport={{ once: true }}
              variants={fade}
              className="flex h-[200px] w-[355px] cursor-pointer flex-col justify-between rounded-[20px] border-2 border-black bg-[#65CCA0] p-4 shadow-3d"
            >
              <h3 className="font-title">Dekiru N5</h3>
              <div className="flex w-full items-center justify-center">
                <h3 className="text-center text-3xl font-bold transition hover:scale-125">
                  日本語
                </h3>
              </div>
              <div className="flex flex-row justify-end gap-2">
                <Image
                  src={CancleIcon}
                  alt="icon"
                  height={100}
                  width={100}
                  className="h-6 w-6"
                />
                <Image
                  src={CheckIcon}
                  alt="icon"
                  height={100}
                  width={100}
                  className="h-6 w-6"
                />
              </div>
            </motion.div>
          </div>
          <div className="flex h-[50%] w-full items-end justify-start gap-10">
            <motion.div
              initial="hidden-flip-up"
              whileInView="view-flip-up"
              viewport={{ once: true }}
              variants={fade}
              className="flex h-[200px] w-[355px] flex-col justify-between rounded-[20px] border-2 border-black bg-[#FFF380] p-4 shadow-3d"
            >
              <h3 className="font-title">Dekiru N5</h3>
              <div className="flex w-full items-center justify-center">
                <h3 className="text-center text-3xl font-bold transition hover:scale-125">
                  ベトナム人
                </h3>
              </div>
              <div className="flex flex-row justify-end gap-2">
                <Image
                  src={CancleIcon}
                  alt="icon"
                  height={100}
                  width={100}
                  className="h-6 w-6"
                />
                <Image
                  src={CheckIcon}
                  alt="icon"
                  height={100}
                  width={100}
                  className="h-6 w-6"
                />
              </div>
            </motion.div>
            <motion.div
              initial="view-wiggle-hidden"
              whileInView="view-wiggle-more"
              viewport={{ once: true }}
              variants={fade}
            >
              <Image src={PassionFruidTwo} alt="image" />
              {/* <Hourse32 /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
