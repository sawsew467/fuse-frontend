import React from "react";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  },
};

const ScrollingText = () => {
  return (
    <div className="h-full w-full">
      <div className="relative h-8 w-full overflow-x-hidden">
        <motion.div
          className="absolute whitespace-nowrap text-nowrap will-change-transform"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className="text-lg">
            <span className="mx-12">
              {" "}
              AI is a branch of computer science focused on creating systems
              that can perform tasks that would normally require human
              intelligence.{" "}
            </span>

            <span className="mx-12">
              {" "}
              AI is a branch of computer science focused on creating systems
              that can perform tasks that would normally require human
              intelligence.{" "}
            </span>

            <span className="mx-12">
              {" "}
              AI is a branch of computer science focused on creating systems
              that can perform tasks that would normally require human
              intelligence.{" "}
            </span>
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingText;
