import React from "react";
import TitleCard from "./TitleCard";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";

function FlashCardSection() {
  return (
    <div className="flex h-fit w-full flex-col gap-5 py-[60px]">
      <div className="font-title text-3xl">
        <h3>FlashCards</h3>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="font-bold">Đã xem gần đây</h4>
        <div className="flex flex-row justify-between">
          {Array.from({ length: 3 }).map(() => {
            return <TitleCard />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="font-bold">Phổ biến</h4>
        {/* <div className='flex flex-row justify-between'>
                    {
                        Array.from({length: 3}).map(() => {
                            return (<TitleCard/>)
                        })
                    }
                </div> */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="flex w-full flex-col gap-5 md:gap-[10px] select-none"
        >
          <CarouselContent className="h-fit">
            {Array.from({ length: 6 }).map((item, index) => (
              <CarouselItem
                key={index}
                className='md:basis-1/2 h-[200px] lg:basis-[33.9%]'
              >
                <div>
                  <TitleCard />
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
