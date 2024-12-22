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
      <div className="hidden md:block absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
      <div className="absolute flex justify-center text-black md:absolute left-10 bottom-14 md:flex md:justify-center md:text-black">
        <button className="bg-white py-[7.5px] px-[22.5px] rounded-[25px] font-[500] text-[15px] md:bg-white md:py-[7.5px] md:px-[22.5px] md:rounded-[25px] md:relative md:overflow-hidden md:text-black md:transition-all md:before:absolute md:before:left-0 md:before:right-0 md:before:top-0 md:before:h-0 md:before:w-full md:before:bg-black md:before:duration-500 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:right-0 md:after:h-0 md:after:w-full md:after:bg-black md:after:duration-500 md:hover:text-white md:hover:before:h-2/4 md:hover:after:h-2/4 md:font-[500] md:text-[15px]">
          <p className="relative z-10">{prop.buttonName}</p>
        </button>
      </div>
    </div>
  );
}
