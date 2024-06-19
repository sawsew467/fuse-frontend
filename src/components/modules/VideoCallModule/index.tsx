"use client";
import MainControll from "./MainControll";
import TopHeadControll from "./TopHeadControll";
import VideoCallSection from "./VideoCallSection";

function VideoCalModule() {
  return (
    <div className="absolute top-0 h-full w-full animate-fade select-none bg-black/20 p-4">
      <div className="flex h-full w-full flex-col justify-between gap-2">
        <TopHeadControll />
        <VideoCallSection />
        <MainControll />
      </div>
    </div>
  );
}

export default VideoCalModule;
