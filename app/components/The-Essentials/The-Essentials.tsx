import React from "react";
import EssentialsCard from "../All-Cards/Essentials-Card";

export default function TheEssentials() {
  return (
    <div className="md:max-w-[1280px] mx-auto">
      <div className="px-5 mt-10 md:px-14 md:mt-10">
        <h2 className="text-[22px] font-[500] mt-[90px] mb-[30px]  md:text-[22px] md:font-[500] md:mt-[90px] md:mb-[30px]">
          The Essentials
        </h2>
        <div className="flex flex-col gap-[20px] md:flex md:flex-row md:justify-between">
          <EssentialsCard image="ImageEssentials1.svg" buttonName="Men's" />
          <EssentialsCard image="ImageEssentials2.svg" buttonName="Women's" />
          <EssentialsCard image="ImageEssentials3.svg" buttonName="Kids'" />
        </div>
      </div>
    </div>
  );
}
