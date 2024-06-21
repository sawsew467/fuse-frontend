"use client";
import { cn } from "@/lib/utils";

import History from "@public/svgr/History";
import { useState } from "react";
import SemesterLine from "./SemesterLine";

function HistoryControl() {
  const [isOpenHistoryControl, setIsOpenHistoryControl] =
    useState<boolean>(false);

  return (
    <>
      <div
        className={cn(
          "absolute left-4 top-[80px] z-0 h-[calc(100%-95px)] w-[87vw]",
          !isOpenHistoryControl && "z-[-1]",
        )}
      >
        <div
          className={cn(
            "duration-800 absolute bottom-0 right-[0px] flex h-full w-full flex-row items-end gap-4 transition",
            `${isOpenHistoryControl ? "translate-x-0" : "translate-x-[-100vw] animate-pulse animate-delay-[20ms] animate-once"}`,
          )}
        >
          <div className="h-full w-full overflow-auto rounded-lg border-2 border-black bg-white/80 p-4 backdrop-blur-sm transition scrollbar-hide hover:shadow-3d-dark">
            <div className="flex flex-col gap-4">
              <div className="p-4 font-title text-3xl font-bold">
                Lịch sử câu hỏi
              </div>
              <SemesterLine />
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn("absolute bottom-4 left-4 h-fit w-fit cursor-pointer rounded-lg border-2 border-black bg-white/60 p-2 backdrop-blur-lg transition group-hover:shadow-3d-hover",
          isOpenHistoryControl && "bg-status-offline/80 m-0.5"
        )}
        onClick={() => setIsOpenHistoryControl(!isOpenHistoryControl)}
      >
        <div className="z-20 h-8 w-8">
          <History
            className={cn(
              "h-full w-full",
              isOpenHistoryControl &&
                "animate-spin animate-alternate-reverse animate-once animate-ease-out",
            )}
          />
        </div>
      </div>
    </>
  );
}

export default HistoryControl;
