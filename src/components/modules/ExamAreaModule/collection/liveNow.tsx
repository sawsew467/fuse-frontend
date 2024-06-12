import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Search } from "@/components/ui/search";
import Card from "../card";
import Section from "../section";

import { examAreaData, liveRoom } from "@/data/exam-area";

import Fire from "@public/image/svg/fire.svg";
import {
  isCurrentDayWithinSlot,
  isCurrentTimeWithinSlot,
} from "@/utils/checkingTime";

function LiveNow() {
  return (
    <Section className="pt-1" title="Đang diễn ra" icon={Fire}>
      <Search placeholder="Nhập mã môn" />

      <Carousel
        opts={{
          align: "start",
        }}
        className="flex w-full flex-col gap-5 md:gap-8"
      >
        <CarouselContent>
          {examAreaData.map((item, index) => (
            <>
              {isCurrentTimeWithinSlot(
                item.timeSlotStart,
                item.timeSlotEnd,
              ) && (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card card={item}></Card>
                  </div>
                </CarouselItem>
              )}
            </>
          ))}
          {}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </Section>
  );
}

export default LiveNow;
