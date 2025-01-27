"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-2-Cards";
import GearImageCard from "../All-Cards/Gear-Image-Card";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { gearUp_1_Query } from "@/lib/query";
import { urlFor } from "@/sanity/lib/image";
import { Iproducts } from "@/lib/types";
import { useEffect, useState } from "react";
import GearUpSkeleton from "../Loading-Skeletons/Gear-Up/Gear-Up-Skeleton";

export default function GearSliderMobile() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Iproducts[]>([]);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        setLoading(true);
        const response = await client.fetch(gearUp_1_Query);
        setProducts(response);
      } catch (error) {
        console.error("Error To Fetching Gear Up Mobile : ", error);
      } finally {
        setLoading(false);
      }
    };
    getProductsData();
  }, []);

  return (
    <>
      <Carousel>
        <CarouselContent>
          {loading ? (
            <GearUpSkeleton />
          ) : (
            products.map((product: Iproducts, index: number) => {
              return (
                <Link key={index} href={`products/${product._id}`}>
                  <CarouselItem>
                    <GearImageCard
                      image={urlFor(product.image).url()}
                      tittle={product.productName}
                      price={product.price}
                      category={product.category}
                    />
                  </CarouselItem>
                </Link>
              );
            })
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
