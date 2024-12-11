"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import GearImageCard from "../All-Cards/Gear-Image-Card";

export default function GearSlider() {
  return (
    <>
      <div className="md:flex md:justify-between">
        <div className="md:border md:p-[40px] md:h-[390px] md:w-[500px] md:relative top-4 h-auto ">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[]}
            className="mySwiper"
          >
            <SwiperSlide>
              <GearImageCard
                image={"/ImageGear1.svg"}
                tittle={"Nike Dri-FIT ADV TechKnit Ultra"}
                price={"3 895"}
                category={"Nike Dri-FIT ADV TechKnit Ultra"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <GearImageCard
                image={"/ImageGear2.svg"}
                tittle={"Nike Dri-FIT Challenger"}
                price={"13 995"}
                category={"Men's 18cm (approx.) 2-in-1 Versatile Shorts"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <GearImageCard
                image={"/ImageShoes3.svg"}
                tittle={"Nike Air Max 97 SE"}
                price={"13 995"}
                category={"Women's Shoes"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <GearImageCard
                image={"/ImageShoes3.svg"}
                tittle={"Nike Air Max Pulse"}
                price={"16 995"}
                category={"Women's Shoes"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="md:border md:p-[40px] md:h-[390px] md:w-[500px] md:relative top-4 h-auto">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[]}
            className="mySwiper"
          >
            <SwiperSlide>
              <GearImageCard
                image={"/ImageGear3.svg"}
                tittle={"Nike Dri-FIT ADV Run Division"}
                price={"13 995"}
                category={"Women's Long-Sleeve Running Top"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <GearImageCard
                image={"/ImageGear4.svg"}
                tittle={"Nike Fast"}
                price={"13 995"}
                category={"Women's Mid-Rise 7/8 Running Leggings with Pockets"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <GearImageCard
                image={"/ImageShoes3.svg"}
                tittle={"Nike Air Max 97 SE"}
                price={"13 995"}
                category={"Women's Shoes"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
