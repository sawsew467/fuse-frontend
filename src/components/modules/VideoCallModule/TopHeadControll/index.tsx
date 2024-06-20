"use client";
import InfoIcon from "@public/icons/studyroom/info";
import MuteIcon from "@public/icons/studyroom/mute";
import Undo from "@public/icons/studyroom/undo.svg";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { actionSetMute } from "@/store/slices/studyRoomController";
import MusicIconSvg from "@public/icons/studyroom/music.svg";
import VolumeIcon from "@public/icons/studyroom/volume";

function TopHeadControll() {
  const { audio } = useAppSelector((state) => state.studyRoomController);
  const dispatch = useAppDispatch();

  const router = useRouter();

  return (
    <div className="flex w-full flex-row items-center justify-between">
      <div className="">
        <button
          className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover"
          onClick={() => router.push("/study-room/any")}
        >
          <Image src={Undo} alt="icon" unoptimized/>
        </button>
      </div>

      <div className="flex flex-row gap-2">
        <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
          <Image src={MusicIconSvg} alt="icon" width={24} height={24} unoptimized/>
        </button>
        <button
          className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover"
          onClick={() => {
            dispatch(actionSetMute(!audio.muted));
          }}
        >
          {audio.muted ? <MuteIcon /> : <VolumeIcon />}
        </button>
        <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
          <InfoIcon />
        </button>
      </div>
    </div>
  );
}

export default TopHeadControll;
