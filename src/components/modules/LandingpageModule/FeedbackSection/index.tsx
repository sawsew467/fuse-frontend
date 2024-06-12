"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PopularQuestion from "./PopularQuestion";
import Feedback from "./Feedback";
import Section from "@/components/ui/section";
import { useScroll, useTransform, motion } from "framer-motion";

const FeedbackSection = () => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setHidden(innerWidth < 1024);
  }, []);
  const handleResize = ({ target }: UIEvent) => {
    setHidden((target as Window)?.innerWidth < 1024);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hidden]);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity: any = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale: any = useTransform(scrollYProgress, [0, 0.35, 1], [0.75, 1, 1]);
  const translateY: any = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [0, 0, 1000],
  );

  return (
    <div ref={ref}>
      <Section
        backgroundColor="#FF9966"
        title="Fuse và những thắc mắc"
        subTitle="Những câu hỏi thường gặp ở Fuse và những câu hỏi bạn đặt cho Fuse"
      >
        <motion.div
          style={{
            translateY: hidden ? 0 : translateY,
            opacity: hidden ? 1 : opacity,
            scale: hidden ? 1 : scale,
            transformOrigin: "center",
          }}
          className="w-full"
        >
          <div className="flex justify-between">
            <div className="relative flex w-full flex-col gap-8 rounded-2xl border-2 border-black bg-background p-6 shadow-3d sm:gap-10 sm:p-8 md:gap-12 md:p-10 lg:gap-16 lg:p-14">
              <PopularQuestion />
              <Feedback />
            </div>
          </div>
          <div></div>
        </motion.div>
      </Section>
    </div>
  );
};

export default FeedbackSection;
