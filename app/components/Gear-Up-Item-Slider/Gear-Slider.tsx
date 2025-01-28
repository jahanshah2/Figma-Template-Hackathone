"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import GearImageCard from "../All-Cards/Gear-Image-Card";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { gearUp_1_Query, gearUp_2_Query } from "@/lib/query";
import { urlFor } from "@/sanity/lib/image";
import { Iproducts } from "@/lib/types";
import GearUpSkeleton from "../Loading-Skeletons/Gear-Up/Gear-Up-Skeleton";

export default function GearSlider() {
  const [loadiing, setLoadiing] = useState(true);
  const [productsSlider1, setProductsSlider1] = useState<Iproducts[]>();
  const [productsSlider2, setProductsSlider2] = useState<Iproducts[]>();

  useEffect(() => {
    const getProductsDataSlider1 = async () => {
      try {
        setLoadiing(true);
        const products1 = await client.fetch(gearUp_1_Query);
        setProductsSlider1(products1);
        setLoadiing(false);
      } catch (error) {
        console.error("Error To Fetching Gear Up Slider 1", error);
      }
    };
    getProductsDataSlider1();
  }, []);

  useEffect(() => {
    const getProductsDataSlider2 = async () => {
      try {
        const products2 = await client.fetch(gearUp_2_Query);
        setProductsSlider2(products2);
      } catch (error) {
        console.error("Error To Fetching Gear Up Slider 2", error);
      }
    };
    getProductsDataSlider2();
  }, []);

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
            {loadiing ? (
              <GearUpSkeleton />
            ) : (
              productsSlider1?.map((product1: Iproducts, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <Link href={`products/${product1._id}`}>
                      <GearImageCard
                        image={urlFor(product1.image).url()}
                        tittle={product1.productName}
                        price={product1.price}
                        category={product1.category}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })
            )}
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
            {loadiing ? (
              <GearUpSkeleton />
            ) : (
              productsSlider2?.map((product2: Iproducts, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <Link href={`products/${product2._id}`}>
                      <GearImageCard
                        image={urlFor(product2.image).url()}
                        tittle={product2.productName}
                        price={product2.price}
                        category={product2.category}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
}
