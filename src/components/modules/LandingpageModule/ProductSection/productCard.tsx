import React from "react";
import { keys } from ".";
import Flashcard from "./flashcard";
import StudyPosition from "./studyposition";

type TProps = {
  turn: {
    key: string;
  };
};

function ProductCard({ turn }: TProps) {
  return (
    <div className="flex h-[1000px] sm:h-[900px] md:h-[670px] lg:h-[600px] w-full items-start md:items-center rounded-2xl border-2 border-black bg-[#f5f3ea] p-6 md:p-16 shadow-3d-dark">
      {turn.key === keys[0].value && <Flashcard />}
      {turn.key === keys[1].value && <StudyPosition/>}
      {turn.key === keys[2].value && "Value 3"}
    </div>
  );
}

export default ProductCard;
