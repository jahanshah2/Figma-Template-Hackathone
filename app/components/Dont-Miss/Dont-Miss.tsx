import Image from "next/image";
import React from "react";

export default function DontMiss() {
  return (
    <div className="md:max-w-[1280px] mx-auto">
      <div className="px-5 mt-10 md:px-14 md:mt-10">
        <h2 className="text-[22px] font-[500] mt-[90px] mb-[30px]  md:text-[22px] md:font-[500] md:mt-[90px] md:mb-[30px]">
          Don't Miss
        </h2>
        <Image
          src={"ImageDontMiss.svg"}
          alt="hero image"
          height={1000}
          width={1000}
          className="md:w-[100%] "
        />
        <div className="text-center mt-[70px] md:mt-[70px]">
          <h2 className="font-[500] text-[40px]  md:font-[500] md:text-[56px]">FLIGHT ESSENTIALS</h2>
          <p className="font-[400] text-[15px] mb-[30px]  md:font-[400] md:text-[15px] md:mb-[30px]">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <div className="flex justify-center text-white  md:flex md:justify-center md:text-white">
            <button className="bg-black py-[7.5px] px-[22.5px] rounded-[25px] font-[500] text-[15px]  md:bg-black md:py-[7.5px] md:px-[22.5px] md:rounded-[25px] md:font-[500] md:text-[15px]">
              Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
