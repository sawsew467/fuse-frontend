"use client";
import Image from "next/image";
import screenfull from "screenfull";

import ArrowUpDownIcon from "@public/icons/studyroom/arrow-up-down.svg";
import BellIcon from "@public/icons/studyroom/bell.svg";
import VolumnMuteIcon from "@public/icons/studyroom/volumn-mute.svg";
import VolumnUpIcon from "@public/icons/studyroom/volumn-up.svg";
import AvatarImage from "@public/images/avatartwo.jpg";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { actionSetMute } from "@/store/slices/studyRoomController";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next-nprogress-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TProps = {};

function ProfileRoomBoard({}: TProps) {
  const path = usePathname();
  const dispatch = useAppDispatch();

  const { audio } = useAppSelector((state) => state.studyRoomController);

  const [appUrl, setAppUrl] = useState<string>("");
  useEffect(() => {
    const fetchAppUrl = () => {
      const url = window.location.origin;
      setAppUrl(url + path);
    };

    fetchAppUrl();
  }, [path]);

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };
  const router = useRouter();
  return (
    <div className="absolute right-4 top-4">
      <div className="flex flex-row gap-6">
        <div className="relative z-10 flex flex-row items-center rounded-lg border-2 border-black bg-white/80 p-2 backdrop-blur-sm transition hover:shadow-3d-hover">
          <div className="px-2"></div>
          <div className="h-full border-l-2"></div>
          <div className="px-2">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="flex flex-row items-center gap-2 rounded-md px-4 py-1 text-sm outline-none transition hover:bg-secondary">
                  Phòng ôn OSG202
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="z-10 mr-6 mt-3 flex max-h-[300px] w-fit max-w-[400px] animate-fade-down flex-col gap-2 rounded-lg border-2 border-black bg-white p-4 shadow-md animate-duration-200 hover:shadow-3d-hover">
                <DropdownMenu.Label className="font-bold">
                  🐸 Người tham gia
                </DropdownMenu.Label>
                <DropdownMenu.Separator className="border-b-2" />
                <DropdownMenu.Group className="flex max-h-[600px] w-fit max-w-[400px] flex-col gap-0 overflow-auto">
                  <DropdownMenu.Item className="flex flex-col gap-3 rounded-md p-2 transition focus-visible:outline-none">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <div className="flex flex-row gap-2" key={index}>
                        <Image
                          src={AvatarImage}
                          alt="avatar"
                          height={40}
                          width={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-bold">Trần Văn Bảo Thắng</p>
                          <p className="text-sm">@thangtvb.dev</p>
                        </div>
                      </div>
                    ))}
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          <div className="h-full border-l-2"></div>
          <div className="px-2">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="rounded-md px-4 py-1 text-sm outline-none transition hover:bg-secondary">
                  Invite
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="z-10 mr-6 mt-3 flex max-h-[300px] w-fit max-w-[400px] animate-fade-down flex-col gap-2 rounded-lg border-2 border-black bg-white p-4 shadow-md animate-duration-200 hover:shadow-3d-hover">
                <DropdownMenu.Label className="font-bold">
                  Mời bạn bè
                </DropdownMenu.Label>
                <DropdownMenu.Separator className="border-b-2" />
                <DropdownMenu.Group className="flex flex-col gap-0">
                  <DropdownMenu.Item className="rounded-md p-2 transition focus-visible:outline-none">
                    <label htmlFor="" className="text-sm">
                      Link phòng
                    </label>
                    <input
                      type="text"
                      value={appUrl}
                      disabled
                      className="w-full text-ellipsis rounded-lg bg-secondary p-2 text-sm italic"
                    />
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="rounded-md p-2 transition focus-visible:outline-none">
                    <button className="rounded-md bg-secondary px-4 py-2 text-sm outline-none transition hover:bg-[#ebebeb]">
                      Copy link
                    </button>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>

        <div className="relative z-10 flex flex-row items-center gap-4 rounded-lg border-2 border-black bg-white/80 p-2 backdrop-blur-sm hover:shadow-3d-hover">
          <div className="flex flex-row-reverse gap-2 border-r-2 px-2">
            <button
              className="flex h-[30px] w-[30px] items-center justify-center rounded-md outline-none transition hover:bg-secondary"
              onClick={() => toggleFullscreen()}
            >
              <Image
                src={ArrowUpDownIcon}
                alt="icon"
                height={200}
                width={200}
                className="h-[20px] w-[20px] cursor-pointer"
              />
            </button>
            <button className="flex h-[30px] w-[30px] items-center justify-center rounded-md outline-none transition hover:bg-secondary">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Image
                    src={BellIcon}
                    alt="icon"
                    height={200}
                    width={200}
                    className="h-[20px] w-[20px] cursor-pointer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="z-10 mr-4 mt-4 flex max-h-[300px] w-fit max-w-[400px] animate-fade-down flex-col gap-2 rounded-lg border-2 border-black bg-white p-4 shadow-md animate-duration-200 hover:shadow-3d-hover">
                  <DropdownMenu.Label className="text-start font-bold">
                    Thông báo
                  </DropdownMenu.Label>
                  <DropdownMenu.Separator className="border-b-2" />
                  <DropdownMenu.Group className="flex flex-col gap-2">
                    <DropdownMenu.Item className="flex flex-col gap-2 rounded-md p-2 focus-visible:outline-none">
                      <div className="flex flex-row items-center gap-2 border-b-2 pb-2">
                        <span>🔔</span>
                        <p className="text-start text-sm">
                          Người dùng `&quot;`Lê Đức Anh Phương`&quot;` đã tham
                          gia phòng học
                        </p>
                      </div>
                      <div className="flex flex-row items-center gap-2 border-b-2 pb-2">
                        <span>✅</span>
                        <p className="text-start text-sm">
                          Bạn đã tạo phòng học thành công
                        </p>
                      </div>
                    </DropdownMenu.Item>
                  </DropdownMenu.Group>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </button>
            <button
              className="flex h-[30px] w-[30px] items-center justify-center rounded-md outline-none transition hover:bg-secondary"
              onClick={() => dispatch(actionSetMute(!audio.muted))}
            >
              <Image
                src={audio.muted ? VolumnMuteIcon : VolumnUpIcon}
                alt="icon"
                height={200}
                width={200}
                className="h-[20px] w-[20px] cursor-pointer"
              />
            </button>
          </div>
          <div className="cursor-pointer pr-4">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Image
                  src={AvatarImage}
                  alt="avatar"
                  height={200}
                  width={200}
                  className="h-[30px] w-[30px] rounded-[50%]"
                />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="z-10 mr-4 mt-3 flex w-fit animate-fade-down flex-col gap-2 rounded-lg border-2 border-black bg-white p-4 shadow-md animate-duration-200 hover:shadow-3d-hover">
                <DropdownMenu.Label className="font-bold">
                  Tài khoản
                </DropdownMenu.Label>
                <DropdownMenu.Separator className="border-b-2" />
                <DropdownMenu.Group className="flex flex-col gap-2">
                  <DropdownMenu.Item className="rounded-md p-2 transition hover:bg-secondary focus-visible:outline-none">
                    Trang cá nhân
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="rounded-md p-2 transition hover:bg-secondary focus-visible:outline-none">
                    Cài đặt tài khoản
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="border-b-2" />
                  <DropdownMenu.Item className="rounded-md p-2 transition hover:bg-secondary focus-visible:outline-none">
                    Thoát phòng
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileRoomBoard;
