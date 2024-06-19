"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import { headerItems } from "@/data/headerItems";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import ButtonArrow from "@public/svgr/ButtonArrow";
import Logo from "@public/svgr/Logo";
import ChevRight from "@public/svgr/ChevRight";
import Nav from "@/components/modules/Header/Nav";
import Image from "next/image";
import Header from "@/components/modules/Header";
import { useRouter } from "next-nprogress-bar";

function GuestHeader() {
  const [isHambugerClicked, setIsHambugerClicked] = useState(false);

  const router = useRouter();

  const handleResize = useCallback(() => {
    setIsHambugerClicked(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleHiddenHeader = () => {
    setIsHambugerClicked(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHiddenHeader);
    return () => {
      window.removeEventListener("scroll", handleHiddenHeader);
    };
  }, [isHambugerClicked]);

  return (
    <>
      <Header isHambugerClicked={isHambugerClicked}>
        <div className="container z-50 flex justify-between px-5 sm:px-8 md:px-10 lg:px-[60px]">
          <Logo />
          <Nav headerItems={headerItems} />
          <div className="gap:3 hidden md:flex lg:gap-6">
            <Link href="/sign-in">
              <Button variant="link">Đăng nhập</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="flex gap-1" haveOverlay>
                <span>Đăng ký</span>
                <ButtonArrow />
              </Button>
            </Link>
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
      </Header>
      <div
        className={cn(
          "fixed left-0 right-0 top-0 z-40 block h-full overflow-y-hidden bg-background transition-all duration-500 lg:hidden",
          !isHambugerClicked ? "translate-y-[-100%]" : "translate-y-[0]",
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
        <ul className="container px-5 pt-24 sm:px-8 md:px-10 lg:px-[60px]">
          {headerItems?.map((item) => (
            <Link
              href={item.href}
              key={item?.label}
              className="flex cursor-pointer items-center justify-between gap-4 rounded-md px-5 py-4 text-xs transition-all hover:bg-[#DCDAD3]"
              onClick={() => {
                setIsHambugerClicked(false);
              }}
            >
              <span>{item?.label}</span>
              <ChevRight />
            </Link>
          ))}
          <div className="mt-4 space-y-4">
            <Button
              onClick={() => {
                router.push("/sign-in");
              }}
              className="flex w-full gap-1"
              variant="outline"
              haveOverlay
            >
              Đăng nhập
            </Button>
            <Button
              onClick={() => {
                router.push("/sign-up");
              }}
              className="flex w-full gap-1"
              haveOverlay
            >
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
