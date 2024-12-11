import React from "react";

export default function ShoesTypes() {
  return (
    <div className="md:max-w-[1280px] md:mx-auto">
      <div className="flex gap-5 flex-col px-[25px] mt-10 md:flex md:gap-0 md:flex-row md:justify-between md:px-[260px] md:mt-10">
        <div>
          <h3 className="text-[17px] font-[500] md:text-[15px] md:font-[500]">
            Icons
          </h3>
          <div className="text-[16px] text-[#757575] md:text-[15px] md:text-[#757575]">
            <p className="mt-2 md:mt-5">Air Force 1</p>
            <p className="mt-2 md:mt-2">Huarache</p>
            <p className="mt-2 md:mt-2">Air Max 90</p>
            <p className="mt-2 md:mt-2">Air Max 95</p>
          </div>
        </div>
        <div>
          <h3 className="text-[17px] font-[500] md:text-[15px] md:font-[500]">
            Shoes
          </h3>
          <div className="text-[15px] text-[#757575] md:text-[15px] md:text-[#757575]">
            <p className="mt-2 md:mt-5">All Shoes</p>
            <p className="mt-2 md:mt-2">Custom Shoes</p>
            <p className="mt-2 md:mt-2">Jordan Shoes</p>
            <p className="mt-2 md:mt-2">Running Shoes</p>
          </div>
        </div>
        <div>
          <h3 className="text-[17px] font-[500] md:text-[15px] md:font-[500]">
            Clothing
          </h3>
          <div className="text-[15px] text-[#757575] md:text-[15px] md:text-[#757575]">
            <p className="mt-2 md:mt-5">All Clothing</p>
            <p className="mt-2 md:mt-2">Modest Wear</p>
            <p className="mt-2 md:mt-2">Hoodies & Pullovers</p>
            <p className="mt-2 md:mt-2">Shirts & Tops</p>
          </div>
        </div>
        <div>
          <h3 className="text-[17px] font-[500] md:text-[15px] md:font-[500]">
            Kids'
          </h3>
          <div className="text-[15px] text-[#757575] md:text-[15px] md:text-[#757575]">
            <p className="mt-2 md:mt-5">Infant & Toddler Shoes</p>
            <p className="mt-2 md:mt-2">Kids' Shoes</p>
            <p className="mt-2 md:mt-2">Kids' Jordan Shoes</p>
            <p className="mt-2 md:mt-2">Kids' Basketball Shoes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
