"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ImageCard from "../All-Cards/Image-Card";

// import required modules

export default function ItemSlider() {
  return (
    <>
      <div className="relative top-4 h-auto ">
        <Swiper
          slidesPerView={3.3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[]}
          className="mySwiper"
        >
          <SwiperSlide>
              <ImageCard
                image={"/ImageShoes1.svg"}
                tittle={"Nike Air Max Pulse"}
                price={'13 995'}
                category={"Women's Shoes"}
              />
          </SwiperSlide>
          <SwiperSlide>
              <ImageCard
                image={"/ImageShoes2.svg"}
                tittle={"Nike Air Max Pulse"}
                price={'13 995'}
                category={"Women's Shoes"}
              />
          </SwiperSlide>
          <SwiperSlide>
              <ImageCard
                image={"/ImageShoes3.svg"}
                tittle={"Nike Air Max 97 SE"}
                price={'13 995'}
                category={"Women's Shoes"}
              />
          </SwiperSlide>
          <SwiperSlide>
              <ImageCard
                image={"/ImageShoes3.svg"}
                tittle={"Nike Air Max Pulse"}
                price={'16 995'}
                category={"Women's Shoes"}
              />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
