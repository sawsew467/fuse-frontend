import React from "react";

import { cn } from "@/lib/utils";
import { isCurrentTimeWithinSlot } from "@/utils/checkingTime";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Calendar from "./calendar";

import Bell from "@public/svgr/Bell";
import Pin from "@public/svgr/Pin";
import BlackUser from "@public/svgr/BlackUser";
import JoinRoom from "@public/svgr/JoinRoom";
import ThreeDot from "@public/svgr/ThreeDot";

type CardType = {
  users: User[];
  pinAt: Date;
  subject: string;
  title: string;
  schedule: string[]; //["1","3","4"] max have 3 value
  timeSlotStart: Date;
  timeSlotEnd: Date;
  roomId: string;
  isWantReceiveNotification: boolean;
};
type User = {
  avatarUrl: string;
  userName: string;
};

type CardProps = {
  card: CardType;
};

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div
      className={cn(
        "flex w-fit min-w-full max-w-full flex-col gap-8 rounded-[20px] border-2 border-black p-5 shadow-3d hover:shadow-3d-hover",
        isCurrentTimeWithinSlot(card.timeSlotStart, card.timeSlotEnd)
          ? "bg-gradient-to-b from-status-online to-white"
          : "bg-gradient-to-b from-status-offline to-white",
      )}
    >
      <div className="flex justify-between">
        <div className="relative">
          <div className="relative">
            {card.users.slice(0, 4).map((user: User, index: number) => (
              <Avatar
                key={index}
                className="absolute left-0 top-0 h-8 w-8 border-2 border-black"
                style={{ marginLeft: `${index * 20}px` }}
              >
                <AvatarImage src={user?.avatarUrl} />
                <AvatarFallback>{user?.userName?.charAt(0)}</AvatarFallback>
              </Avatar>
            ))}
            {card.users.length > 4 && (
              <Avatar
                key={4}
                className="absolute left-0 top-0 h-8 w-8"
                style={{ marginLeft: `${4 * 20}px` }}
              >
                <AvatarFallback className="flex flex-col p-0.5">
                  <BlackUser className="h-5 w-5" />
                  {
                    <span className="text-xs font-bold">
                      {card?.users.length - 4}
                    </span>
                  }
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>
        <button>
          <ThreeDot className="h-6 w-6" />
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-bold"> {card?.subject}</h1>
        <p className="line-clamp-3 min-h-24 w-full text-2xl">{card?.title}</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {card?.schedule?.map((day, index) => (
              <Calendar day={Number(day)} key={index} />
            ))}
          </div>
          <div className={cn("h-fit w-fit rounded-sm py-1 text-xs font-bold")}>
            <p>
              {" "}
              {card.timeSlotStart?.toLocaleTimeString()} -{" "}
              {card.timeSlotEnd?.toLocaleTimeString()}
            </p>
          </div>
        </div>
        <div className="flex w-full gap-3">
          <Button className="flex w-full gap-1" haveOverlay>
            <span>Tham gia phòng</span>
            <JoinRoom />
          </Button>
          <Button
            className={cn(
              "bg-white p-3",
              card?.isWantReceiveNotification && "bg-status-online",
            )}
            haveOverlay
          >
            <Bell className="h-5 w-4" variant="light" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
