"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { isCurrentTimeWithinSlot } from "@/utils/checkingTime";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Calendar from "./calendar";

import { timeOptions } from "@/data/constants";
import Bell from "@public/svgr/Bell";
import BlackUser from "@public/svgr/BlackUser";
import JoinRoom from "@public/svgr/JoinRoom";
import { MoreOptions } from "./moreOptions";

import { useRouter } from "next-nprogress-bar";

type CardType = {
  users: User[];
  pinAt?: Date | null;
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
  const [isReceiveNotification, setIsNotification] = React.useState(
    card.isWantReceiveNotification,
  );

  const handleClickNotificationBtn = (state: boolean) => {
    setIsNotification(!state);
  };

  const router = useRouter();

  return (
    <div
      className={cn(
        "flex w-fit min-w-full max-w-full flex-col gap-2 rounded-[20px] border-2 border-black p-4 shadow-3d hover:shadow-3d-hover md:gap-4 lg:gap-8",
        isCurrentTimeWithinSlot(card.timeSlotStart, card.timeSlotEnd)
          ? "bg-gradient-to-b from-status-online to-white"
          : "bg-gradient-to-b from-status-offline to-white",
      )}
    >
      <div className="flex content-center justify-between">
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
        <MoreOptions pinedState={card?.pinAt != null} />
      </div>
      <div>
        <h1 className="text-xl font-bold sm:text-xl md:text-2xl">
          {" "}
          {card?.subject}
        </h1>
        <p className="min text-md line-clamp-3 min-h-16 w-full sm:text-lg md:min-h-20 md:text-xl lg:min-h-24">
          {card?.title}
        </p>
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
              {card.timeSlotStart?.toLocaleTimeString("en-US", {
                ...timeOptions,
                timeZone: "UTC",
              })}
              {"-"}
              {card.timeSlotEnd?.toLocaleTimeString("en-US", {
                ...timeOptions,
                timeZone: "UTC",
              })}
            </p>
          </div>
        </div>
        <div className="flex w-full gap-3">
          <Button
            className="flex w-full gap-1"
            haveOverlay
            onClick={() => {
              router.push(
                `/exam-room/${card.roomId}
                ${!isCurrentTimeWithinSlot(card.timeSlotStart, card.timeSlotEnd) ? "?offline" : ""}`,
              );
            }}
          >
            <span className="font-bold">Tham gia phòng</span>
            <JoinRoom />
          </Button>
          <Button
            className={cn(
              "bg-white p-3",
              isReceiveNotification && "bg-status-online",
            )}
            haveOverlay
            onClick={() => {
              handleClickNotificationBtn(isReceiveNotification);
            }}
          >
            <Bell className="h-5 w-4" variant="light" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
