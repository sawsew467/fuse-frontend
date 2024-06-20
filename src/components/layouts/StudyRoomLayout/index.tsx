"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { actionSetCurrentMedia } from "@/store/slices/studyRoomController";
import { themes } from "@/data/stuty-room-themes";
function StudyRoomMainLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { audio, currentMedia } = useAppSelector(
    (state) => state.studyRoomController,
  );

  const [audioPlayed, setAudioPlayed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = audio.muted;
      audioRef.current.volume = audio.volume / 100;
      if (audio.muted == true) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((err) => console.error("Failed to play audio:", err));
      }
    }
  }, [audio]);

  const getRandomTheme = () => {
    const randomIndex = Math.floor(Math.random() * themes.length);
    return themes[randomIndex];
  };

   useEffect(() => {
    const randomTheme = getRandomTheme();
    dispatch(
      actionSetCurrentMedia({
        id: randomTheme.id,
        name: randomTheme.name,
        video: randomTheme.videoBackground,
        audio: randomTheme.audio,
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load(); // Reload the audio element to update the source
      audioRef.current
        .play()
        .catch((err) => console.error("Failed to play audio:", err));
    }
  }, [currentMedia.audio]);

  useEffect(() => {
    const handleUserInteraction = async () => {
      if (audioRef.current && !audioPlayed) {
        try {
          await audioRef.current.play();
          setAudioPlayed(true);
          document.removeEventListener("click", handleUserInteraction); // Remove event listener once audio plays
          document.removeEventListener("keydown", handleUserInteraction); // Remove event listener once audio plays
        } catch (err) {
          console.error("Failed to play audio:", err);
        }
      }
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, [audioPlayed]);

  useEffect(() => {
    setIsLoading(true);
    const handleLoadedData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 1 second delay
    };

    const videoElement = videoRef.current;
    const audioElement = audioRef.current;

    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData);
    }

    if (audioElement) {
      audioElement.addEventListener("loadeddata", handleLoadedData);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      }
      if (audioElement) {
        audioElement.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, [currentMedia.video, currentMedia.audio]);
  return (
    <div className="h-screen w-screen">

         {isLoading && (
        <div className="absolute inset-0 z-[1] flex items-center justify-center bg-black/60">
          <div className="loader animate-pulse text-2xl font-bold text-white">
            Loading...
          </div>
        </div>
      )}
       {!audioPlayed && (
        <div className="absolute inset-0 z-[1] flex items-center justify-center bg-black/60">
          <div className="loader animate-pulse text-2xl font-bold text-white">
            Click vào màn hình hoặc bấm phím bất kỳ để bật nhạc
          </div>
        </div>
      )}

      
      <div className="absolute h-full w-full bg-white">
        <video
          ref={videoRef}
          autoPlay
          muted
          src={currentMedia?.video}
          className={`h-full w-full animate-fade object-cover ${isLoading ? "hidden" : "block"}`}
          loop
        />
        <audio ref={audioRef} autoPlay hidden loop>
          <source src={currentMedia?.audio} />
        </audio>
      </div>
      {children}
    </div>
  );
}

export default StudyRoomMainLayout;
