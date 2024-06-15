"use client";
import Image from "next/image";
import { Variants, motion } from "framer-motion";
interface CardProps {
  data: {
    avatar: string;
    fullName: string;
    userName: string;
    description: string;
  };
  childAnimate?: Variants;
}

function Card({ data, childAnimate }: CardProps) {
  return (
    <motion.div className="" variants={childAnimate} >
      <span className="group flex w-full h-full flex-col gap-6 rounded-lg border-2 border-black bg-white p-5 shadow-3d transition-all hover:shadow-3d-hover sm:flex-col sm:p-4 md:flex-col md:p-5 lg:flex-col lg:p-5">
        <div className="flex-rown flex w-full justify-between">
          <div className="flex flex-row items-center gap-2">
            <Image src={data.avatar} alt="avatar" width={48} height={48} />
            <div className="flex flex-col overflow-hidden">
              <h5 className="truncate font-semibold leading-normal">
                {data.fullName}
              </h5>
              <span>{data.userName}</span>
            </div>
          </div>

          <Image
            src="/facebook.svg"
            alt="facebook icon"
            width={36}
            height={36}
          />
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
