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
    <div className="group w-full overflow-hidden whitespace-nowrap pt-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_20px,white_calc(100%-20px),_transparent_100%)] sm:pt-12 md:pt-14 lg:pt-28">
      <div className="group-hover:animation-pause flex w-max animate-infinite-scroll items-center justify-center whitespace-nowrap">
        {logos.concat(logos).map((item, index) => (
          <button
            key={index}
            className="custom-hover-effect m-4 inline flex-shrink-0 duration-200"
          >
            <Image
              src={item.logo}
              alt={`Logo ${index + 1}`}
              width={64}
              height={64}
              className="rounded-2xl bg-white lg:h-20 lg:w-20"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Logos;
