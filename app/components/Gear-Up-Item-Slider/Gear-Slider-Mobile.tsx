import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-2-Cards";
import GearImageCard from "../All-Cards/Gear-Image-Card";

export default function GearSliderMobile() {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <GearImageCard
              image={"/ImageGear1.svg"}
              tittle={"Nike Dri-FIT ADV TechKnit Ultra"}
              price={"3 895"}
              category={"Nike Dri-FIT ADV TechKnit Ultra"}
            />
          </CarouselItem>
          <CarouselItem>
            <GearImageCard
              image={"/ImageGear2.svg"}
              tittle={"Nike Dri-FIT ADV TechKnit Ultra"}
              price={"3 895"}
              category={"Nike Dri-FIT ADV TechKnit Ultra"}
            />
          </CarouselItem>
          <CarouselItem>
            <GearImageCard
              image={"/ImageGear1.svg"}
              tittle={"Nike Dri-FIT ADV TechKnit Ultra"}
              price={"3 895"}
              category={"Nike Dri-FIT ADV TechKnit Ultra"}
            />
          </CarouselItem>
          <CarouselItem>
            <GearImageCard
              image={"/ImageGear2.svg"}
              tittle={"Nike Dri-FIT ADV TechKnit Ultra"}
              price={"3 895"}
              category={"Nike Dri-FIT ADV TechKnit Ultra"}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
