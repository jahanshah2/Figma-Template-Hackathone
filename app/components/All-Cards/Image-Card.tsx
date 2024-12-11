import React from "react";
import Image from "next/image";

export default function ImageCard(prop: any) {
  return (
    <>
      <div>
        <div className="h-[350px] w-[350px] md:h-[300px] md:w-[300px]">
          <Image
            src={prop.image}
            alt="shoes image"
            height={1440}
            width={1440}
            className="md:h-[300px] md:w-[300px]"
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
