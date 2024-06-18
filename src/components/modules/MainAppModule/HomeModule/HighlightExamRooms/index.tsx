import Card from "@/components/modules/ExamAreaModule/card";
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "@/components/ui/carousel";
import { examAreaData } from "@/data/exam-area";
import React from "react";

function HighlightExamRooms() {
  return (
    <div className="flex h-fit w-full flex-col gap-5 select-none">
      <div className="font-title text-3xl">
        <h3 className="font-bold text-2xl md:text-3xl">Phòng ôn thi dành cho bạn</h3>
      </div>
      <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="flex w-full flex-col gap-5 md:gap-3"
      >
        <CarouselContent>
        {[...examAreaData]
            .sort(() => 0.5 - Math.random())
            .slice(0, 6)
            .map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card card={item}></Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
      </div>
    </div>
  );
}

export default HighlightExamRooms;
