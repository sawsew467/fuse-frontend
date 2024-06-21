import Image from "next/image";
import React from "react";

type FlashCardViewData = {
  id: string;
  title: string;
  subTitle: string;
  turns: number;
  author: Author;
}

type Author = {
  avatar: string;
  name: string;
  username: string;
}

type TProps = {
  flashCardData: FlashCardViewData;
}

function TitleCard({flashCardData}: TProps) {
  return (
    <div className="h-full rounded-[20px] border-2 shadow-3d-light hover:shadow-3d-hover transition border-black bg-white">
      <div className="h-full p-4 flex flex-col gap-2 justify-between">
        <h3 className="text-[20px] font-bold">{flashCardData.title}</h3>
        <p className="font-medium">{flashCardData.subTitle}</p>
        <div className="h-fit w-fit rounded-lg border-2 border-black px-2 bg-white">
          <p>{flashCardData.turns} lượt học</p>
        </div>
        <div className="flex flex-row gap-5 items-center">
            <div className="border-2 border-black w-fit  rounded-[50%] overflow-hidden shadow-3d-light">
                <Image src={"https://res.cloudinary.com/dy1uuo6ql/image/upload/v1713897426/nk4zyhnkf8yghycffnqs.jpg"} alt="Image" width={200} height={200} className="w-[50px] h-[50px] object-cover" unoptimized/>
            </div>
            <div>
                <p className="font-bold">{flashCardData.author.name}</p>
                <p>{flashCardData.author.username}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TitleCard;
