import React from "react";

import { cardsData } from "@/data/study-area";

import Card, { CardType } from "./card";
import Toolbar from "./toolbar";

const Rooms: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Toolbar />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
};

export default Rooms;
