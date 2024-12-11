import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="md:max-w-[1280px] md:mx-auto">
      <div>
        <div className="bg-gray-100 py-3 px-[10px] text-center md:bg-gray-100 border-b md:py-3 md:text-center">
          <h1 className="text-[15] font-[500] md:text-[15]">Hello Nike App</h1>
          <p className="text-[14px] md:text-[11px]">
            Download the app to access everything Nike.
            <Link href={"#"} className="underline font-[500]">
              {" "}
              Get Your Great
            </Link>
          </p>
        </div>
      </div>
      <div className="md:px-14">
        <Image
          src={"ImageHero.svg"}
          alt="hero image"
          height={1000}
          width={1000}
          className="md:w-[100%] "
        />
        <div className="mx-[10px] text-center mt-[50px] md:mx-0 md:mt-[70px]">
          <p className="font-[400] text-[18px] text-gray-600 tracking-[1px] md:tracking-normal md:text-black md:font-[500] md:text-[15px]">
            First Look
          </p>
          <h2 className="font-[400] text-[50px] uppercase my-4 leading-none md:my-0 md:leading-normal md:font-[500] md:text-[56px] md:uppercase">
            Nike Air Max Pulse
          </h2>
          <p className="font-[500] text-[15px] mb-[30px] md:font-[400] md:text-[15px] md:mb-[30px]">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse <br />
            —designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex justify-center text-white md:flex gap-4 md:justify-center md:text-white">
            <button className="bg-black py-[7.5px] px-[22.5px] rounded-[25px] font-[400] text-[15px] md:bg-black md:py-[7.5px] md:px-[22.5px] md:rounded-[25px] md:font-[500] md:text-[15px]">
              Notify Me
            </button>
            <button className="bg-black py-[7.5px] px-[22.5px] rounded-[25px] font-[400] text-[15px] md:bg-black md:py-[7.5px] md:px-[22.5px] md:rounded-[25px] md:font-[500] md:text-[15px]">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
