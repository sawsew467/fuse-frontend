"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hourse from "./Hourse5";

function RoadScroller() {
  const [hidden, setHidden] = useState(true);
  const handleResize = ({ target }: UIEvent) => {
    setHidden((target as Window)?.innerWidth < 1024);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hidden]);
  useEffect(() => {
    setHidden(innerWidth < 1024);
  }, []);
  const ref: any = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "start start"],
  });
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [hidden ? -100 : -200, hidden ? 900 : 1300],
  );

  return (
    <div className="w-full overflow-hidden lg:py-10 py-5" ref={ref}>
      <div className="relative mt-20 h-[200px] w-[120vw] -translate-x-2 rotate-2 border-2 bg-primary">
        <motion.div style={{ translateX }}>
          <div className="relative w-fit">
            <Hourse />
            <div className="absolute bottom-0 left-1/2 -z-10 h-10 w-28 -translate-x-1/2 rounded-full bg-black/30 blur-md"></div>
          </div>
        </motion.div>
      </div>
      <div id="membership"></div>
    </div>
  );
}

export default RoadScroller;
