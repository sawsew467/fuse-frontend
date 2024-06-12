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
    <div className="flex h-fit w-full flex-col gap-5">
      <div className="font-title text-3xl">
        <h3 className="font-bold">FlashCards </h3>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="font-bold">Đã xem gần đây</h4>
        <div className=" grid grid-cols-1 lg:grid-cols-3  gap-4 lg:gap-[24px] xl:gap-[24px] lg:flex-row justify-between">
          {recentData.map((item,index) => {
            return <TitleCard flashCardData={item} key={index}/>;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="font-bold">Phổ biến</h4>
        <Carousel
          opts={{
            align: "start",
          }}
          className="flex w-full flex-col gap-5 md:gap-[10px] select-none"
        >
          <CarouselContent className="h-fit">
            {flashcardDatas.map((item, index) => (
              <CarouselItem
                key={index}
                className='lg:basis-[49.7%] xl:basis-[33.3%] 2xl:basis-[33.3%]'
              >
                <div className="pb-1 px-1">
                  <TitleCard flashCardData={item} key={index}/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots/>
        </Carousel>
      </div>
    </div>
  );
}

export default FlashCardSection;
