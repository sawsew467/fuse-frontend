"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MusicIcon from "@public/icons/studyroom/music.svg";

import CaretUp from "@public/icons/studyroom/caret-up";
import CaretDown from "@public/icons/studyroom/caret-down";
import VolumnMute from "@public/icons/studyroom/volumn-mute.svg";
import Volumn from "@public/icons/studyroom/volumn-up.svg";
import ThemeItem from "./themeItem";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import {
  actionSetCurrentMedia,
  actionSetMute,
  actionSetVolume,
} from "@/store/slices/studyRoomController";
import { themes } from "@/data/stuty-room-themes";

function RoomThemeControll() {
  const [isOpenMusicTheme, setIsOpenMusicTheme] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [volume, setVolume] = useState<number>(50);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  const [audioOutput, setAudioOutput] = useState<string>("default");
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);

  const { audio, currentMedia } = useAppSelector(
    (state) => state.studyRoomController,
  );

  const dispatch = useAppDispatch();

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

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      setIsAtTop(scrollTop === 0);
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
    }
  };

  const handleScrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: -60, behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: 60, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
    dispatch(actionSetVolume(Number(event.target.value)));
  };

  useEffect(() => {
    const fetchAudioDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioDevices = devices.filter(
          (device) => device.kind === "audiooutput",
        );
        setAudioDevices(audioDevices);
      } catch (error) {
        console.error("Error fetching audio devices:", error);
      }
    };

    fetchAudioDevices();
  }, []);

  const handleAudioOutputChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setAudioOutput(event.target.value);
  };
  return (
    <div className="absolute left-4 top-[80px] z-10 h-[calc(100%-95px)] w-[440px]">
      <div
        className={cn(
          "absolute bottom-0 right-[0px] flex h-full w-full flex-row items-end gap-4 transition duration-500",
          `${isOpenMusicTheme ? "translate-x-0" : "translate-x-[-394px]"}`,
        )}
      >
        <div className="h-full w-full overflow-auto rounded-lg bg-white/80 p-4 backdrop-blur-sm scrollbar-hide">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-start font-title text-2xl font-bold">
                Fuse Room
              </h3>
              <p className="text-start text-xl font-bold">{currentTime}</p>
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <h3 className="font-medium">Music themes</h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-base text-[12px]">
                  Click vào một trong các biểu tượng bên dưới để thay đổi theme
                  tương ứng
                </p>
                <div className="flex flex-col items-center justify-center gap-2">
                  {/* Scroll to top x step*/}
                  <button onClick={handleScrollUp} disabled={isAtTop}>
                    <CaretUp color={isAtTop ? "#ffffff" : "#000000"} />
                  </button>
                  <div
                    className="flex max-h-[200px] flex-wrap justify-center gap-5 overflow-auto p-1 scrollbar-hide"
                    ref={scrollContainerRef}
                  >
                    {themes.map((item, index) => (
                      <div key={index}>
                        <ThemeItem
                          key={item.id}
                          themeName={item.name}
                          imageSrc={item.imageBackground}
                          dataSource={item}
                        />
                      </div>
                    ))}
                    {Array.from({ length: 10 }).map((item, index: number) => (
                      <div key={index}>
                        <ThemeItem />
                      </div>
                    ))}
                  </div>
                  {/* Scroll to bottom x step */}
                  <button
                    onClick={handleScrollDown}
                    disabled={isAtBottom}
                    className="cursor-pointer"
                  >
                    <CaretDown color={isAtBottom ? "#ffffff" : "#000000"} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <h3>Media controll</h3>
              </div>

              <div className="flex flex-row items-center gap-4 rounded-lg bg-white/50 p-2">
                <div
                  onClick={() => dispatch(actionSetMute(!audio.muted))}
                  className="cursor-pointer"
                >
                  <Image
                    src={audio.muted ? VolumnMute : Volumn}
                    alt="icon"
                    height={30}
                    width={30}
                  />
                </div>
                <div className="flex w-full flex-row items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="h-1 w-full cursor-pointer appearance-none rounded bg-gray-300"
                  />
                  <span className="text-sm font-medium">{volume}%</span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 rounded-lg bg-white/50 p-2">
                <div>
                  <p className="text-[12px]">Audio Output</p>
                </div>
                <div className="flex w-full flex-row items-center gap-2">
                  <select
                    value={audioOutput}
                    onChange={handleAudioOutputChange}
                    className="w-full appearance-none rounded-lg p-2 outline-none"
                  >
                    <option value="default">Default</option>
                    {audioDevices.map((device) => (
                      <option key={device.deviceId} value={device.deviceId}>
                        {device.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-lg bg-white/50 p-2">
                <div>
                  <p className="text-[12px]">Video Input</p>
                </div>
                <div className="flex w-full flex-row items-center gap-2">
                  <select
                    value={audioOutput}
                    onChange={handleAudioOutputChange}
                    className="w-full appearance-none rounded-lg p-2 outline-none"
                  >
                    <option value="default">Default</option>
                    {audioDevices.map((device) => (
                      <option key={device.deviceId} value={device.deviceId}>
                        {device.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-fit w-fit cursor-pointer rounded-lg bg-white/80 p-2 backdrop-blur-sm"
          onClick={() => setIsOpenMusicTheme(!isOpenMusicTheme)}
        >
          <Image
            src={MusicIcon}
            alt="icons"
            height={40}
            width={40}
            className="h-[35px] w-[35px]"
          />
        </div>
      </div>
    </div>
  );
}

export default RoomThemeControll;
