"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import ChatIcon from "@public/icons/studyroom/chat.svg";
import { cn } from '@/lib/utils';


function ChatOutSide() {
    const [isOpenChat, setIsOpenChat] = useState<boolean>(false);

    return (
          <div className="absolute bottom-4 right-4 h-[calc(100%-96px)] w-[420px] z-[1]">
          <div
            className={cn(
              "absolute bottom-0 right-[0px] flex h-full w-full flex-row items-end gap-4 transition duration-500",
              `${isOpenChat ? "translate-x-0" : "translate-x-[372px]"}`,
            )}
          >
            <div
              className="h-fit w-fit cursor-pointer rounded-lg backdrop-blur-sm bg-white/80 p-2"
              onClick={() => setIsOpenChat(!isOpenChat)}
            >
              <Image
                src={ChatIcon}
                alt="icons"
                height={40}
                width={40}
                className="h-[40px] w-[40px]"
              />
            </div>
            <div className="border-2 border-black hover:shadow-3d-hover h-full w-full rounded-lg backdrop-blur-sm transition bg-white/80 p-2"></div>
          </div>
        </div>
    )
}

export default ChatOutSide
