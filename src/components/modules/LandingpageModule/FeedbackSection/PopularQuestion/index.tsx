"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import scopyQuestion from "@public/scopyQuestion.svg";
import Hourse5 from "../../HeroSection/Hourse5";
import Hourse from "./Hourse";

const faqData = [
  {
    id: "item-1",
    question: "FUSE là gì?",
    answer:
      "FUSE - Future Unified Study Environment là một nền tảng trực tuyến cho phép người dùng kết nối, tham gia vào các phòng học, và ôn thi trực tuyến. Chúng tôi cung cấp một môi trường học tập toàn diện với nhiều tài nguyên giáo dục và công cụ hỗ trợ học tập.",
  },
  {
    id: "item-2",
    question: "FUSE có miễn phí không?",
    answer:
      "FUSE cung cấp cả dịch vụ miễn phí và trả phí. Gói miễn phí bao gồm các tính năng cơ bản, trong khi gói trả phí cung cấp nhiều tính năng nâng cao hơn như tài liệu ôn thi chi tiết và truy cập vào các lớp học đặc biệt.",
  },
  {
    id: "item-3",
    question: "Làm thế nào để đăng ký tài khoản trên FUSE?",
    answer:
      'Để đăng ký tài khoản, bạn truy cập vào trang web của chúng tôi, nhấp vào nút "Đăng ký", và làm theo hướng dẫn để nhập thông tin cá nhân và xác nhận email của bạn.',
  },
  {
    id: "item-4",
    question: "Tôi có thể tạo phòng học riêng không?",
    answer:
      "Có, với tài khoản giáo viên hoặc tài khoản của mình, bạn có thể tạo và quản lý phòng học riêng của mình, mời học sinh và chia sẻ tài liệu học tập.",
  },
  {
    id: "item-5",
    question: "Làm thế nào để sử dụng tài liệu ôn thi trên FUSE?",
    answer:
      'Tài liệu ôn thi có sẵn trong phần "Ôn thi" của FUSE. Bạn có thể tải xuống hoặc xem trực tuyến. Đối với một số tài liệu nâng cao, bạn có thể cần nâng cấp tài khoản của mình.',
  },
];

const parent = {
  show: {
    transition: {
      staggerChildren: 0.2,
      type: "spring",
      bounce: 0.8,
      duration: 0.01,
      deplay: 0.5,
    },
  },
};

const child: any = {
  show: {
    y: [20, 0],
    opacity: [0, 1],
    transition: {
      type: "spring",
    },
  },
};

const PopularQuestion = () => {
  return (
    <motion.div
      className="flex w-full gap-20"
      variants={parent}
      whileInView="show"
      viewport={{ once: true }}
    >
      <Accordion type="single" collapsible className="flex-1">
        {faqData.map((item) => (
          <motion.div key={item.id} variants={child}>
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b-2 border-black/25"
            >
              <AccordionTrigger className="text-left text-xs font-medium md:text-sm lg:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-left text-xs font-normal md:text-sm lg:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
      <motion.div
        whileInView={{
          x: [100, 0],
          opacity: [0, 1],
          transition: {
            type: "spring",
            duration: 0.75,
            deplay: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="hidden w-56 lg:block"
      >
        <Image
          src={scopyQuestion}
          alt="scopy"
          width={200}
          height={200}
          className="w-full"
        ></Image>
        {/* <Hourse /> */}
      </motion.div>
    </motion.div>
  );
};

export default PopularQuestion;
