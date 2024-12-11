import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="md:max-w-[1280px] md:mx-auto">
      <div className="bg-[#111111]">
        <div className="mt-5 mx-8 md:mt-5 md:mx-8">
          <div className="md:flex">
            <div className="flex flex-col md:flex md:flex-row md:justify-between md:w-[60%]">
              <div className="text-white text-[13px] tracking-[1px] pt-[50px] font-[400] leading-[32px] uppercase md:text-white md:text-[15px] md:pt-[50px] md:font-[400] md:leading-[32px] md:uppercase">
                <p>Find A Store</p>
                <p>Become A Member</p>
                <p>Sign Up for Email</p>
                <p>Send Us Feedback</p>
                <p>Student Discounts</p>
              </div>
              <div className="leading-[35px] pt-[40px] text-[#7E7E7E] md:leading-[35px] md:pt-[50px] md:text-[#7E7E7E]">
                <p className="leading-[24px] tracking-[0.5px] text-white md:leading-[24px] md:tracking-[0.5px] md:text-white">
                  GET HELP
                </p>
                <p>Order Status</p>
                <p>Delivery</p>
                <p>Returns</p>
                <p>Payment Options</p>
                <p>Contact Us On Nike.com Inquiries</p>
                <p>Contact Us On All Other Inquiries</p>
              </div>
              <div className="leading-[35px] pt-[40px] text-[#7E7E7E] md:leading-[35px] md:pt-[50px] md:text-[#7E7E7E]">
                <p className="leading-[24px] tracking-[0.5px] text-white md:leading-[24px] md:tracking-[0.5px] md:text-white">
                  ABOUT NIKE
                </p>
                <p>News</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Sustainability</p>
              </div>
            </div>
            <div className="w-[100%] flex justify-end gap-[20px] md:w-[40%] md:flex md:justify-end md:gap-[20px]">
              <div className="pt-[40px] md:pt-[50px]">
                <Image
                  src={"/VectorTwitter1.svg"}
                  alt="icone"
                  width={10000}
                  height={10000}
                  className="h-[45px] w-[45px] md:h-[40px] md:w-[30px]"
                />
              </div>
              <div className="pt-[40px] md:pt-[50px]">
                <Image
                  src={"/VectorFacebook2.svg"}
                  alt="icone"
                  width={10000}
                  height={10000}
                  className="h-[45px] w-[45px] md:h-[40px] md:w-[30px]"
                />
              </div>
              <div className="pt-[40px] md:pt-[50px]">
                <Image
                  src={"/VectorYoutube3.svg"}
                  alt="icone"
                  width={10000}
                  height={10000}
                  className="h-[45px] w-[45px] md:h-[40px] md:w-[30px]"
                />
              </div>
              <div className="pt-[40px] md:pt-[50px]">
                <Image
                  src={"/VectorInstagram4.svg"}
                  alt="icone"
                  width={10000}
                  height={10000}
                  className="h-[45px] w-[45px] md:h-[40px] md:w-[30px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pb-[15px] w-[100%] md:flex md:flex-row md:justify-between md:mt-[60px] md:pb-[15px] md:w-[100%]">
            <div className="flex mt-[20px] gap-[30px] md:flex md:mt-0 md:gap-[30px]">
              <div className="text-white flex items-center md:text-white md:flex md:items-center gap-2">
                <FaLocationDot className="size-[30px] md:size-[25px]" />
                <p>pakistan</p>
              </div>
              <div className="flex items-center text-[#7E7E7E] text-[14px] md:flex md:items-center md:text-[#7E7E7E] md:text-[14px]">
                <p>&#169;2023 Nike, Inc. All Rights Reserved</p>
              </div>
            </div>
            <div className="flex flex-col mt-[20px] gap-[15px] justify-center text-[14px] text-[#7E7E7E] md:flex md:flex-row md:mt-0 md:items-center md:gap-[15px] md:text-[14px] md:text-[#7E7E7E]">
              <p>Guides</p>
              <p>Terms of Sale</p>
              <p>Terms of Use</p>
              <p>Nike Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
