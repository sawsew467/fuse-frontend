"use client";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { useState } from "react";
import SemesterLine from "./SemesterLine";
import History from "@public/svgr/History";

function RoomThemeControll() {
  const [isOpenMusicTheme, setIsOpenMusicTheme] = useState<boolean>(true);

  return (
    <div className="absolute left-4 top-[80px] z-10 h-[calc(100%-95px)] w-[92vw]">
      <div
        className={cn(
          "absolute bottom-0 right-[0px] flex h-full w-full flex-row items-end gap-4 transition duration-500",
          `${isOpenMusicTheme ? "translate-x-0" : "translate-x-[-89vw]"}`,
        )}
      >
        <div className="h-full w-full overflow-auto rounded-lg border-2 border-black bg-white/80 p-4 backdrop-blur-sm transition scrollbar-hide hover:shadow-3d-dark">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-3xl p-4 font-title" >Lịch sử câu hỏi</div>
            <SemesterLine />
          </div>
        </div>
        <div
          className="h-fit w-fit cursor-pointer rounded-lg border-2 border-black bg-white/80 p-2 backdrop-blur-sm transition hover:shadow-3d-hover"
          onClick={() => setIsOpenMusicTheme(!isOpenMusicTheme)}
        >
        <div className="w-8 h-8">
          <History className="w-full h-full"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default RoomThemeControll;
