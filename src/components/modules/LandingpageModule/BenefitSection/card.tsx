"use client";

import Image from "next/image";

interface CardProps {
    data: {
        title: string;
        description: string;
    };
}

function Card({ data }: CardProps) {
    return (
        <ul className="">
            <li className="group hover:shadow-3d-hover  shadow-3d hover:bg-primary  transition-all  duration-500  ease-in-out  p-4 lg:p-8 md:p-8  sm:p-4 flex  flex-row lg:flex-col  md:flex-col  sm:flex-col  justify-between  items-center  gap-3 lg:gap-2  md:gap-2  sm:gap-2  bg-white  border-2  border-black rounded-3xl  ">
                <div className="w-16 h-16 flex justify-center items-center">
                    <Image
                    src="/folder_icon.svg"
                    alt="folder_icon"
                    width={36}
                    height={28}
                    />
                </div>
                <div className="flex flex-col lg:flex-col  md:flex-col  sm:flex-col gap-1 lg:gap-2  md:gap-2  sm:gap-2">
                    <h3 className="text-sm md:text-sm lg:text-base font-semibold text-left lg:text-center md:text-center sm:text-center group-hover:text-white">{data?.title}</h3>
                    <p className="text-xs md:text-sm lg:text-base text-left lg:text-center md:text-center sm:text-center group-hover:text-white">{data?.description}</p>
                </div>
            </li>
        </ul>
    )
}

export default Card;