"use client";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import AllProductCard from "../../components/All-Cards/All-Product-Card";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { allProductsQuery } from "@/lib/query";
import { Iproducts } from "@/lib/types";
import { useEffect, useState } from "react";
import AllProductsSkeleton from "../../components/Loading-Skeletons/All-Products/All-Products-Skeleton";

export default function AllProducts() {
  const [loading, setLoading] = useState(true);
  const [productData, setProducts] = useState<Iproducts[]>([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        setLoading(true);
        const response = await client.fetch(allProductsQuery);
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.error("Error To Fetching All Products : ", error);
      }
    };
    getProductData();
  }, []);

  return (
    <div className="md:max-w-[1280px] md:mx-auto">
      <div className="px-5 md:px-14">
        <div className="mt-[80px] flex justify-between items-center  md:mt-[80px] md:flex md:justify-between md:items-center ">
          <h1 className="text-[24px] font-[500] md:text-[24px] md:font-[500]">
            New (500)
          </h1>
          <div className="flex md:flex gap-7">
            <div className="flex items-center justify-center gap-2 md:flex md:items-center md:justify-center md:gap-2">
              <p className="text-[16px] md:text-[16px]">Hide Filters</p>
              <Image
                src={"/FrameFilter.svg"}
                alt="logo"
                height={10000}
                width={1000}
                className="hidden md:block h-[30px] w-[65px] md:h-[30px] md:w-[65px]"
              />
              <div className="md:hidden flex justify-center items-center">
                <Sheet>
                  <SheetTrigger>
                    <Image
                      src={"/FrameFilter.svg"}
                      alt="logo"
                      height={1000}
                      width={1000}
                      className="h-[24px] w-[24px] md:h-[24px] md:w-[24px]"
                    />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="flex justify-center w-[100%]">
                        <Image
                          src={"/Vector2.svg"}
                          alt="logo"
                          height={10000}
                          width={1000}
                          className="h-[30px] w-[65px] md:h-[30px] md:w-[65px]"
                        />
                      </SheetTitle>
                      <SheetDescription>
                        <div className="text-start text-[17px] text-black flex flex-col space-y-5">
                          <p>Shoes</p>
                          <p>Sports Bras</p>
                          <p>Tops & T-Shirts</p>
                          <p>Hoodies & Sweatshirts</p>
                          <p>Jackets</p>
                          <p>Trousers & Tights</p>
                          <p>Shorts</p>
                          <p>Tracksuits</p>
                          <p>Jumpsuits & Rompers</p>
                          <p>Skirts & Dresses</p>
                          <p>Socks</p>
                          <p>
                            Accessories <br /> & Equipment
                          </p>
                        </div>
                        <div className="mt-[30px] md:mt-[50px]">
                          <div>
                            <Accordion type="single" collapsible>
                              <AccordionItem value="item-1">
                                <AccordionTrigger className="text-[16px] font-[500] md:text-[16px] md:font-[500]">
                                  Gender
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-1 md:flex md:flex-col md:gap-1">
                                  <div className="text-[15px] font-[400] flex items-center gap-2 md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                                    <Checkbox />
                                    <p>Men</p>
                                  </div>
                                  <div className="text-[15px] font-[400] flex items-center gap-2 md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                                    <Checkbox />
                                    <p>Women</p>
                                  </div>
                                  <div className="text-[15px] font-[400] flex items-center gap-2 md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                                    <Checkbox />
                                    <p>Unisex</p>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                          <div>
                            <Accordion type="single" collapsible>
                              <AccordionItem value="item-1">
                                <AccordionTrigger className="text-[16px] font-[500] md:text-[16px] md:font-[500]">
                                  Kids
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-1 md:flex md:flex-col md:gap-1">
                                  <div className="text-[15px] font-[400] flex items-center gap-2 md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                                    <Checkbox />
                                    <p>Boys</p>
                                  </div>
                                  <div className="text-[15px] font-[400] flex items-center gap-2 md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                                    <Checkbox />
                                    <p>Girls</p>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                          <div>
                            <Accordion type="single" collapsible>
                              <AccordionItem value="item-1">
                                <AccordionTrigger className="text-[16px] font-[500] md:text-[16px] md:font-[500]">
                                  Shop By Price
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-1 md:flex md:flex-col md:gap-1">
                                  <div className="text-[15px] font-[400] flex items-center gap-2 md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                                    <Checkbox />
                                    <p>Under ₹ 2 500.00</p>
                                  </div>
                                  <div className="text-[15px] font-[400] flex items-center gap-2 md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                                    <Checkbox />
                                    <p>₹ 2 501.00 - ₹ 7 500.00</p>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                        </div>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:flex md:items-center md:justify-center md:gap-2">
              <p className="text-[16px] md:text-[16px]">Sort By</p>
              <DropdownMenu>
                <DropdownMenuTrigger className="focus-visible:outline-none">
                  <Image
                    src={"/FrameArrowDown.svg"}
                    alt="logo"
                    height={1000}
                    width={1000}
                    className="h-[14px] w-[14px] md:h-[14px] md:w-[14px] md"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <Image
                      src={"/Vector2.svg"}
                      alt="logo"
                      height={10000}
                      width={1000}
                      className="h-[20px] w-[50px] md:h-[30px] md:w-[40px]"
                    />
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Newly listed</DropdownMenuItem>
                  <DropdownMenuItem>Most relevant</DropdownMenuItem>
                  <DropdownMenuItem>Lowest price</DropdownMenuItem>
                  <DropdownMenuItem>Highest price</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="md:flex md:mt-[30px] md:justify-between">
          <div className="hidden sm:block md:w-[20%]">
            <div className="md:text-[16px] md:font-[500] md:space-y-2">
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Shoes
              </p>
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Sports Bras
              </p>
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Tops & T-Shirts
              </p>
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Hoodies & Sweatshirts
              </p>
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Jackets
              </p>
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Trousers & Tights
              </p>
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Shorts
              </p>
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Tracksuits
              </p>
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Jumpsuits & Rompers
              </p>
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Skirts & Dresses
              </p>
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Socks
              </p>
              <p className="md:transition-all md:hover:scale-105 md:duration-300 md:hover:text-gray-400 md:cursor-pointer">
                Accessories <br /> & Equipment
              </p>
            </div>
            <div className="md:mt-[50px]">
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="md:text-[16px] md:font-[500]">
                      Gender
                    </AccordionTrigger>
                    <AccordionContent className="md:flex md:flex-col md:gap-1">
                      <div className="md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                        <Checkbox />
                        <p>Men</p>
                      </div>
                      <div className="md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                        <Checkbox />
                        <p>Women</p>
                      </div>
                      <div className="md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                        <Checkbox />
                        <p>Unisex</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="md:text-[16px] md:font-[500]">
                      Kids
                    </AccordionTrigger>
                    <AccordionContent className="md:flex md:flex-col md:gap-1">
                      <div className="md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                        <Checkbox />
                        <p>Boys</p>
                      </div>
                      <div className="md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                        <Checkbox />
                        <p>Girls</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="md:text-[16px] md:font-[500]">
                      Shop By Price
                    </AccordionTrigger>
                    <AccordionContent className="md:flex md:flex-col md:gap-1">
                      <div className="md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                        <Checkbox />
                        <p>Under ₹ 2 500.00</p>
                      </div>
                      <div className="md:text-[15px] md:font-[400] md:flex md:items-center md:gap-2">
                        <Checkbox />
                        <p>₹ 2 501.00 - ₹ 7 500.00</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:flex md:flex-col md:gap-y-3 mt-5 md:w-[78%]">
            <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-3 md:gap-y-8 md:justify-between">
              {loading ? (
                <AllProductsSkeleton />
              ) : (
                productData.map((product: Iproducts, index: number) => (
                  <Link key={index} href={`products/${product._id}`}>
                    <AllProductCard
                      image={urlFor(product.image).url()}
                      just={product.status}
                      tittle={product.productName}
                      category={product.category}
                      availableColors={`${product.colors.length} Color`}
                      price={product.price}
                    />
                  </Link>
                ))
              )}
            </div>
            <div className="border-t-[1.5px] mt-[100px] mb-[50px] md:border-t-[1px] md:mt-[100px] md:mb-[50px]">
              <h2 className="text-[19px] font-[500] mt-[50px] md:text-[19px] md:font-[500] md:mt-[50px]">
                Related Categories
              </h2>
              <div className="mt-[25px] text-[12px] font-[400] space-x-2 space-y-2 md:mt-[25px] md:text-[12px] md:font-[400] md:space-x-2 md:space-y-2">
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px] md:before:ease md:relative md:overflow-hidden md:border-gray-300 md:cursor-pointer md:shadow-2xl md:before:absolute md:before:left-0 md:before:-ml-2 md:before:h-48 md:before:w-48 md:before:origin-top-right md:before:-translate-x-full md:before:translate-y-12 md:before:-rotate-90 md:before:bg-gray-900 md:before:transition-all md:before:duration-300 md:hover:text-white md:hover:shadow-black md:hover:before:-rotate-180">
                  <span className="relative z-10">Best Selling Products</span>
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px] md:before:ease md:relative md:overflow-hidden md:border-gray-300 md:cursor-pointer md:shadow-2xl md:before:absolute md:before:left-0 md:before:-ml-2 md:before:h-48 md:before:w-48 md:before:origin-top-right md:before:-translate-x-full md:before:translate-y-12 md:before:-rotate-90 md:before:bg-gray-900 md:before:transition-all md:before:duration-300 md:hover:text-white md:hover:shadow-black md:hover:before:-rotate-180">
                  <span className="relative z-10">Best Shoes</span>
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px] md:before:ease md:relative md:overflow-hidden md:border-gray-300 md:cursor-pointer md:shadow-2xl md:before:absolute md:before:left-0 md:before:-ml-2 md:before:h-48 md:before:w-48 md:before:origin-top-right md:before:-translate-x-full md:before:translate-y-12 md:before:-rotate-90 md:before:bg-gray-900 md:before:transition-all md:before:duration-300 md:hover:text-white md:hover:shadow-black md:hover:before:-rotate-180">
                  <span className="relative z-10">New Basketball Shoes</span>
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px] md:before:ease md:relative md:overflow-hidden md:border-gray-300 md:cursor-pointer md:shadow-2xl md:before:absolute md:before:left-0 md:before:-ml-2 md:before:h-48 md:before:w-48 md:before:origin-top-right md:before:-translate-x-full md:before:translate-y-12 md:before:-rotate-90 md:before:bg-gray-900 md:before:transition-all md:before:duration-300 md:hover:text-white md:hover:shadow-black md:hover:before:-rotate-180">
                  <span className="relative z-10">New Football Shoes</span>
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px] md:before:ease md:relative md:overflow-hidden md:border-gray-300 md:cursor-pointer md:shadow-2xl md:before:absolute md:before:left-0 md:before:-ml-2 md:before:h-48 md:before:w-48 md:before:origin-top-right md:before:-translate-x-full md:before:translate-y-12 md:before:-rotate-90 md:before:bg-gray-900 md:before:transition-all md:before:duration-300 md:hover:text-white md:hover:shadow-black md:hover:before:-rotate-180">
                  <span className="relative z-10">New Men's Shoes</span>
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px] md:before:ease md:relative md:overflow-hidden md:border-gray-300 md:cursor-pointer md:shadow-2xl md:before:absolute md:before:left-0 md:before:-ml-2 md:before:h-48 md:before:w-48 md:before:origin-top-right md:before:-translate-x-full md:before:translate-y-12 md:before:-rotate-90 md:before:bg-gray-900 md:before:transition-all md:before:duration-300 md:hover:text-white md:hover:shadow-black md:hover:before:-rotate-180">
                  <span className="relative z-10">New Running Shoes</span>
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px] md:before:ease md:relative md:overflow-hidden md:border-gray-300 md:cursor-pointer md:shadow-2xl md:before:absolute md:before:left-0 md:before:-ml-2 md:before:h-48 md:before:w-48 md:before:origin-top-right md:before:-translate-x-full md:before:translate-y-12 md:before:-rotate-90 md:before:bg-gray-900 md:before:transition-all md:before:duration-300 md:hover:text-white md:hover:shadow-black md:hover:before:-rotate-180">
                  <span className="relative z-10">Best Men's Shoes</span>
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px] md:before:ease md:relative md:overflow-hidden md:border-gray-300 md:cursor-pointer md:shadow-2xl md:before:absolute md:before:left-0 md:before:-ml-2 md:before:h-48 md:before:w-48 md:before:origin-top-right md:before:-translate-x-full md:before:translate-y-12 md:before:-rotate-90 md:before:bg-gray-900 md:before:transition-all md:before:duration-300 md:hover:text-white md:hover:shadow-black md:hover:before:-rotate-180">
                  <span className="relative z-10">Best Men's Shoes</span>
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px] md:before:ease md:relative md:overflow-hidden md:border-gray-300 md:cursor-pointer md:shadow-2xl md:before:absolute md:before:left-0 md:before:-ml-2 md:before:h-48 md:before:w-48 md:before:origin-top-right md:before:-translate-x-full md:before:translate-y-12 md:before:-rotate-90 md:before:bg-gray-900 md:before:transition-all md:before:duration-300 md:hover:text-white md:hover:shadow-black md:hover:before:-rotate-180">
                  <span className="relative z-10">Best Men's Shoes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
