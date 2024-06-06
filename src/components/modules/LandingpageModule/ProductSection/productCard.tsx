import React from "react";

import { keys } from ".";
import Flashcard from "./flashcard";
import StudyPosition from "./studyposition";
import ExamReview from "./examreview";

type TProps = {
  turn: {
    key: string;
  };
};

function ProductCard({ turn }: TProps) {
  return (
    <div className="flex h-[fit] sm:h-[fit] md:h-[670px] lg:h-[600px] w-full items-start md:items-center rounded-2xl border-2 border-black bg-[#f5f3ea] p-6 md:p-16 shadow-3d-dark">
      {turn.key === keys[0].value && <Flashcard />}
      {turn.key === keys[1].value && <ExamReview/>}
      {turn.key === keys[2].value && <StudyPosition/>}
    </div>
  );
}

export default ProductCard;
