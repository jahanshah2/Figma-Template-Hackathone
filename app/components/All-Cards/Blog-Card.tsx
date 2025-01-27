import Image from "next/image";
import React from "react";

export default function BlogCard() {
  return (
    <div className="md:w-[300px]">
      <Image
        src={"blog-image.svg"}
        alt="blog"
        height={100}
        width={100}
        className="md:h-[220px] md:w-[300px]"
      />
      <div className="md:flex space-x-9 text-gray-400 text-[13px] font-[500] md:mt-[5px]">
        <p>08-11-2021</p>
        <p>Category</p>
      </div>
      <p className="font-[500] md:mt-[10px]">Believing neglected so so allowance existence departure.</p>
      <p className="md:tracking-[0.5px] text-gray-600 text-[13px] md:mt-[5px]">Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
    </div>
  );
}
