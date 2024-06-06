"use client";

import Image from "next/image";

const logos = [
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
    {
        logo: "/tech_stack_logos.svg",
    },
]

function Logos() {
    return (
        <div className="absolute left-0 w-full h-full flex" style={{ top: '100%', transform: 'translateY(-50%)' }}>
            <div className="w-full flex justify-center items-center gap-4 overflow-hidden">
                {logos.map((item, index) => (
                    <div key={index} className="flex-shrink-0 m-2">
                        <Image
                            src={item.logo}
                            alt={`Logo ${index + 1}`}
                            width={85}
                            height={87}
                            className="bg-white rounded-2xl"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Logos;