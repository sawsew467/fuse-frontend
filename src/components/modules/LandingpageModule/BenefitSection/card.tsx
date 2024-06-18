"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { MutableRefObject, useEffect, useState } from "react";

interface CardProps {
  data: {
    title: string;
    description: string;
    icon: any;
    animate: {
      translateX: Array<number>;
      translateY: Array<number>;
    };
  };
  ref: MutableRefObject<null>;
}

function Card({ data, ref }: CardProps) {
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
  const { scrollYProgress } = useScroll({ target: ref });
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    data.animate.translateX,
  );
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    data.animate.translateY,
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.251, 1],
    [0, 0, 1, 1],
  );
  return (
    <>
      <motion.button
        style={{
          translateX: hidden ? 0 : translateX,
          translateY: hidden ? 0 : translateY,
          opacity: hidden ? 1 : opacity,
        }}
        className="group z-0 flex flex-row items-center gap-1 rounded-3xl border-2 border-black bg-white p-4 shadow-3d transition-all duration-500 ease-in-out hover:bg-primary hover:shadow-3d-hover sm:flex-col sm:gap-0 sm:p-4 md:flex-col md:gap-2 md:p-8 lg:flex-col lg:gap-2 lg:p-8"
      >
        <div className="relative flex h-16 w-16 items-center justify-center">
          <data.icon />
          <div className="absolute -bottom-2 left-4 -z-10 h-7 w-7 rounded-full bg-black/50 blur-md"></div>
        </div>
        <div className="flex flex-col gap-1 sm:flex-col sm:gap-2 md:flex-col md:gap-2 lg:flex-col lg:gap-2">
          <h3 className="text-left text-sm font-semibold group-hover:text-white sm:text-center md:text-center md:text-sm lg:text-center lg:text-base">
            {data?.title}
          </h3>
          <p className="text-left text-xs group-hover:text-white sm:text-center md:text-center md:text-sm lg:text-center lg:text-base">
            {data?.description}
          </p>
        </div>
      </motion.button>
    </>
  );
}
export default Card;
