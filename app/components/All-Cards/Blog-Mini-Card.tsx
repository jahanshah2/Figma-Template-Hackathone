import Image from "next/image";
import React from "react";

export default function BlogMiniCard() {
  return (
    <div className="md:flex md:space-x-2">
      <Image
        src={"blog-image2.svg"}
        alt="blog"
        height={100}
        width={100}
        className="md:h-[78px] md:w-[100px]"
      />
      <div>
        <div className="md:flex space-x-6 text-gray-400 text-[13px] font-[400] md:mt-[5px]">
          <p>08-11-2021</p>
          <p>Category</p>
        </div>
        <p className="font-[500] md:mt-[5px] text-[13px] md:w-[200px]">
          Believing neglected so so allowance existence departure.
        </p>
      </div>
    </div>
  );
}
