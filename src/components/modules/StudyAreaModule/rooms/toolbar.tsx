"use client";

import React from "react";
import { Search } from "@/components/ui/search";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

import { subjects } from "@/data/study-area";
import { cn } from "@/lib/utils";
type ToolbarType = {
  filterBy: string;
};

const Toolbar = () => {
  const [filterBy, setFilterBy] = React.useState<ToolbarType["filterBy"]>(
    subjects[0]?.subject,
  );

  const handleClickFilterOption = (data: string) => {
    if (data == filterBy) data = subjects[0]?.subject;

    setFilterBy(data);
  };

  return (
    <div className="flex flex-col gap-6">
      <Search placeholder="Nhập mã phòng hoặc email người tạo phòng" />
      <Carousel
        opts={{
          align: "start",
        }}
        className="flex w-full flex-col gap-7"
      >
        <CarouselContent className="flex gap-6 px-4">
          {subjects.map((item, index) => (
            <Badge
              key={index}
              className={cn(
                "md:text-md text-nowrap rounded-sm border-2 border-black bg-background px-2 py-2 text-sm font-normal text-black transition-all hover:bg-black hover:text-white hover:opacity-30 md:px-8",
                filterBy == item.subject &&
                  "bg-black text-white hover:bg-black hover:opacity-100",
              )}
              onClick={() => {
                handleClickFilterOption(item.subject);
              }}
            >
              {item.subject}
            </Badge>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden lg:flex" />
        <CarouselPrevious className="hidden lg:flex" />
      </Carousel>
    </div>
  );
};

export default Toolbar;
