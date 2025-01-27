"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import ImageCard from "../All-Cards/Image-Card";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { bestAirMaxQuery } from "@/lib/query";
import { urlFor } from "@/sanity/lib/image";
import { Iproducts } from "@/lib/types";
import BestAirMaxSkeleton from "../Loading-Skeletons/Best-Air Max/Best-Air-Max-Skeleton";

export default function ItemSlider() {
  const [loading, setLoading] = useState(true);
  const [Products, setProducts] = useState<Iproducts[]>([]);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const products = await client.fetch(bestAirMaxQuery);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products Best Air Max :", error);
      } finally {
        setLoading(false);
      }
    };
    getProductsData();
  }, [loading]);

  return (
    <div className="relative top-4 h-auto">
      <Swiper
        slidesPerView={3.3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {loading ? (
          <BestAirMaxSkeleton />
        ) : (
          Products.map((product: Iproducts, index: number) => (
            <SwiperSlide key={index}>
              <Link href={`products/${product._id}`}>
                <ImageCard
                  image={urlFor(product.image).url()}
                  tittle={product.productName}
                  price={product.price}
                  category={product.category}
                />
              </Link>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}
