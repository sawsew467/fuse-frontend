"use client";
import Section from "@/components/ui/section";
import Card from "./card";
import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    id: 1,
    title: "Miễn phí",
    description:
      "Hoàn hảo để dùng thử Tương phản hoặc bắt đầu với hội thảo trên web",
    price: 0,
    features: [
      "Up to 50 active contacts per month",
      "Up to 50 active contacts per month",
    ],
    labelColor: "#fff7ad",
    animate: {
      x: -20,
      y: 0,
      opacity: 0,
    },
  },
  {
    id: 2,
    title: "Nâng cao",
    description:
      "Hoàn hảo để dùng thử Tương phản hoặc bắt đầu với hội thảo trên web",
    price: 100000,
    features: [
      "Up to 50 active contacts per month",
      "Up to 50 active contacts per month",
      "Up to 50 active contacts per month",
    ],
    isBestSeller: true,
    labelColor: "#ceceff",
    animate: {
      x: 0,
      y: 20,
      opacity: 0,
    },
  },
  {
    id: 3,
    title: "Chuyên nghiệp",
    description:
      "Hoàn hảo để dùng thử Tương phản hoặc bắt đầu với hội thảo trên web",
    price: 500000,
    features: [
      "Up to 50 active contacts per month",
      "Up to 50 active contacts per month",
    ],
    labelColor: "#ffecee",
    animate: {
      x: 20,
      y: 0,
      opacity: 0,
    },
  },
];

function MembershipSection() {
  const ref = useRef(null);
  const [hidden, setHidden] = useState(true);
  const handleResize = ({ target }: UIEvent) => {
    setHidden((target as Window)?.innerWidth < 1024);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hidden]);
  useEffect(() => {
    setHidden(innerWidth < 1024);
  }, []);
  return (
    <>
      <Section
        title="Các gói tài khoản"
        subTitle="Bắt đầu với việc học hoàn toàn miễn phí. <br/> Nâng cấp tài khoản để trải nghiệm nhiều tính năng tuyệt vời hơn!"
      >
        <div
          ref={ref}
          className="flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-center"
        >
          {data.map((item, index) => (
            <Card key={index} data={item} ref={ref} hidden={hidden} />
          ))}
        </div>
        <div id="developers"></div>
      </Section>
    </>
  );
}

export default MembershipSection;
