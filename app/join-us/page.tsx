import Image from "next/image";
import React from "react";

export default function JoinUs() {
  return (
    <div className="text-center text-[#8D8D8D] md:text-center md:text-[#8D8D8D] md:max-w-[1280px] mx-auto">
      <div className="px-[10px] md:px-[450px]">
        <div className="px-[50px] flex flex-col items-center md:px-[50px] md:flex md:flex-col md:items-center">
          <Image
            src={"/Vector2.svg"}
            alt="logo"
            height={10000}
            width={1000}
            className="h-[60px] w-[70px] mt-[20px] md:h-[30px] md:w-[65px] md:mt-[40px]"
          />
          <h1 className="mt-[5px] text-[#111111] font-[700] text-[18px] md:mt-[30px] md:text-[#111111] md:font-[700] md:text-[18px]">
            BECOME A NIKE MEMBER
          </h1>
          <p className="mt-[20px] font-[400] text-[14px] md:mt-[20px] md:font-[400] md:text-[14px]">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            className="border-[#E5E5E5] mt-[20px] h-[40px] rounded-[3px] pl-[30px] w-[100%]  md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-[#E5E5E5]  mt-[20px] h-[40px] rounded-[3px] pl-[30px] w-[100%]  md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
          />
          <input
            type="text"
            placeholder="First Name"
            className="border-[#E5E5E5]  mt-[20px] h-[40px] rounded-[3px] pl-[30px] w-[100%] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border-[#E5E5E5]  mt-[20px] h-[40px] rounded-[3px] pl-[30px] w-[100%] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="border-[#E5E5E5] mt-[20px] h-[40px] rounded-[3px] pl-[30px] w-[100%] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
          />
        </div>
        <p className="mt-[20px] text-[15px] md:mt-[20px] md:text-[12px]">
          Get a Nike Member Reward every year on your Birthday.
        </p>
        <select className="border-[#E5E5E5]  mt-[20px] h-[40px] rounded-[3px] pl-[30px] w-[100%]  md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none">
          <option value="Pakistan" disabled selected>
            Select Country
          </option>
          <option value="India">India</option>
          <option value="Oman">Oman</option>
          <option value="Soudi">Soudi</option>
        </select>
        <div className="flex gap-[10%] md:flex md:gap-[10%]">
          <button className="border-[#E5E5E5]  mt-[20px] h-[40px] rounded-[3px] w-[45%]  md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:w-[45%] focus-visible:outline-none">
            Male
          </button>
          <button className="border-[#E5E5E5] mt-[20px] h-[40px] rounded-[3px] w-[45%]  md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:w-[45%] focus-visible:outline-none">
            Female
          </button>
        </div>
        <div className="mt-[20px] flex justify-center gap-2 items-center md:mt-[20px] md:gap-0 md:flex md:justify-between md:items-center">
          <input
            type="checkbox"
            className="border-[#E5E5E5]  rounded-[3px] h-[20px] w-[20px] md:border-[#E5E5E5] border-[1px] md:rounded-[3px] md:h-[20px] md:w-[20px]"
          />
          <p className="w-[90%] text-left text-[12px] md:w-[90%] md:text-left md:text-[12px]">
            Sign up for emails to get updates from Nike on products, offers and
            your Member benefits
          </p>
        </div>
        <p className="mt-[20px] text-[14px] w-[90%] md:mt-[20px] md:text-[14px] md:w-[90%]">
          By creating an account, you agree to Nike's{" "}
          <b className="underline">Privacy Policy</b> and{" "}
          <b className="underline">Terms of Use.</b>
        </p>
        <button className="border-[#E5E5E5] mt-[20px] h-[40px] rounded-[3px] w-[90%] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:w-[100%] bg-black text-white ">
          JOIN US
        </button>
        <p className="mt-[20px] text-[14px] w-[90%] md:mt-[20px] md:text-[14px] md:w-[90%]">
          Already a Member?{" "}
          <a href="">
            <b className="underline text-black font-[500]">Sign In.</b>
          </a>
        </p>
      </div>
    </div>
  );
}
