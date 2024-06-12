"use client";

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
import { useState } from "react";
import { cn } from "@/lib/utils";

function HaveAnyThing() {
  const [filterBy, setFilterBy] = useState(subjects[0].subject);

  const handleClickFilterOption = (data: string) => {
    setFilterBy(data);
  };
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {examAreaData.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </Section>
  );
}

export default HaveAnyThing;
