import Image from "next/image";
import React from "react";

export default function JoinUs() {
  return (
    <div className="md:text-center md:text-[#8D8D8D] md:max-w-[1280px] mx-auto">
      <div className="md:px-[450px]">
        <div className="md:px-[50px] md:flex md:flex-col md:items-center">
          <Image
            src={"/Vector2.svg"}
            alt="logo"
            height={10000}
            width={1000}
            className="md:h-[30px] md:w-[65px] md:mt-[40px]"
          />
          <h1 className="md:mt-[30px] md:text-[#111111] md:font-[700] md:text-[18px]">
            BECOME A NIKE MEMBER
          </h1>
          <p className="md:mt-[20px] md:font-[400] md:text-[14px]">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            className="md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
          />
          <input
            type="text"
            placeholder="First Name"
            className="md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
          />
        </div>
        <p className="md:mt-[20px] md:text-[12px]">
          Get a Nike Member Reward every year on your Birthday.
        </p>
        <select className="md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none">
          <option value="Pakistan" disabled selected>
            Select Country
          </option>
          <option value="India">India</option>
          <option value="Oman">Oman</option>
          <option value="Soudi">Soudi</option>
        </select>
        <div className="md:flex md:gap-[10%]">
          <button className="md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:w-[45%] focus-visible:outline-none">
            Male
          </button>
          <button className="md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:w-[45%] focus-visible:outline-none">
            Female
          </button>
        </div>
        <div className="md:mt-[20px] md:flex md:justify-between md:items-center">
          <input
            type="checkbox"
            className="md:border-[#E5E5E5] border-[1px] md:rounded-[3px] md:h-[20px] md:w-[20px]"
          />
          <p className="md:w-[90%] md:text-left md:text-[12px]">
            Sign up for emails to get updates from Nike on products, offers and
            your Member benefits
          </p>
        </div>
        <p className="md:mt-[20px] md:text-[14px] md:w-[90%]">
          By creating an account, you agree to Nike's{" "}
          <b className="md:underline">Privacy Policy</b> and{" "}
          <b className="md:underline">Terms of Use.</b>
        </p>
        <button className="md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:w-[100%] bg-black text-white ">
          JOIN US
        </button>
        <p className="md:mt-[20px] md:text-[14px] md:w-[90%]">
        Already a Member? <a href=""><b className="underline">Sign In.</b></a>
        </p>
      </div>
    </div>
  );
}
