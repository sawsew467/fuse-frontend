"use client";

import Image from "next/image";

const logos = [
    {
        logo: "./stack_logos/html_icon.svg",
    },
    {
        logo: "./stack_logos/css_icon.svg",
    },
    {
        logo: "./stack_logos/figma_icon.svg",
    },
    {
        logo: "./stack_logos/github_icon.svg",
    },
    {
        logo: "./stack_logos/nextjs_icon.svg",
    },
    {
        logo: "./stack_logos/npm_icon.svg",
    },
    {
        logo: "./stack_logos/postgresql_icon.svg",
    },
    {
        logo: "./stack_logos/prettier_icon.svg",
    },
    {
        logo: "./stack_logos/redux-toolkit_icon.svg",
    },
    {
        logo: "./stack_logos/typescript_icon.svg",
    },
    {
        logo: "./stack_logos/vscode_icon.svg",
    },
    {
        logo: "./stack_logos/nextjs_icon.svg",
    },
    {
        logo: "./stack_logos/github_icon.svg",
    },
    {
        logo: "./stack_logos/postman_icon.svg",
    },
    {
        logo: "./stack_logos/prettier_icon.svg",
    },
]

function Logos() {
    return (
        <div
            className="group overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_20px,white_calc(100%-20px),_transparent_100%)]"
            style={{
                marginTop: "70px",
                paddingTop: "50px",
            }}
        >
            <div className="flex justify-center items-center whitespace-nowrap animate-infinite-scroll group-hover:animation-pause w-max">
                {logos.concat(logos).map((item, index) => (
                    <button key={index} className="flex-shrink-0 m-4 inline duration-200 custom-hover-effect ">
                        <Image
                            src={item.logo}
                            alt={`Logo ${index + 1}`}
                            width={85}
                            height={87}
                            className="bg-white rounded-2xl"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Logos;