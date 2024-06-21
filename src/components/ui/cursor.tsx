"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

function Cursor() {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseDown = (event: any) => {
      setIsDown(true);
    };
    const handleMouseUp = (event: any) => {
      setIsDown(false);
    };
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.addEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed left-40 top-40 z-[999] lg:block hidden"
        style={{ left: `${position.x + 4}px`, top: `${position.y + 4}px` }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#444"
            stroke="#444"
            stroke-width="1.5"
            d="M0.75 2.91c-0.36-1.18 1.26-2.32 2.42-1.64l28.75 13.67c1.47 0.7 1.12 3.02-0.68 3.34l-11.58 2.38c-0.32 0.07-0.6 0.17-0.87 0.32-0.26 0.15-0.47 0.36-0.61 0.61l-5.9 12.44c-0.81 1.71-3.17 1.46-3.53-0.54L0.75 2.91z"
            className={cn(
              "translate-x-[3px] translate-y-[3px] transition-all duration-75",
              isDown ? "translate-x-[0px] translate-y-[0px]" : "",
            )}
          ></path>
          <path
            fill="#F96"
            stroke="#444"
            stroke-width="1.5"
            d="M0.75 2.91c-0.36-1.18 1.26-2.32 2.42-1.64l28.75 13.67c1.47 0.7 1.12 3.02-0.68 3.34l-11.58 2.38c-0.32 0.07-0.6 0.17-0.87 0.32-0.26 0.15-0.47 0.36-0.61 0.61l-5.9 12.44c-0.81 1.71-3.17 1.46-3.53-0.54L0.75 2.91z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Cursor;
