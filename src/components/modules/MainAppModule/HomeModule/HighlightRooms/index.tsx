"use client";
import React from "react";
import { cardsData } from "@/data/study-area";
import Card, {
  CardType,
} from "@/components/modules/StudyAreaModule/rooms/card";

function HighlightRooms() {
  return (
    <div className="flex h-fit w-full flex-col gap-5">
      <div className="font-title text-3xl">
        <h3 className="font-bold  text-2xl md:text-3xl">Phòng học nổi bật</h3>
      </div>
      <div className="grid gap-6 xl:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card: CardType) => (
          <Card
            key={card.id}
            id={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            authorName={card.authorName}
            online={card.online}
            isPrivate={card.isPrivate}
            tag={card.tag}
          />
        ))}
      </div>
    </div>
  );
}

export default HighlightRooms;
