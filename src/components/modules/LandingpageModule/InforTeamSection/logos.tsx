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
];


function Logos() {

    return (
        <div
            className="group overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_20px,white_calc(100%-20px),_transparent_100%)] pt-10 lg:pt-28 md:pt-14 sm:pt-12 w-full"
        >
            <div
                className="flex justify-center items-center whitespace-nowrap animate-infinite-scroll w-max hover:animation-pause"
            >
                {logos.concat(logos).map((item, index) => (
                    <button key={index} className="box flex-shrink-0 mx-4 inline duration-200 ">
                        <Image
                            src={item.logo}
                            alt={`Logo ${index + 1}`}
                            width={64}
                            height={64}
                            className="lg:w-20 lg:h-20 bg-white rounded-2xl"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Logos;
