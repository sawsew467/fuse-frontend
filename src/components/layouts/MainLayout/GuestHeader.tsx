"use client";

import { useState } from "react";

import { headerItems } from "@/data/headerItems";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import ButtonArrow from "@public/svgr/ButtonArrow";
import Logo from "@public/svgr/Logo";

function GuestHeader() {
  const [headerClicked, setHeaderClicked] = useState("/");

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-background py-4">
      <div className="container flex justify-between">
        <Logo />
        <ul className="hidden gap-12 lg:flex">
          {headerItems?.map((item, index) => (
            <li
              onClick={() => setHeaderClicked(item.href)}
              key={index}
              className="flex cursor-pointer flex-col items-center gap-1"
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
        <div className="flex gap-6">
          <Button variant="link">Đăng nhập</Button>
          <Button className="flex gap-1" haveOverlay>
            <span>Đăng ký</span>
            <ButtonArrow />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default GuestHeader;
