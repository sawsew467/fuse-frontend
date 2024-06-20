"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MutableRefObject, useRef } from "react";

interface CardProps {
  data: {
    title: string;
    price: number;
    features: string[];
    isBestSeller?: boolean;
    description: string;
    labelColor: string;
    id: number;
    animate: {
      x: number;
      y: number;
      opacity: number;
    };
  };
  ref: MutableRefObject<null>;
  hidden: boolean;
}

function Card({ data, ref, hidden }: CardProps) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end end"],
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.005, 0.5],
    [0, 0, 2000],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.005, 0.1], [1, 1, 0]);

  const highlightFeature = (feature: string) => {
    const [quantity, ...rest] = feature.split(" ");
    return (
      <div className="inline text-xs md:text-sm lg:text-base">
        {quantity}{" "}
        <span className="inline text-xs underline decoration-dotted underline-offset-4 opacity-50 md:text-sm lg:text-base">
          thành viên
        </span>{" "}
        {rest.join(" ")}
      </div>
    );
  };

  return (
    <motion.div
      style={{
        translateY: hidden ? 0 : translateY,
        opacity: hidden ? 1 : opacity,
      }}
      initial={data.animate}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          delay: 0.75,
          bounce: 0,
        },
      }}
      viewport={{ once: true }}
    >
      <div
        className={cn(
          "relative min-h-32 flex-1 rounded-3xl border-2 border-black bg-white p-4 transition-all duration-500 sm:p-6 md:p-8 lg:p-10",
          data?.id === 2 && "lg:hover:-translate-y-3 lg:hover:scale-[1.025]",
          data?.id === 1 &&
          "lg:-rotate-3 lg:hover:rotate-0 lg:hover:scale-[1.05]",
          data?.id === 3 &&
          "lg:rotate-3 lg:hover:rotate-0 lg:hover:scale-[1.05]",
          "shadow-3d hover:shadow-3d-hover",
        )}
      >
        {data?.isBestSeller && (
          <span className="absolute right-0 top-0 block w-fit rounded-bl-[20px] rounded-tr-[20px] border-2 border-black bg-black px-4 py-[6px] text-xs text-white md:text-sm lg:text-base">
            Thông dụng
          </span>
        )}
        <span
          className="mb-4 block w-fit rounded-2xl px-4 py-2 text-base font-bold md:text-xl lg:text-2xl"
          style={{
            backgroundColor: data?.labelColor,
          }}
        >
          {data?.title}
        </span>
        <p className="mb-2 text-xs sm:mb-4 md:mb-6 md:text-sm lg:mb-8 lg:text-base">
          {data?.description}
        </p>
        <div className="mb-2 sm:mb-4 md:mb-6 md:text-sm lg:mb-8">
          <span className="text-xl font-semibold md:text-2xl lg:text-4xl">
            {data?.price?.toLocaleString("vi")} VNĐ
          </span>
          <span className="text-xs md:text-sm lg:text-base">/Tháng</span>
        </div>
        <Button
          className="mb-6 w-full py-3 text-sm sm:mb-8 sm:py-4 sm:text-base md:mb-10 md:py-5 md:text-xl lg:mb-12 lg:py-6 lg:text-xl"
          haveOverlay
        >
          Bắt đầu
        </Button>
        <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <li className="flex items-center gap-4">
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1.33325L3.66667 6.66659L1 3.99992"
                stroke="#000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            {highlightFeature(data.features[0])}
          </li>
          {data?.features.slice(1).map((item) => (
            <li key={item} className="flex items-center gap-4">
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1.33325L3.66667 6.66659L1 3.99992"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="inline text-xs md:text-sm lg:text-base">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Card;
