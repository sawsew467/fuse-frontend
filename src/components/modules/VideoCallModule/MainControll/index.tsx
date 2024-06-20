"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { actionSetIsOpenChat, actionSetIsOpenVideo } from "@/store/slices/studyRoomController";
import MicIcon from "@public/icons/studyroom/mic";
import PhoneIcon from "@public/icons/studyroom/phone";
import {
    HandIcon,
    LucideVideo,
    MessageCircle,
    Settings,
    ShieldAlert,
    Smile,
    Users
} from "lucide-react";
import { useEffect, useState } from "react";

function MainControll() {
  const [currentTime, setCurrentTime] = useState<string>("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-GB", { hour12: false });
      setCurrentTime(timeString);
    };

    updateTime(); 
    const intervalId = setInterval(updateTime, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  const {videoCall} = useAppSelector((state) => state.studyRoomController)

  const dispatch = useAppDispatch();
  return (
    <div className="flex w-full flex-row items-center justify-center">
      <div className="absolute left-4 hidden flex-row gap-2 md:flex">
        <p className="font-bold text-white">
          {currentTime.split(":")[0]}:{currentTime.split(":")[1]}
        </p>
        <div className="border-l-2 border-white"></div>
        <p className="font-bold text-white">{"Phòng của Vũ"}</p>
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
        <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover" onClick={() => dispatch(actionSetIsOpenVideo(!videoCall.isOpenVideo))}>
          <LucideVideo />
        </button>
        <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
          <HandIcon />
        </button>
        <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
          <Settings />
        </button>
      </div>

      <div className="absolute right-4 hidden md:flex flex-row-reverse gap-2">
        <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
          <ShieldAlert />
        </button>
        <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover" onClick={() => {dispatch(actionSetIsOpenChat(!videoCall.isOpenChat))}}>
          <MessageCircle />
        </button>
        <button className="rounded-full border-2 border-black bg-white/80 p-[10px] backdrop-blur-sm transition hover:shadow-3d-hover">
          <Users />
        </button>
      </div>
    </div>
  );
}

export default MainControll;
