import React from "react";
import Image from "next/image";
import { IImageCardProps } from "@/lib/types";

export default function ImageCard(prop: IImageCardProps) {
  return (
    <>
      <div>
        <div className="h-[300px] w-[300px] md:h-[300px] md:w-[300px] md:overflow-hidden md:bg-cover md:bg-no-repeat">
          <Image
            src={prop.image}
            alt="shoes image"
            height={1440}
            width={1440}
            className="h-[300px] w-[300px] md:h-[300px] md:w-[300px] md:transition md:duration-300 md:ease-in-out md:hover:scale-110"
          />
        </div>
        <div className="flex justify-between w-[300px] text-[15px] font-[500] mt-[20px] md:flex md:justify-between md:w-[300px] md:text-[15px] md:font-[500] md:mt-[20px]">
          <p >{prop.tittle}</p>
          <p >&#8377; {prop.price}</p>
        </div>
        <p className="text-[#757575] md:text-[#757575]">{prop.category}</p>
      </div>
    </>
  );
}
