"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";

import ButtonArrow from "@public/svgr/ButtonArrow";
import Scopy1 from "@public/svgr/Scopy1";
import Scopy2 from "@public/svgr/Scopy2";
import Arrow_subcribe from "@public/svgr/ArrowSubcribe";
import Mouse from "@public/svgr/Mouse";
import Fly from "@public/svgr/Fly";

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.75, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0, 200]);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1400px] overflow-hidden">
        <motion.div
          ref={ref}
          className="container relative flex flex-col items-center px-5 py-10 pt-16 sm:px-8 sm:pt-20 md:px-10 md:pb-28 md:pt-28 lg:px-[60px] lg:pb-32 lg:pt-36 xl:pb-36 xl:pt-48"
        >
          <motion.div className="flex flex-col items-center">
            <motion.div
              style={{
                scale: scaleText,
                opacity,
              }}
              className="flex flex-col items-center"
            >
              <h3 className="mb-3 text-center font-title text-3xl font-bold leading-tight sm:mb-4 sm:w-[500px] sm:text-4xl md:mb-5 md:w-[650px] md:text-5xl md:leading-tight lg:mb-8 lg:w-[815px] lg:text-6xl lg:leading-tight xl:w-[1024px] xl:text-7xl xl:leading-tight">
                Nền tảng <strong className="text-primary">kết nối</strong> và
                <strong className="text-primary"> tương tác</strong> học tập
                hàng đầu
              </h3>
              <p className="mb-3 w-2/3 text-center text-xs font-medium sm:mb-4 sm:text-base sm:leading-4 md:mb-5 md:w-1/2 md:text-lg md:leading-6 lg:mb-8 lg:text-xl lg:leading-7 xl:leading-8">
                FUSE - Môi trường nơi bạn có thể kết nối và tham gia vào các
                phòng học và ôn thi trực tuyến
              </p>
            </motion.div>
            <div className="flex gap-2 md:gap-3 lg:gap-5">
              <Button variant="outline" className="flex gap-1" haveOverlay>
                <p className="text-xs md:text-base">Phòng học</p>
                <ButtonArrow />
              </Button>
              <Button variant="outline" className="flex gap-1" haveOverlay>
                <p className="text-xs md:text-base">Phòng ôn thi</p>
                <ButtonArrow />
              </Button>
            </div>
          </motion.div>

          <div className="">
            <motion.div
              initial={{
                y: 200,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 0.5,
                },
              }}
              style={{ translateY, opacity }}
              className="md:left-5lg:bottom-16 absolute bottom-0 hidden transform transition-all duration-700 sm:-bottom-8 sm:-left-3 sm:block md:bottom-3 lg:left-16"
            >
              <Scopy1 className="aspect-auto h-full w-full scale-50 md:scale-75 lg:scale-100" />
            </motion.div>
            <motion.div
              initial={{
                y: 200,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,

                transition: {
                  delay: 0,
                  duration: 0.5,
                },
              }}
              style={{ translateY, opacity }}
              className="md:right-3lg:bottom-16 absolute bottom-0 hidden transition-all duration-700 sm:-bottom-8 sm:-right-6 sm:block md:bottom-3 lg:right-14"
            >
              <Scopy2 className="aspect-auto h-full w-full scale-50 md:scale-75 lg:scale-100" />
            </motion.div>
            <span className="absolute top-1/2 hidden scale-50 transition-all duration-700 md:right-36 md:block md:-translate-y-1/2 md:scale-75 lg:right-32 lg:-translate-y-[110%] lg:scale-100">
              <Arrow_subcribe />
            </span>
            <span className="absolute right-20 top-0 scale-50 transition-all duration-700 sm:right-40 sm:top-6 md:right-52 md:top-8 md:scale-75 lg:right-40 lg:top-12 lg:scale-100 xl:right-80 xl:top-24">
              <Mouse />
            </span>
            <span className="absolute -top-16 left-20 scale-50 transition-all duration-700 sm:-top-12 sm:left-40 md:-top-6 md:left-52 md:scale-75 lg:left-52 lg:top-2 lg:scale-100 xl:left-80 xl:top-5">
              <Fly />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
