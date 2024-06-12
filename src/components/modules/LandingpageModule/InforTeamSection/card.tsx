"use client";

import Image from "next/image";

interface CardProps {
    data: {
        avatar: string;
        fullName: string;
        userName: string;
        description: string;
    };
}

function Card({ data }: CardProps) {
    return (
        <div className="w-full group hover:shadow-3d-hover shadow-3d  transition-all  p-5  sm:p-4 md:p-5 lg:p-5  flex flex-col lg:flex-col  md:flex-col  sm:flex-col  items-center  gap-6  bg-white  border-2  border-black rounded-lg  ">
            <div className="w-full flex flex-rown justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <Image
                        src={data.avatar}
                        alt="avatar"
                        width={48}
                        height={48}
                    />
                    <div className="flex flex-col overflow-hidden">
                        <h5 className="font-semibold truncate leading-normal">{data.fullName}</h5>
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
                <p className="text-sm md:text-sm lg:text-base flex flex-col gap-4">
                    {data.description.split('\n').map((line, index) => (
                        <span key={index} className="inline-block leading-5">{line}</span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default Card;