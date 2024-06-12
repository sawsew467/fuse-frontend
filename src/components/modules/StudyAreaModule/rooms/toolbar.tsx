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

const Toolbar = () => {
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
              className="text-md text-nowrap rounded-sm border-2 border-black bg-background px-8 py-2 font-normal text-black hover:bg-black hover:text-white"
            >
              {item.subject}
            </Badge>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default Toolbar;
