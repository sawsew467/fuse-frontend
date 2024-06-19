"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import ProfileMainBoard from "./ProfileMainBoard";
import RoomThemeControll from "./RoomThemeControll";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import ChatOutSide from "./ChatOutSide";
import { actionSetCurrentMedia } from "@/store/slices/studyRoomController";
import { themes } from "@/data/stuty-room-themes";
import MusicBooking from "./MusicBooking";
import OutRoom from "./OutRoom";

function StudyRoomModule() {
  return (
    <div className="h-full w-full select-none animate-fade">
      <div className="absolute left-0 right-0 top-0 h-full w-full overflow-hidden p-8">
        <OutRoom/>
        <MusicBooking/>
        <ProfileMainBoard />
        <ChatOutSide />
        <RoomThemeControll />
      </div>
    </div>
  );
}

export default StudyRoomModule;
