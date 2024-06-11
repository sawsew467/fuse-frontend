import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "../card";
import Section from "../section";

import { examAreaData, subjects } from "@/data/exam-area";

import Books from "@public/image/svg/book.svg";

function HaveAnyThing() {
  return (
    <Section title="Môn gì cũng có" icon={Books}>
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {examAreaData.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </Section>
  );
}

export default HaveAnyThing;
