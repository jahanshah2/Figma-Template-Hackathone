import Image from "next/image";
import React from "react";

export default function Featured() {
  return (
    <div className="md:max-w-[1280px] mx-auto">
      <div className="px-5 mt-10 md:px-14 md:mt-10">
        <h2 className="text-[22px] font-[500] mt-[90px] mb-[30px] md:text-[22px] md:font-[500] md:mt-[90px] md:mb-[30px]">
          Featured
        </h2>
        <Image
          src={"ImageFeatured.svg"}
          alt="hero image"
          height={1000}
          width={1000}
          className="md:w-[100%] "
        />
        <div className="text-center mt-[70px] md:mt-[70px]">
          <h2 className="font-[500] text-[40px] leading-[60px] md:font-[500] md:leading-normal md:text-[56px]">
            STEP INTO WHAT FEELS GOOD
          </h2>
          <p className="font-[400] text-[15px] mb-[30px] md:font-[400] md:text-[15px] md:mb-[30px]">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <div className="flex justify-center text-white  md:flex md:justify-center">
            <button className="bg-black py-[7.5px] px-[22.5px] rounded-[25px] font-[500] text-[15px] md:py-[7.5px] md:px-[30px] md:font-[500] md:text-[15px] md:relative md:flex md:items-center md:justify-center md:overflow-hidden text-white md:shadow-2xl md:transition-all md:before:absolute md:before:h-0 md:before:w-0 md:before:rounded-full md:before:bg-gray-700 md:before:duration-500 md:before:ease-out md:hover:shadow-gray-800 md:hover:before:h-56 md:hover:before:w-56">
              <span className="relative z-10">Find Your Shoe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
