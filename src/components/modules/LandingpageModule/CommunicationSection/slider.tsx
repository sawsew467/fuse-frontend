import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem
} from "@/components/ui/carousel";
import { dataCommunity } from "@/data/communities";
import Card from "./card";

export function Slider() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="flex w-full flex-col gap-5 md:gap-8"
    >
      <CarouselContent>
        {dataCommunity.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card key={index} data={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
}
