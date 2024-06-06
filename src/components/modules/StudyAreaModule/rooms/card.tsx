import React from "react";

import Image from "next/image";
import Lock from "@public/svgr/Lock";

import Tag, { TagType } from "./tag";

export interface CardType {
  id: number;
  imgSrc: string;
  title: string;
  authorName: string;
  online: number;
  isPrivate: boolean;
  tag: TagType["tagName"];
}

const Card: React.FC<CardType> = ({
  id,
  imgSrc,
  title,
  authorName,
  online,
  isPrivate,
  tag,
}) => {
  return (
    <div
      key={id}
      className="flex flex-col rounded-3xl border-2 border-black bg-white shadow-3d transition-all hover:shadow-3d-hover"
    >
      <div className="h-52 w-full overflow-hidden rounded-t-3xl border">
        <Image
          className="h-full w-full object-cover"
          width={400}
          height={200}
          src={imgSrc}
          alt={"background room"}
        />
      </div>

      <div className="items-between flex flex-col gap-4 p-5">
        <>
          <Tag tagName={tag} />
        </>
        <div className="h-22 space-y-1">
          <h5 className="text-base font-bold tracking-tight md:text-xl">
            {title}
          </h5>
          <p className="break-all text-sm md:text-base">{authorName}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-green-500 hover:animate-ping"></span>
            <p className="text-sm font-medium text-opacity-50 md:text-base">
              {online} {`người online`}
            </p>
          </div>
          {isPrivate && <Lock variant="dark" />}
        </div>
      </div>
    </div>
  );
};

export default Card;
