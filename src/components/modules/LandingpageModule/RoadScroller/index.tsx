"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hourse from "./Hourse5";

function RoadScroller() {
  const ref: any = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "start start"],
  });
  const translateX = useTransform(scrollYProgress, [0, 1], [-200, 1400]);

  return (
    <div className="mt-10 w-full overflow-hidden py-10" ref={ref}>
      <div className="relative mt-20 h-[200px] w-[120vw] -translate-x-2 rotate-2 border-2 bg-primary">
        <motion.div style={{ translateX }}>
          <div className="relative w-fit">
            <Hourse />
            <div className="absolute bottom-0 left-1/2 -z-10 h-10 w-28 -translate-x-1/2 rounded-full bg-black/30 blur-md"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default RoadScroller;
