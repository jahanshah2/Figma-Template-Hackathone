import Image from "next/image";
import React from "react";

export default function EssentialsCard(prop: any) {
  return (
    <div className="relative md:relative md:h-[500px] md:w-[380px]">
      <Image
        src={prop.image}
        alt="image"
        width={1000}
        height={1000}
        className="md:h-[500px] md:w-[380px]"
      />
      <div className="absolute flex justify-center text-black md:absolute left-10 bottom-14 md:flex md:justify-center md:text-black">
        <button className="bg-white py-[7.5px] px-[22.5px] rounded-[25px] font-[500] text-[15px] md:bg-white md:py-[7.5px] md:px-[22.5px] md:rounded-[25px] md:font-[500] md:text-[15px]">
          {prop.buttonName}
        </button>
      </div>
    </div>
  );
}
