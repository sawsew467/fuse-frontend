import { AppProgressBar } from "next-nprogress-bar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

let time: any;

const Header = ({
  children,
  isHambugerClicked,
}: {
  children: React.ReactNode;
  isHambugerClicked: boolean;
}) => {
  const [isHidden, setHidden] = useState(false);

  const handleHiddenHeader = () => {
    clearTimeout(time);
    time = setTimeout(() => {
      setHidden(false);
    },400);
    setHidden(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHiddenHeader);
    return () => {
      window.removeEventListener("scroll", handleHiddenHeader);
    };
  }, [isHidden]);

  return (
    <header
      style={{
        perspective: 8000,
      }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <AppProgressBar
        height="4px"
        color="#FF9966"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <motion.div
        initial={{
          rotateX: -90,
        }}
        animate={{
          rotateX: isHidden ? -90 : 0,
          transition: {
            duration: isHidden ? 0.5 : 1.5,
            type: "spring",
            bounce: isHidden ? 0 : 0.8,
          },
        }}
        className={cn(
          "relative z-50 h-full w-full origin-top bg-background py-4",
          isHambugerClicked ? "" : "shadow-xl",
        )}
      >
        <span className="absolute -bottom-2 left-0 z-10 h-2 w-full">
          <Image
            src="/wave.svg"
            alt=""
            width={1440}
            height={8}
            className="h-full w-full object-cover"
          />
        </span>
        {children}
      </motion.div>
    </header>
  );
};

export default Header;
