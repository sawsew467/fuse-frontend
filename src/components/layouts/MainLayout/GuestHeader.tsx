"use client";

import { useState } from "react";

import { headerItems } from "@/data/headerItems";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import ButtonArrow from "@public/svgr/ButtonArrow";
import Logo from "@public/svgr/Logo";
import ChevRight from "@public/svgr/ChevRight";

function GuestHeader() {
  const [headerClicked, setHeaderClicked] = useState("/");
  const [isHambugerClicked, setIsHambugerClicked] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full bg-background py-4">
        <div className="container flex justify-between px-5 sm:px-8 md:px-10 lg:px-[60px]">
          <Logo />
          <ul className="hidden gap-8 md:flex lg:gap-12">
            {headerItems?.map((item, index) => (
              <li
                onClick={() => setHeaderClicked(item.href)}
                key={index}
                className="mt-2 flex cursor-pointer flex-col items-center justify-center gap-1"
              >
                <span>{item?.label}</span>
                <div
                  className={cn(
                    "h-[2px] w-14 transition-all",
                    item?.href === headerClicked && "bg-primary",
                  )}
                ></div>
              </li>
            ))}
          </ul>
          <div className="gap:3 hidden md:flex lg:gap-6">
            <Button variant="link">Đăng nhập</Button>
            <Button className="flex gap-1" haveOverlay>
              <span>Đăng ký</span>
              <ButtonArrow />
            </Button>
          </div>
          <div className="flex md:hidden">
            <Button
              variant={!isHambugerClicked ? "outline" : "default"}
              haveOverlay
              onClick={() => setIsHambugerClicked((prev) => !prev)}
            >
              <div className="flex flex-col gap-1">
                <div className="h-[2px] w-6 rounded-full bg-black" />
                <div className="h-[2px] w-6 rounded-full bg-black" />
                <div className="h-[2px] w-6 rounded-full bg-black" />
              </div>
            </Button>
          </div>
        </div>
      </header>
      <div
        className={cn(
          "fixed left-0 right-0 top-[72px] z-40 h-[calc(100vh-72px)] overflow-y-hidden bg-background transition-all",
          !isHambugerClicked ? "translate-y-[-100%]" : "translate-y-[0]",
        )}
      >
        <ul className="container px-5 sm:px-8 md:px-10 lg:px-[60px]">
          {headerItems?.map((item) => (
            <li
              key={item?.label}
              className="flex cursor-pointer items-center justify-between gap-4 rounded-md px-5 py-4 transition-all hover:bg-[#DCDAD3]"
              onClick={() => setIsHambugerClicked(false)}
            >
              <span>{item?.label}</span>
              <ChevRight />
            </li>
          ))}
          <div className="mt-4 space-y-4">
            <Button className="flex w-full gap-1" variant="outline" haveOverlay>
              Đăng nhập
            </Button>
            <Button className="flex w-full gap-1" haveOverlay>
              <span>Đăng ký</span>
              <ButtonArrow />
            </Button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default GuestHeader;
