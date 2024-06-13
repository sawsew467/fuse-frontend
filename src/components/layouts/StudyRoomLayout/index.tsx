"use client";
import React from "react";
import Image from "next/image";

import Avatar from "@public/images/avatartwo.jpg";
import HomeIcon from "@public/icons/studyroom/home.svg";
import VideoIcon from "@public/icons/studyroom/video.svg";
import MusicIcon from "@public/icons/studyroom/music.svg";
import TimeIcon from "@public/icons/studyroom/arlarm.svg";
import ChatIcon from "@public/icons/studyroom/chat.svg";
import SettingIcon from '@public/icons/studyroom/setting.svg'

import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { cn } from "@/lib/utils";
import { updateTabState } from "@/store/slices/studyroom";

function StudyRoomLayout({ children }: { children: React.ReactNode }) {
  const { tabState } = useAppSelector((state) => state.studyRoom);
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 p-4 md:flex-row">
      <div className="flex h-fit w-fit flex-row items-center justify-between gap-2 md:gap-5 rounded-2xl border-2 border-black bg-white p-2 shadow-3d-light md:h-full md:flex-col md:p-4">
        <div className="hidden md:block">
          <h3 className="font-title text-[28px]">fuse</h3>
        </div>
        <ul className="flex select-none flex-row gap-2 md:gap-4 md:flex-col">
          <li>
            <div
              className={cn(
                "flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50%] border-2 border-black transition hover:shadow-3d-light",
                `${tabState.isHome ? "bg-primary" : "bg-white"}`,
              )}
              onClick={() => {
                dispatch(updateTabState({
                    field: "isHome",
                    value: true,
                }))
                dispatch(updateTabState({
                    field: "isVideoCall",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isMusicCall",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isChat",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isAlarm",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isSetting",
                    value: false,
                }))
              }}
            >
              <Image src={HomeIcon} width={40} height={40} alt="icons" />
            </div>
          </li>
          <li>
            {" "}
            <div
              className={cn(
                "flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50%] border-2 border-black transition hover:shadow-3d-light",
                `${tabState.isVideoCall ? "bg-primary" : "bg-white"}`,
              )}
              onClick={() => {
                dispatch(updateTabState({
                    field: "isHome",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isVideoCall",
                    value: true,
                }))
                dispatch(updateTabState({
                    field: "isMusicCall",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isChat",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isAlarm",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isSetting",
                    value: false,
                }))
              }}
            >
              <Image src={VideoIcon} width={30} height={30} alt="icons" />
            </div>
          </li>
          <li>
            {" "}
            <div
              className={cn(
                "flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50%] border-2 border-black transition hover:shadow-3d-light",
                `${tabState.isMusicCall ? "bg-primary" : "bg-white"}`,
              )}
              onClick={() => {
                dispatch(updateTabState({
                    field: "isHome",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isVideoCall",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isMusicCall",
                    value: true,
                }))
                dispatch(updateTabState({
                    field: "isChat",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isAlarm",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isSetting",
                    value: false,
                }))
              }}
            >
              <Image src={MusicIcon} width={30} height={30} alt="icons" />
            </div>
          </li>
          <li>
            <div
              className={cn(
                "flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50%] border-2 border-black transition hover:shadow-3d-light",
                `${tabState.isChat ? "bg-primary" : "bg-white"}`,
              )}
              onClick={() => {
                dispatch(updateTabState({
                    field: "isHome",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isVideoCall",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isMusicCall",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isChat",
                    value: true,
                }))
                dispatch(updateTabState({
                    field: "isAlarm",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isSetting",
                    value: false,
                }))
              }}
            >
              <Image src={ChatIcon} width={30} height={30} alt="icons" />
            </div>
          </li>
          <li>
            {" "}
            <div
              className={cn(
                "flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50%] border-2 border-black transition hover:shadow-3d-light",
                `${tabState.isAlarm ? "bg-primary" : "bg-white"}`,
              )}
              onClick={() => {
                dispatch(updateTabState({
                    field: "isHome",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isVideoCall",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isMusicCall",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isChat",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isAlarm",
                    value: true,
                }))
                dispatch(updateTabState({
                    field: "isSetting",
                    value: false,
                }))
              }}
            >
              <Image src={TimeIcon} width={30} height={30} alt="icons" />
            </div>
          </li>
          <li>
            {" "}
            <div
              className={cn(
                "flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50%] border-2 border-black transition hover:shadow-3d-light",
                `${tabState.isSetting ? "bg-primary" : "bg-white"}`,
              )}
              onClick={() => {
                dispatch(updateTabState({
                    field: "isHome",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isVideoCall",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isMusicCall",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isChat",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isAlarm",
                    value: false,
                }))
                dispatch(updateTabState({
                    field: "isSetting",
                    value: true,
                }))
              }}
            >
              <Image src={SettingIcon} width={30} height={30} alt="icons" />
            </div>
          </li>
        </ul>
        <div className="w-[50px] h-[50px]">
          <Image
            src={Avatar}
            width={200}
            height={200}
            alt="avatar"
            className="h-[50px] w-[50px] rounded-[50%] object-cover"
          />
        </div>
      </div>
      <div className="w-full h-full border-2 border-black bg-white p-2 md:p-4 rounded-2xl overflow-hidden">{children}</div>
    </div>
  );
}

export default StudyRoomLayout;
