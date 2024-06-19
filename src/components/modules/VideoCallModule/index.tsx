"use client";
import InfoIcon from "@public/icons/studyroom/info";
import MusicIcon from "@public/icons/studyroom/music";
import MuteIcon from "@public/icons/studyroom/mute";
import Undo from "@public/icons/studyroom/undo.svg";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";

import MusicIconSvg from "@public/icons/studyroom/music.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { actionSetMute } from "@/store/slices/studyRoomController";
import VolumeIcon from "@public/icons/studyroom/volume";
import PhoneIcon from "@public/icons/studyroom/phone";
import MicIcon from "@public/icons/studyroom/mic";
import { HandIcon, Icon, Lock, LucideVideo, MessageCircle, Settings, ShieldAlert, Smile, Users, Video } from "lucide-react";
import { useEffect, useState } from "react";

function VideoCalModule() {
  const { audio } = useAppSelector((state) => state.studyRoomController);
  const dispatch = useAppDispatch();

  const router = useRouter();


  const [currentTime, setCurrentTime] = useState<string>("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-GB", { hour12: false });
      setCurrentTime(timeString);
    };

    updateTime(); // Initial call to set the time immediately
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="absolute top-0 h-full w-full animate-fade bg-black/20 p-4 select-none">
      <div className="flex h-full w-full flex-col justify-between gap-2">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="">
            <button
              className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover"
              onClick={() => router.push('/study-room/any')}
            >
              <Image src={Undo} alt="icon" />
            </button>
          </div>

          <div className="flex flex-row gap-2">
            <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
              <Image src={MusicIconSvg} alt="icon" width={24} height={24} />
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
        <div className="h-full w-full rounded-lg bg-white/40 backdrop-blur-sm"></div>

        <div className=" flex w-full flex-row items-center justify-center">
          <div className="absolute left-4 hidden md:flex flex-row gap-2">
            <p className="text-white font-bold">{currentTime.split(":")[0]}:{currentTime.split(":")[1]}</p>
            <div className="border-l-2 border-white"></div>
            <p className="text-white font-bold">{"Phòng của Vũ"}</p>
          </div>
          <div className="flex flex-row-reverse gap-2">
            <button className="rounded-full border-2 border-black bg-red-600/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
              <PhoneIcon />
            </button>
            <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
              <Smile />
            </button>
            <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
              <MicIcon />
            </button>
            <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
              <LucideVideo />
            </button>
            <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
              <HandIcon />
            </button>
            <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
              <Settings/>
            </button>
          </div>

          <div className="flex flex-row-reverse gap-2 right-4 absolute">
              <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
                <ShieldAlert/>
              </button>
              <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
                <MessageCircle/>
              </button>
              <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
                <Users/>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCalModule;
