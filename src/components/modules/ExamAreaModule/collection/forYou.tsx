import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "../card";
import Section from "../section";

import { examAreaData } from "@/data/exam-area";

import ForYouIcon from "@public/image/svg/for-you.svg";

function ForYou() {
  return (
    <Section title="Dành cho bạn" icon={ForYouIcon}>
      <Carousel
        opts={{
          align: "start",
        }}
        className="flex w-full flex-col gap-5 md:gap-8"
      >
        <CarouselContent>
          {[...examAreaData]
            .sort(() => 0.5 - Math.random())
            .slice(0, 5)
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
    </Section>
  );
}

export default ForYou;
