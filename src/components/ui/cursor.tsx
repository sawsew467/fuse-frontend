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
        className="fixed left-40 top-40 z-[999]"
        style={{ left: `${position.x + 4}px`, top: `${position.y + 4}px` }}
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#444"
            stroke="#444"
            stroke-width="2"
            d="M1.05978 4.04708C0.617785 2.00907 2.70978 0.352076 4.59278 1.25008L44.9598 20.5081C47.1358 21.5461 46.7388 24.7561 44.3748 25.2331L25.2198 29.0961C24.8319 29.1743 24.4681 29.343 24.1579 29.5886C23.8477 29.8341 23.5999 30.1495 23.4348 30.5091L15.2828 48.2691C14.2778 50.4591 11.0618 50.1101 10.5498 47.7541L1.05978 4.04808V4.04708Z"
            className={cn(
              "translate-x-[4px] translate-y-[4px] transition-all duration-75",
              isDown ? "translate-x-[0px] translate-y-[0px]" : "",
            )}
          ></path>
          <path
            fill="#F96"
            stroke="#444"
            stroke-width="2"
            d="M1.05978 4.04708C0.617785 2.00907 2.70978 0.352076 4.59278 1.25008L44.9598 20.5081C47.1358 21.5461 46.7388 24.7561 44.3748 25.2331L25.2198 29.0961C24.8319 29.1743 24.4681 29.343 24.1579 29.5886C23.8477 29.8341 23.5999 30.1495 23.4348 30.5091L15.2828 48.2691C14.2778 50.4591 11.0618 50.1101 10.5498 47.7541L1.05978 4.04808V4.04708Z"
          ></path>
          {/* <path
            stroke="#444"
            stroke-linecap="round"
            stroke-width="2"
            d="m31.292 14.776 3.485-13.067M14.524 28H1M17.87 15.427 9.53 4.781"
            style={{ visibility: !isDown ? "hidden" : "visible" }}
          ></path> */}
        </svg>
      </div>
    </>
  );
}

export default Cursor;

{
  /* <svg
  width="48"
  height="52"
  viewBox="0 0 48 52"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_767_1835)">
    <path
      d="M1.05978 4.04708C0.617785 2.00907 2.70978 0.352076 4.59278 1.25008L44.9598 20.5081C47.1358 21.5461 46.7388 24.7561 44.3748 25.2331L25.2198 29.0961C24.8319 29.1743 24.4681 29.343 24.1579 29.5886C23.8477 29.8341 23.5999 30.1495 23.4348 30.5091L15.2828 48.2691C14.2778 50.4591 11.0618 50.1101 10.5498 47.7541L1.05978 4.04808V4.04708Z"
      fill="#444444"
      stroke="#444444"
      stroke-width="2"
    />
    <path
      d="M1.05978 4.04708C0.617785 2.00907 2.70978 0.352076 4.59278 1.25008L44.9598 20.5081C47.1358 21.5461 46.7388 24.7561 44.3748 25.2331L25.2198 29.0961C24.8319 29.1743 24.4681 29.343 24.1579 29.5886C23.8477 29.8341 23.5999 30.1495 23.4348 30.5091L15.2828 48.2691C14.2778 50.4591 11.0618 50.1101 10.5498 47.7541L1.05978 4.04808V4.04708Z"
      fill="#FF9966"
      stroke="#444444"
      stroke-width="2"
    />
  </g>
  <defs>
    <clipPath id="clip0_767_1835">
      <rect width="48" height="52" fill="white" />
    </clipPath>
  </defs>
</svg>; */
}
