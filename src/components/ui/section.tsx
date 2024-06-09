"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Span } from "next/dist/trace";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
  backgroundColor?: string;
}

const parent = {
  show: {
    transition: {
      staggerChildren: 0.02,
      type: "spring",
      bounce: 0.8,
      duration: 0.01,
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

function Section({ children, title, subTitle, backgroundColor }: SectionProps) {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor,
      }}
    >
      {backgroundColor && (
        <>
          <div className="absolute left-0 right-0 top-0">
            <Image
              src="/wave.svg"
              alt=""
              width={1440}
              height={6}
              className="w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 rotate-180">
            <Image
              src="/wave.svg"
              alt=""
              width={1440}
              height={6}
              className="w-full object-cover"
            />
          </div>
        </>
      )}
      <div className="container flex flex-col items-center px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-[60px] lg:py-28">
        {title && (
          <motion.h3
            variants={parent}
            whileInView="show"
            viewport={{
              once: true,
            }}
            className="mb-3 flex text-center font-title text-2xl font-bold sm:mb-4 sm:text-3xl md:mb-5 md:text-4xl lg:mb-6 lg:text-5xl"
          >
            {title.split("").map((word, index) => (
              <motion.p
                variants={child}
                key={index}
                className="min-w-1 md:min-w-2 lg:min-w-3"
              >
                {word}
              </motion.p>
            ))}
          </motion.h3>
        )}
        {subTitle && (
          <motion.p
            whileInView={{
              y: [20, 0],
              opacity: [0, 1],
              scale: [1.25, 1],
              transition: {
                type: "spring",
                duration: 0.5,
                delay: 0.2,
              },
            }}
            viewport={{
              once: true,
            }}
            className="mb-4 overflow-hidden text-center text-base font-normal sm:mb-6 md:mb-8 lg:mb-10 lg:text-xl"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
