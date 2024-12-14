import Image from "next/image";
import React from "react";

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
import AllProductCard from "../components/All-Cards/All-Product-Card";
import Link from "next/link";

export default function AllProducts() {
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
              <Image
                src={"/FrameArrowDown.svg"}
                alt="logo"
                height={1000}
                width={1000}
                className="h-[14px] w-[14px] md:h-[14px] md:w-[14px]"
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:mt-[30px] md:justify-between">
          <div className="hidden sm:block md:w-[20%]">
            <div className="md:text-[16px] md:font-[500] md:space-y-2">
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
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-0 md:justify-between">
              <AllProductCard
                image={"/All-Product-Images/AllProductImage1.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage2.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage3.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
            </div>
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-0 md:justify-between">
              <AllProductCard
                image={"/All-Product-Images/AllProductImage4.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage5.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage6.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
            </div>
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-0 md:justify-between">
              <AllProductCard
                image={"/All-Product-Images/AllProductImage7.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage8.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage9.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
            </div>
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-0 md:justify-between">
              <AllProductCard
                image={"/All-Product-Images/AllProductImage10.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage11.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage12.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
            </div>
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-0 md:justify-between">
              <AllProductCard
                image={"/All-Product-Images/AllProductImage13.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage14.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage15.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
            </div>
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-0 md:justify-between">
              <AllProductCard
                image={"/All-Product-Images/AllProductImage16.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage17.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage18.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
            </div>
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-0 md:justify-between">
              <AllProductCard
                image={"/All-Product-Images/AllProductImage19.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage20.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage21.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
            </div>
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-0 md:justify-between">
              <AllProductCard
                image={"/All-Product-Images/AllProductImage22.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage23.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage24.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
            </div>
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-0 md:justify-between">
              <AllProductCard
                image={"/All-Product-Images/AllProductImage25.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage26.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage27.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
            </div>
            <div className="flex flex-col gap-8 md:flex md:flex-row md:gap-0 md:justify-between">
              <AllProductCard
                image={"/All-Product-Images/AllProductImage28.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage29.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
              <AllProductCard
                image={"/All-Product-Images/AllProductImage30.svg"}
                just={"Just In"}
                tittle={"Nike Air Force 1 Mid '07"}
                category={"Men's Shoes"}
                availableColors={"1 Colour"}
                price={"10 795.00"}
              />
            </div>
            <div className="border-t-[1.5px] mt-[100px] mb-[50px] md:border-t-[1px] md:mt-[100px] md:mb-[50px]">
              <h2 className="text-[19px] font-[500] mt-[50px] md:text-[19px] md:font-[500] md:mt-[50px]">
                Related Categories
              </h2>
              <div className="mt-[25px] text-[12px] font-[400] space-x-2 space-y-2 md:mt-[25px] md:text-[12px] md:font-[400] md:space-x-2 md:space-y-2">
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px]">
                  Best Selling Products
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px]">
                  Best Shoes
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px]">
                  New Basketball Shoes
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px]">
                  New Football Shoes
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px]">
                  New Men's Shoes
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px]">
                  New Running Shoes
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px]">
                  Best Men's Shoes
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px]">
                  Best Men's Shoes
                </p>
                <p className="inline-block py-[10px] px-[10px] border-[1.5px] md:inline-block rounded-[20px] md:py-[10px] md:px-[10px] md:border-[1.5px]">
                  Best Men's Shoes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
