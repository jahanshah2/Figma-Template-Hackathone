import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageCard from "../All-Cards/Image-Card";

export default function ItemSliderMobile() {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <ImageCard
              image={"/ImageShoes1.svg"}
              tittle={"Nike Air Max Pulse"}
              price={"13 995"}
              category={"Women's Shoes"}
            />
          </CarouselItem>
          <CarouselItem>
          <ImageCard
                image={"/ImageShoes2.svg"}
                tittle={"Nike Air Max Pulse"}
                price={'13 995'}
                category={"Women's Shoes"}
              />
          </CarouselItem>
          <CarouselItem>
          <ImageCard
                image={"/ImageShoes3.svg"}
                tittle={"Nike Air Max 97 SE"}
                price={'13 995'}
                category={"Women's Shoes"}
              />
          </CarouselItem>
          <CarouselItem>
          <ImageCard
                image={"/ImageShoes3.svg"}
                tittle={"Nike Air Max Pulse"}
                price={'16 995'}
                category={"Women's Shoes"}
              />
          </CarouselItem>
          <CarouselItem>
          <ImageCard
                image={"/ImageShoes3.svg"}
                tittle={"Nike Air Max 97 SE"}
                price={'13 995'}
                category={"Women's Shoes"}
              />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
