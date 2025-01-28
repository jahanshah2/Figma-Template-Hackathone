"use client";
import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageCard from "../All-Cards/Image-Card";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { bestAirMaxQuery } from "@/lib/query";
import { urlFor } from "@/sanity/lib/image";
import { Iproducts } from "@/lib/types";
import BestAirMaxMobileSkeleton from "../Loading-Skeletons/Best-Air-Max-Mobile/Best-Air-Max-Mobile-Skaleton";

export default function ItemSliderMobile() {
  const [loading, setLoading] = useState(true);
  const [Products, setProducts] = useState<Iproducts[]>([]); // Initialize as empty array

  useEffect(() => {
    const getProductsData = async () => {
      try {
        setLoading(true); // Ensure loading state is true when fetching data
        const products = await client.fetch(bestAirMaxQuery);
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.error(
          "Error Fetching Best Air Max Mobile Product Data",
          error
        );
      } 
    };
    getProductsData();
  }, []); 

  return (
    <>
      <Carousel>
        <CarouselContent>
          {loading ? (
            <BestAirMaxMobileSkeleton />
          ) : (
            Products.map((product: Iproducts, index: number) => (
              <Link key={index} href={`products/${product._id}`}>
                <CarouselItem>
                  <ImageCard
                    image={urlFor(product.image).url()}
                    tittle={product.productName}
                    price={product.price}
                    category={product.category}
                  />
                </CarouselItem>
              </Link>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
