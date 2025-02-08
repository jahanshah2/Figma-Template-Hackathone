import React, { Suspense } from "react";
import GearSlider from "../Gear-Up-Item-Slider/Gear-Slider";
import GearSliderMobile from "../Gear-Up-Item-Slider/Gear-Slider-Mobile";

export default function GearUp() {
  return (
    <div className="md:max-w-[1280px] md:mx-auto">
      <div className="px-5 mt-10 md:px-14 md:mt-10">
        <div>
          <h2 className="text-[22px] font-[500] mt-[90px] mb-[10px]  md:text-[22px] md:font-[500] md:mt-[90px] md:mb-[30px]">
            Gear Up
          </h2>
        </div>
        <div className="md:hidden">
          <Suspense>
            <GearSliderMobile />
          </Suspense>
          <div className="mt-[80px]">
            <Suspense>
              <GearSliderMobile />
            </Suspense>
          </div>
        </div>
        <div className="hidden md:block">
          <Suspense>
            <GearSlider />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
