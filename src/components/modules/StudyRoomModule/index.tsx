"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import ChatIcon from "@public/icons/studyroom/chat.svg";

import { cn } from "@/lib/utils";
import ProfileMainBoard from "./ProfileMainBoard";
import RoomThemeControll from "./RoomThemeControll";



function StudyRoomModule() {
  const [isOpenChat, setIsOpenChat] = useState<boolean>(false);

  const [audioPlayed, setAudioPlayed] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = 1;
      
    }
  }, [isMuted]);

  useEffect(() => {
    const handleUserInteraction = async () => {
      if (audioRef.current && !audioPlayed) {
        try {
          await audioRef.current.play();
          setAudioPlayed(true); // Set the state to true after audio has played successfully
          document.removeEventListener('click', handleUserInteraction); // Remove event listener once audio plays
          document.removeEventListener('keydown', handleUserInteraction); // Remove event listener once audio plays
        } catch (err) {
          console.error("Failed to play audio:", err);
        }
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [audioPlayed]);

  return (
    <div className="h-full w-full select-none">
      <video
        autoPlay
        muted
        src="https://res.cloudinary.com/dy1uuo6ql/video/upload/v1718294544/apgtpr7fneeoropq2glp.mp4"
        className="h-full w-full object-cover"
        loop
      />
      <audio ref={audioRef} autoPlay hidden loop>
        <source src="https://res.cloudinary.com/dy1uuo6ql/video/upload/v1718367383/Music/eaeyu7p5vjgdh58uzupv.mp4"></source>
      </audio>

      <div className="absolute left-0 right-0 top-0 h-full w-full overflow-hidden p-8">
        <ProfileMainBoard isMuted={isMuted} setIsMuted={setIsMuted}/>
        

        {/* <div className="absolute bottom-4 right-4 h-[calc(100%-96px)] w-[420px] z-[1]">
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
            <div className="h-full w-full rounded-lg backdrop-blur-sm bg-white/80 p-2"></div>
          </div>
        </div> */}

        <RoomThemeControll/>

        {/* <div className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white">
          <div className="flex flex-row items-center gap-4 p-2">
            <div className="border-r pl-2 pr-6">Đồng hồ</div>
            <div className="flex flex-row gap-4 p-2">
              <div>Tool1</div>
              <div>Tool2</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default StudyRoomModule;
