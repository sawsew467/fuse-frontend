"use client";

import { MoreHorizontal, Trash } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Pin from "@public/svgr/Pin";
import Copy from "@public/svgr/Copy";
import { cn } from "@/lib/utils";


type MoreOptionType = {
  openDropDownState: boolean;
}

type MoreOptionTypeProps = {
  pinedState: boolean;
}


export function MoreOptions({pinedState}:MoreOptionTypeProps) {
  const [isPined,setIsPined] = React.useState<MoreOptionTypeProps["pinedState"]>(pinedState);
  const [open, setOpen] = React.useState<MoreOptionType["openDropDownState"]>(false);

  const handlePined = (state:MoreOptionTypeProps["pinedState"]) => {
      setIsPined(!state);
  }
  return (
    <div className="w-fit transition-all">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="link">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="shadow-3x w-[250px] border-[3px] border-dotted border-status-offline p-3 "
        >
          <DropdownMenuGroup className="space-y-2">
            <DropdownMenuItem className={cn("",
              isPined && "text-status-online"
            )}
             onClick={()=>{handlePined(isPined)}}
            >
              <Pin className="mr-2 h-5 w-5" variant={isPined ? "on" : "off"} />
              <span className="">Ghim</span>
              <DropdownMenuShortcut className="text-black">Ctrl + G</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy className="mr-2 h-5 w-5" />
              Copy Link
              <DropdownMenuShortcut>Ctrl + C</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-status-offline" />
            <DropdownMenuItem className="text-red-600">
              <Trash className="mr-2 h-4 w-4" />
              Report
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
