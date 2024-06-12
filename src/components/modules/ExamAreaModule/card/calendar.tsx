import React from "react";

import { cn } from "@/lib/utils";
import { isCurrentDayWithinSlot } from "@/utils/checkingTime";


type CalendarProps = {
  day: number;
};
const calendar = ({ day }: CalendarProps) => {
  return (
    <div className="flex h-6 w-5 flex-col rounded-sm hover:scale-150">
      <div
        className={cn(
          "bg-red h-2 w-5 rounded-t-sm border-2 border-b-0 border-black",
          isCurrentDayWithinSlot(day)
            ? "bg-status-online"
            : "bg-status-offline",
        )}
      ></div>
      <div className="h-4 w-5 rounded-b-sm border-2 border-black bg-white">
        <h1 className="text-center text-[8px] font-bold">
          {day == 7 ? "CN" : day + 1}
        </h1>
      </div>
    </div>
  );
};

export default calendar;
