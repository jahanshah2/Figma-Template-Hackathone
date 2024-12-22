import Image from "next/image";
import React from "react";

export default function AllProductCard(prop: any) {
  return (
    <>
      <div>
        <div className="md:h-[280px] md:w-[280px]">
          <Image
            src={prop.image}
            alt="shoes image"
            width={1000}
            height={1000}
            className="md:h-[280px] md:w-[280px] md:transition md:duration-300 md:ease-in-out md:hover:scale-105 md:hover:shadow-lg md:dark:hover:shadow-black/30"
          />
        </div>
        <div className="text-[20px] md:text-[15px]">
          <p className="text-[#9E3500] font-[500] my-[10px] md:font-[500] md:my-[10px]">
            {prop.just}
          </p>
          <p className="font-[500] md:font-[500]">{prop.tittle}</p>
          <div className="text-[#757575] font-[400] mt-[5px] md:font-[400] md:mt-[5px]">
            <p>{prop.category}</p>
            <p>{prop.availableColors}</p>
          </div>
          <p className="font-[500] mt-[10px] md:font-[500] md:mt-[10px]">
            MRP : ₹ {prop.price}
          </p>
        </div>
      </div>
    </>
  );
}
