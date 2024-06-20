"use client";
import Image from "next/image";
import { Variants, motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface CardProps {
  data: {
    avatar: string;
    fullName: string;
    userName: string;
    description: string;
    facebookLink: string;
  };
  childAnimate?: Variants;
  handleHover?: (item: string) => void;
  hover?: string;
}

function Card({ data, childAnimate, handleHover, hover }: CardProps) {
  return (
    <motion.div
      variants={childAnimate}
      onMouseEnter={() => handleHover && handleHover(data.userName)}
      onMouseLeave={() => handleHover && handleHover("")}
    >
      <span
        className={cn(
          "group flex h-full w-full flex-col gap-6 rounded-lg border-2 border-black bg-white p-5 shadow-3d transition-all duration-300 hover:shadow-3d-hover sm:flex-col sm:p-4 md:flex-col md:p-5 lg:flex-col lg:p-5",
          hover === data.userName ? "scale-110 " : hover && "opacity-60 delay-200",
        )}
      >
        <div className="flex-rown flex w-full items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={data.avatar}
              alt="avatar"
              width={50}
              height={50}
              className="aspect-square rounded-full object-cover"
            />
            <div className="flex flex-col overflow-hidden">
              <h5 className="truncate font-semibold leading-normal">
                {data.fullName}
              </h5>
              <span>{data.userName}</span>
            </div>
          </div>
          <a href={data.facebookLink}>
            <Image
              src="/facebook.svg"
              alt="facebook icon"
              width={36}
              height={36}
            />
          </a>
        </div>
        <div className="">
          <p className="flex flex-col gap-4 text-sm md:text-sm lg:text-base">
            {data.description.split("\n").map((line, index) => (
              <span key={index} className="inline-block leading-5">
                {line}
              </span>
            ))}
          </p>
        </div>
      </span>
    </motion.div>
  );
}

export default Card;
