import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

import { keys } from ".";
import Flashcard from "./flashcard";
import StudyPosition from "./studyposition";
import ExamReview from "./examreview";

type TProps = {
  turn: {
    key: string;
  };
  ref: MutableRefObject<null>;
};
const fade = {
  "hidden-top": {
    translateY: "32px",
    opacity: 0,
  },
  "view-top": {
    translateY: "0px",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  "hidden-right": {
    translateX: "-32px",
    opacity: 0,
  },
  "view-right": {
    translateX: "0px",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  "view-wiggle-hidden": {
    rotate: -24,
  },
  "view-wiggle-more": {
    rotate: [24, -24, 0],
    transition: {
      type: "spring",
      duraion: 1,
    },
  },
  "hidden-flip-down": {
    rotateX: -90,
    transformOrigin: "top",
  },
  "view-flip-down": {
    rotateX: 0,
    transformOrigin: "top",
    transition: {
      type: "spring",
      duraion: 1,
    },
  },
  "view-flip-up": {
    rotateX: 0,
    transformOrigin: "bottom",
    transition: {
      type: "spring",
      duraion: 1,
    },
  },
  "hidden-flip-up": {
    rotateX: 90,
    transformOrigin: "bottom",
  },
};

function ProductCard({ turn, ref }: TProps) {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setHidden(innerWidth < 1024);
  }, []);
  const handleResize = ({ target }: UIEvent) => {
    setHidden((target as Window)?.innerWidth < 1024);
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    [90, 0, 0, 90],
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hidden]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 1], [1, 1, 0]);
  const scale: any = useTransform(scrollYProgress, [0, 0.15, 1], [1, 1, 0]);
  return (
    <motion.div
      style={{
        rotateX: hidden ? 0 : rotateX,
        opacity: hidden ? 1 : opacity,
        scale: hidden ? 1 : scale,
        originX: "bottom",
      }}
      ref={ref}
      className="inline h-[fit] w-full transform-none items-start rounded-2xl border-2 border-black bg-[#f5f3ea] p-6 shadow-3d-dark sm:h-[fit] md:flex md:h-[670px] md:items-center md:p-16 lg:h-[600px]"
    >
      {turn.key === keys[0].value && <Flashcard fade={fade} />}
      {turn.key === keys[1].value && <ExamReview />}
      {turn.key === keys[2].value && <StudyPosition />}
    </motion.div>
  );
}

export default ProductCard;
