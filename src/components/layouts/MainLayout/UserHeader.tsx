"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AppProgressBar, useRouter } from "next-nprogress-bar";
import { motion } from "framer-motion";

import { headerUser } from "@/data/headerItems";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Logo from "@public/svgr/Logo";
import ChevRight from "@public/svgr/ChevRight";
import Image from "next/image";
import { CustomInput } from "@/components/ui/customInput";
import { LogOutIcon, Plus, Settings, User } from "lucide-react";
import webStorageClient from "@/utils/webStorageClient";
import { useAppSelector } from "@/hooks/redux-toolkit";
import Nav from "@/components/modules/Header/Nav";
import Header from "@/components/modules/Header";

function UserHeader() {
  const [headerClicked, setHeaderClicked] = useState("/");
  const [isHambugerClicked, setIsHambugerClicked] = useState(false);

  const { userInfo } = useAppSelector((state) => state.auth);
  const [translateHeader, setTranslateHeader] = useState(37.5);
  const router = useRouter();

  const handleResize = useCallback(() => {
    setIsHambugerClicked(false);
  }, []);

  useEffect(() => {
    router.push(headerClicked);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [headerClicked, router, handleResize]);
  const logout = () => {
    webStorageClient.removeAll();
    window.location.reload();
  };

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
        <div className="container flex items-center justify-between gap-[50px] px-5 sm:px-8 md:px-10 lg:px-[60px]">
          <div className="flex lg:hidden">
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
          <Logo />
          <Nav headerItems={headerUser} />
          <div className="hidden flex-1 lg:block">
            <CustomInput
              className="w-full flex-1 rounded-full border-[#C1C1C1] bg-white"
              placeholder="Tìm kiếm trong fuse"
              startIcon={
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="20"
                    height="20"
                    transform="translate(0.333252)"
                    fill="white"
                  />
                  <path
                    d="M19.2086 17.6478L13.4117 11.8509C14.3113 10.688 14.7979 9.26609 14.7979 7.77056C14.7979 5.98038 14.0992 4.30181 12.8358 3.03618C11.5724 1.77056 9.8894 1.07413 8.10146 1.07413C6.31351 1.07413 4.63048 1.77279 3.36708 3.03618C2.10146 4.29957 1.40503 5.98038 1.40503 7.77056C1.40503 9.5585 2.10369 11.2415 3.36708 12.5049C4.63048 13.7706 6.31128 14.467 8.10146 14.467C9.59699 14.467 11.0166 13.9804 12.1796 13.0831L17.9765 18.8777C17.9935 18.8947 18.0136 18.9082 18.0359 18.9174C18.0581 18.9266 18.0819 18.9313 18.1059 18.9313C18.13 18.9313 18.1538 18.9266 18.176 18.9174C18.1982 18.9082 18.2184 18.8947 18.2354 18.8777L19.2086 17.9067C19.2256 17.8897 19.2391 17.8695 19.2483 17.8473C19.2575 17.8251 19.2623 17.8013 19.2623 17.7773C19.2623 17.7532 19.2575 17.7294 19.2483 17.7072C19.2391 17.685 19.2256 17.6648 19.2086 17.6478ZM11.6372 11.3063C10.6907 12.2505 9.43628 12.7706 8.10146 12.7706C6.76664 12.7706 5.51217 12.2505 4.56574 11.3063C3.62155 10.3598 3.10146 9.10538 3.10146 7.77056C3.10146 6.43573 3.62155 5.17904 4.56574 4.23484C5.51217 3.29065 6.76664 2.77056 8.10146 2.77056C9.43628 2.77056 10.693 3.28841 11.6372 4.23484C12.5814 5.18127 13.1015 6.43573 13.1015 7.77056C13.1015 9.10538 12.5814 10.3621 11.6372 11.3063Z"
                    fill="#444444"
                  />
                </svg>
              }
            />
          </div>
          <div className="gap:3 flex w-[116px] items-center gap-4 md:gap-4 lg:w-auto lg:gap-6">
            <Link href="/sign-up">
              <Button className="flex gap-1" haveOverlay>
                <Plus className="h-4 w-4 lg:h-6 lg:w-6" />
                <span className="hidden lg:block">Tạo phòng</span>
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Image
                  src={"/images/avatar.webp"}
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-black"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="-translate-x-5 lg:-translate-x-1/4">
                <DropdownMenuLabel>
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/images/avatar.webp"}
                      alt=""
                      width={54}
                      height={54}
                      className="rounded-full border-2 border-black"
                    />
                    <div className="flex flex-col gap-1">
                      <h5 className="max-w-[200px] truncate text-xl font-medium">
                        {userInfo?.displayName}
                      </h5>
                      <p className="font-normal">{userInfo?.email}</p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="flex w-[160px] items-center gap-4">
                    <User className="h-4 w-4" />
                    <span>Hồ sơ của bạn</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="flex w-[160px] items-center gap-4">
                    <Settings className="h-4 w-4" />
                    <span>Cài đặt</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={logout}>
                  <div className="flex w-[160px] items-center gap-4">
                    <LogOutIcon className="h-4 w-4" />
                    <span>Đăng xuất</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Header>
      <div
        className={cn(
          "fixed left-0 right-0 top-0 z-40 block h-full overflow-y-hidden bg-background transition-all lg:hidden",
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
          {headerUser?.map((item) => (
            <li
              key={item?.label}
              className="flex cursor-pointer items-center justify-between gap-4 rounded-md px-5 py-4 text-xs transition-all hover:bg-[#DCDAD3]"
              onClick={() => {
                setIsHambugerClicked(false);
                setHeaderClicked(item.href);
              }}
            >
              <span>{item?.label}</span>
              <ChevRight />
            </li>
          ))}
        </ul>
        <div className="mt-2 flex-1 px-10">
          <CustomInput
            className="w-full flex-1 rounded-full border-[#C1C1C1] bg-white"
            placeholder="Tìm kiếm trong fuse"
            startIcon={
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="20"
                  height="20"
                  transform="translate(0.333252)"
                  fill="white"
                />
                <path
                  d="M19.2086 17.6478L13.4117 11.8509C14.3113 10.688 14.7979 9.26609 14.7979 7.77056C14.7979 5.98038 14.0992 4.30181 12.8358 3.03618C11.5724 1.77056 9.8894 1.07413 8.10146 1.07413C6.31351 1.07413 4.63048 1.77279 3.36708 3.03618C2.10146 4.29957 1.40503 5.98038 1.40503 7.77056C1.40503 9.5585 2.10369 11.2415 3.36708 12.5049C4.63048 13.7706 6.31128 14.467 8.10146 14.467C9.59699 14.467 11.0166 13.9804 12.1796 13.0831L17.9765 18.8777C17.9935 18.8947 18.0136 18.9082 18.0359 18.9174C18.0581 18.9266 18.0819 18.9313 18.1059 18.9313C18.13 18.9313 18.1538 18.9266 18.176 18.9174C18.1982 18.9082 18.2184 18.8947 18.2354 18.8777L19.2086 17.9067C19.2256 17.8897 19.2391 17.8695 19.2483 17.8473C19.2575 17.8251 19.2623 17.8013 19.2623 17.7773C19.2623 17.7532 19.2575 17.7294 19.2483 17.7072C19.2391 17.685 19.2256 17.6648 19.2086 17.6478ZM11.6372 11.3063C10.6907 12.2505 9.43628 12.7706 8.10146 12.7706C6.76664 12.7706 5.51217 12.2505 4.56574 11.3063C3.62155 10.3598 3.10146 9.10538 3.10146 7.77056C3.10146 6.43573 3.62155 5.17904 4.56574 4.23484C5.51217 3.29065 6.76664 2.77056 8.10146 2.77056C9.43628 2.77056 10.693 3.28841 11.6372 4.23484C12.5814 5.18127 13.1015 6.43573 13.1015 7.77056C13.1015 9.10538 12.5814 10.3621 11.6372 11.3063Z"
                  fill="#444444"
                />
              </svg>
            }
          />
        </div>
      </div>
    </>
  );
}

export default UserHeader;
