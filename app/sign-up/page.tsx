import Image from "next/image";
import React from "react";

export default function SignUp() {
  return (
    <div className="md:text-center md:text-[#8D8D8D] md:max-w-[1280px] mx-auto">
      <div className="md:px-[450px]">
        <div className="md:px-[100px] md:flex md:flex-col md:items-center">
          <Image
            src={"/Vector2.svg"}
            alt="logo"
            height={10000}
            width={1000}
            className="md:h-[30px] md:w-[65px] md:mt-[40px]"
          />
          <h1 className="md:mt-[30px] md:text-[#111111] md:font-[700] md:text-[18px]">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </h1>
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
        </div>
        <div className="md:mt-[30px] md:flex md:justify-between">
          <div className="md:flex md:justify-between md:items-center gap-2">
            <input
              type="checkbox"
              className="md:border-[#E5E5E5] border-[1px] md:rounded-[3px] md:h-[18px] md:w-[18px]"
            />
            <p className="md:w-[90%] md:text-[14px]">Keep me signed in</p>
          </div>
          <div>
            <p className="text-[#BCBCBC] md:text-[13px] cursor-pointer">
              Forgotten your password?
            </p>
          </div>
        </div>
        <p className="md:mt-[30px] md:text-[14px] md:w-[90%]">
          By logging in, you agree to Nike's{" "}
          <b className="cursor-pointer md:underline">Privacy Policy</b> and{" "}
          <b className="cursor-pointer md:underline">Terms of Use.</b>
        </p>
        <button className="md:border-[#E5E5E5] border-[1px] md:mt-[40px] md:h-[40px] md:rounded-[3px] md:w-[100%] bg-black text-white ">
          SIGN IN
        </button>
        <p className="md:mt-[40px] md:mb-[60px] md:text-[14px] md:w-[90%]">
          Not a Member?{" "}
          <a href="">
            <b className="underline">Sign In.</b>
          </a>
        </p>
      </div>
    </div>
  );
}
