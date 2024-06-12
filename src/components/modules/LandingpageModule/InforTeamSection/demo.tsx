"use client";

import Image from "next/image";
import React, { useState, MouseEvent } from 'react';

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

function Demo() {
  const [coords, setCoords] = useState({ x: 10000, y: 10000 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 10000, y: 10000 });
  };

  const scaleFactor = (el: HTMLButtonElement | null) => {
    if (!el) return 1;
    let rect = el.getBoundingClientRect();
    let dx = Math.abs(coords.x - (rect.left + rect.right) / 2.0);
    let dy = Math.abs(coords.y - (rect.top + rect.bottom) / 2.0);
    let dist = Math.sqrt(dx ** 2 + dy ** 2);
    return Math.min(Math.max(1.0, (2.0 - (dist - 20) / 120)), 2.0);
  };

  const size = (el: HTMLButtonElement | null) => {
    return String(Math.round(64 * scaleFactor(el))) + 'px';
  };
  return (
    <div
      className="group overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_20px,white_calc(100%-20px),_transparent_100%)] pt-10 lg:pt-28 md:pt-14 sm:pt-12 w-full"
    >
      <div className="flex justify-center items-center whitespace-nowrap animate-infinite-scroll w-auto hover:animation-pause"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div id="hoverarea" className="flex items-end gap-x-4" style={{ height: '96px' }}>
          {logos.concat(logos).map((item, index) => (
            <button
              key={index}
              className="transition-all flex-shrink-0 inline duration-200 "
              style={{ width: size(document.getElementById(`button-${index}`) as HTMLButtonElement), height: size(document.getElementById(`button-${index}`) as HTMLButtonElement) }}
              id={`button-${index}`}
            >
              <Image
                src={item.logo}
                alt="logo"
                width={64}
                height={64}
                className="w-full h-full object-cover bg-white rounded-2xl"
              />
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Demo;