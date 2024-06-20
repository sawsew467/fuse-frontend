"use client";
import Image from "next/image";
import React, { useState } from "react";

import LofiRoomChill from "@public/images/background/lofi1.png";
import { IThemes } from "@/data/stuty-room-themes";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { actionSetCurrentMedia } from "@/store/slices/studyRoomController";
import PauseIcon from "@public/icons/studyroom/pause";

type TProps = {
  imageSrc?: string; 
  themeName?: string;
  dataSource?: IThemes; 
}

function ThemeItem({imageSrc, themeName, dataSource}:TProps) {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const {currentMedia} = useAppSelector((state) => state.studyRoomController);
  
  return (
    <div className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          dispatch(actionSetCurrentMedia({
            id: dataSource?.id!,
            audio: dataSource?.audio!,
            name: dataSource?.name!,
            video: dataSource?.videoBackground!
          }))
        }}
    >
      <Image
        src={imageSrc ? imageSrc : LofiRoomChill}
        alt="image"
        height={100}
        width={100}
        className="h-[60px] w-[60px] rounded-lg object-cover"
        unoptimized
      />
      {isHovered && (
        <div className="animate-fade animate-duration-500 border-space absolute left-[-5px] top-[-5px] flex h-[70px] w-[70px] items-center justify-center rounded-xl border-4 border-dashed border-black">

        </div>
      )}
       {isHovered && (
        <div className="absolute bottom-[-4] left-[50%] transform translate-x-[-50%] bg-white shadow-md p-1 rounded-lg z-10">
            <p className="text-sm">{themeName ? themeName : "Something"}</p>
        </div>
      )}
      {
        currentMedia?.id == dataSource?.id && (
          <div className="animate-fade animate-duration-500 border-space absolute left-[-5px] top-[-5px] flex h-[70px] w-[70px] items-center justify-center rounded-xl border-4 border-[#fff]">
            <div className="w-[40px] h-[40px]  rounded-full backdrop-blur-sm bg-white/60 flex items-center justify-center">
              <PauseIcon size={24}/>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default ThemeItem;
