import React from "react";
import TitleCard from "./TitleCard";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import { flashcardDatas, recentData } from "@/data/flash-card-views";

function FlashCardSection() {
  return (
    <div className="flex h-[1000px] md:h-fit w-full flex-col gap-5 md:gap-5">
      <div className="font-title text-3xl">
        <h3 className="text-2xl font-bold md:text-3xl">FlashCards </h3>
      </div>
      <div className="h-fit gap-5 flex flex-col">
        <div className="flex flex-col gap-5">
          <h4 className="font-bold">Đã xem gần đây</h4>
          <div className="grid h-fit grid-cols-1 justify-between gap-4 lg:grid-cols-3 lg:flex-row lg:gap-[24px] xl:gap-[24px]">
            {recentData.map((item, index) => {
              return <TitleCard flashCardData={item} key={index} />;
            })}
          </div>
        </div>

        <div className="flex h-fit flex-col gap-2 md:gap-5">
          <h4 className="font-bold">Phổ biến</h4>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="flex w-full select-none flex-col gap-2 md:gap-[10px]"
            >
              <CarouselContent className="h-fit">
                {flashcardDatas.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="lg:basis-[49.7%] xl:basis-[33.3%] 2xl:basis-[33.3%]"
                  >
                    <div className="p-1 pb-1 md:px-1">
                      <TitleCard flashCardData={item} key={index} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashCardSection;
