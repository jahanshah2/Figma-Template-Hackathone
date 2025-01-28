import React from "react";
import Image from "next/image";
import { IGearUpCardProps } from "@/lib/types";

export default function GearImageCard(prop: IGearUpCardProps) {
  return (
    <>
      <div>
        <div className="h-[200px] w-[200px] md:h-[200px] md:w-[200px]">
          <Image
            src={prop.image}
            alt="shoes image"
            height={1440}
            width={1440}
            className="h-[200px] w-[200px] md:h-[200px] md:w-[200px] md:transition md:duration-300 md:ease-in-out md:hover:scale-105"
          />
        </div>
        <div className="flex gap-2 flex-col w-[200px] text-[15px] font-[500] mt-[20px]  md:flex md:flex-row md:gap-0 md:justify-between md:w-[200px] md:text-[15px] md:font-[500] md:mt-[20px]">
          <p className="md:w-[130px]">{prop.tittle}</p>
          <p >&#8377; {prop.price}</p>
        </div>
        <p className="text-[#757575] w-[200px] md:text-[#757575] md:w-[150px]">{prop.category}</p>
      </div>
    </>
  );
}
