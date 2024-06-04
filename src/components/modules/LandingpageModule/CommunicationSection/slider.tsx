import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import { dataCommunity } from "@/data/headerItems";
import Card from "./card";

export function Slider() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
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
