import Image from "next/image";
import React from "react";

export default function Cart() {
  return (
    <div className="md:max-w-[1280px] mx-auto">
      <div className="px-3 mt-10 md:px-32 md:mt-10">
        <div className="md:flex">
          <div className="md:w-[60%]">
            <div className="p-[10px] px-[10px] md:p-[10px] md:px-[10px] bg-[#F7F7F7]">
              <p className="text-[17px] font-[500] md:text-[13px] md:font-[500]">
                Free Delivery
              </p>
              <div className="flex justify-between md:flex md:gap-x-5">
                <p className="text-[16px] font-[400] md:text-[11px] md:font-[400]">
                  Applies to orders of ₹ 14 000.00 or more.
                </p>
                <p className="text-[16px] font-[500] md:text-[11px] md:font-[500] underline">
                  View details
                </p>
              </div>
            </div>
            <h2 className="text-[32px] font-[500] my-5 md:text-[22px] md:font-[500] md:my-3">
              Bag
            </h2>
            <div className="py-[30px]  md:flex md:gap-x-5 md:py-[30px] border-b-[2px]">
              <div>
                <Image
                  src={"/Frame-Cart-Product-1.svg"}
                  alt="product image"
                  height={140}
                  width={140}
                  className="h-[140px] w-[140px] md:h-[150px] md:pb-[20px] md:w-[150px]"
                />
              </div>
              <div className="md:w-[100%]">
                <div className="mt-2 flex justify-between md:flex md:justify-between md:mt-2">
                  <p className="text-[15px] font-[500] md:text-[15px] md:font-[500]">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </p>
                  <p className="font-[400] text-[15px] md:font-[400] md:text-[15px]">
                    MRP: ₹ 3 895.00
                  </p>
                </div>
                <div className="mt-3 font-[400] text-[16px] text-[#757575] w-fit md:font-[400] md:text-[14px] md:mt-0 md:text-[#757575] md:w-fit">
                  <p className="mt-1 md:mt-1">Men's Short-Sleeve Running Top</p>
                  <p className="mt-1 md:mt-1">Ashen Slate/Cobalt Bliss</p>
                  <div className="mt-3 flex justify-between md:mt-2 md:flex md:justify-between">
                    <div className="flex gap-2 md:flex md:gap-2">
                      <p>Size</p>
                      <p>L</p>
                    </div>
                    <div className="flex gap-2 md:flex md:gap-2">
                      <p>Quantity</p>
                      <p>1</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4 md:flex md:gap-3 md:mt-4">
                    <Image
                      src={"/VectorHeart.svg"}
                      alt="product image"
                      height={15}
                      width={15}
                      className="h-[25px] w-[25px] md:h-[15px] md:w-[15px]"
                    />
                    <Image
                      src={"/Frame.Delete-Icon.svg"}
                      alt="product image"
                      height={15}
                      width={15}
                      className="h-[25px] w-[25px] md:h-[15px] md:w-[15px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[30px]  md:flex md:gap-x-5 md:py-[30px] border-b-[2px]">
              <div>
                <Image
                  src={"/Frame-Cart-Product-1.svg"}
                  alt="product image"
                  height={140}
                  width={140}
                  className="h-[140px] w-[140px] md:h-[150px] md:pb-[20px] md:w-[150px]"
                />
              </div>
              <div className="md:w-[100%]">
                <div className="mt-2 flex justify-between md:flex md:justify-between md:mt-2">
                  <p className="text-[15px] font-[500] md:text-[15px] md:font-[500]">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </p>
                  <p className="font-[400] text-[15px] md:font-[400] md:text-[15px]">
                    MRP: ₹ 3 895.00
                  </p>
                </div>
                <div className="mt-3 font-[400] text-[16px] text-[#757575] w-fit md:font-[400] md:text-[14px] md:mt-0 md:text-[#757575] md:w-fit">
                  <p className="mt-1 md:mt-1">Men's Short-Sleeve Running Top</p>
                  <p className="mt-1 md:mt-1">Ashen Slate/Cobalt Bliss</p>
                  <div className="mt-3 flex justify-between md:mt-2 md:flex md:justify-between">
                    <div className="flex gap-2 md:flex md:gap-2">
                      <p>Size</p>
                      <p>L</p>
                    </div>
                    <div className="flex gap-2 md:flex md:gap-2">
                      <p>Quantity</p>
                      <p>1</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4 md:flex md:gap-3 md:mt-4">
                    <Image
                      src={"/VectorHeart.svg"}
                      alt="product image"
                      height={15}
                      width={15}
                      className="h-[25px] w-[25px] md:h-[15px] md:w-[15px]"
                    />
                    <Image
                      src={"/Frame.Delete-Icon.svg"}
                      alt="product image"
                      height={15}
                      width={15}
                      className="h-[25px] w-[25px] md:h-[15px] md:w-[15px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] md:pl-5">
            <div>
              <p className="mt-3 text-[21px] font-[500] md:text-[21px] md:mt-0 md:font-[500]">
                Summary
              </p>
              <div className="flex justify-between mt-8 md:flex md:justify-between md:mt-8">
                <p className="text-[16px] font-[400] md:text-[15px] md:font-[400]">
                  Subtotal
                </p>
                <p className="text-[17px] font-[500] md:text-[14px] md:font-[400]">
                  ₹ 20 890.00
                </p>
              </div>
              <div className="flex justify-between md:flex md:justify-between mt-2">
                <p className="text-[16px] font-[400] md:text-[15px] md:font-[400]">
                  Estimated Delivery & Handling
                </p>
                <p className="text-[17px] font-[400] md:text-[15px] md:font-[400]">
                  Free
                </p>
              </div>
              <div className="flex justify-between mt-8 md:flex md:justify-between md:mt-8">
                <p className="text-[16px] font-[400] md:text-[14px] md:font-[400]">
                  Total
                </p>
                <p className="text-[17px] font-[500] md:text-[15px] md:font-[500]">
                  ₹ 20 890.00
                </p>
              </div>
              <button className="border-[#E5E5E5] mt-[40px] h-[40px] rounded-[20px] w-[100%] md:border-[#E5E5E5] md:mt-[40px] md:h-[40px] md:rounded-[20px] md:w-[100%] bg-black text-white">
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
