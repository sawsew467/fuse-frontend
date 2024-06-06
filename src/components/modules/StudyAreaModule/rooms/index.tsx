import React from "react";

import { cardsData } from "@/data/study-area";

import Card, { CardType } from "./card";

const Rooms: React.FC = () => {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {cardsData.map((card: CardType) => (
        <Card
          key = {card.id}
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
  );
};

export default Rooms;
