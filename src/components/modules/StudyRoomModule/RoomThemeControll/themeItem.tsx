"use client";
import Image from "next/image";
import React, { useState } from "react";

import LofiRoomChill from "@public/images/background/lofi1.png";

function ThemeItem() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={LofiRoomChill}
        alt="image"
        height={100}
        width={100}
        className="h-[60px] w-[60px] rounded-lg object-cover"
      />
      {isHovered && (
        <div className="animate-fade animate-duration-500 border-space absolute left-[-5px] top-[-5px] flex h-[70px] w-[70px] items-center justify-center rounded-xl border-4 border-dashed border-[#000]">

        </div>
      )}
       {isHovered && (
        <div className="absolute bottom-[-4] left-[50%] tránsform translate-x-[-50%] bg-white shadow-md p-1 rounded-lg z-10">
            <p>{"Something"}</p>
        </div>
      )}
    </div>
  );
}

export default ThemeItem;
