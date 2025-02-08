import React, { Suspense } from "react";
import ItemSlider from "../Item-Slider/Item-Slider";
import ItemSliderMobile from "../Item-Slider/Item-Slider-Mobile";

export default function BestAirMax() {
  return (
    <div className="md:max-w-[1280px] md:mx-auto">
      <div className="px-[8px] md:px-14">
        <h2 className="text-[22px] font-[500] mt-[50px] mb-[10px] md:text-[22px] md:font-[500] md:mt-[50px] md:mb-[10px]">
          Best of Air Max
        </h2>
        <div className="block sm:hidden">
          <Suspense>
            <ItemSliderMobile />
          </Suspense>
        </div>
        <div className="hidden sm:block">
          <Suspense>
            <ItemSlider />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
