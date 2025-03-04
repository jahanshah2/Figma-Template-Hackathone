import { auth, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignIn() {
  const session = await auth();

  if(session?.user){
    redirect("/")
  }

  return (
    <div className="text-center text-[#8D8D8D] md:text-center md:text-[#8D8D8D] md:max-w-[1280px] mx-auto">
      <div className="md:px-[450px]">
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <div className="px-[100px] flex flex-col items-center md:px-[100px] md:flex md:flex-col md:items-center">
            <Image
              src={"/Vector2.svg"}
              alt="logo"
              height={10000}
              width={1000}
              className="h-[30px] w-[65px] mt-[40px] md:h-[30px] md:w-[65px] md:mt-[40px]"
            />
            <h1 className="mt-[30px] text-[#111111] font-[700] text-[18px] md:mt-[30px] md:text-[#111111] md:font-[700] md:text-[18px]">
              SIGN IN TO YOUR NIKE ACCOUNT
            </h1>
          </div>

          {/* <div>
            <input
              type="email"
              placeholder="Email address"
              className="border-[#E5E5E5] mt-[20px] h-[40px] rounded-[3px] pl-[30px] w-[80%]  md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-[#E5E5E5] mt-[20px] h-[40px] rounded-[3px] pl-[30px] w-[80%]  md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] focus-visible:outline-none"
            />
          </div> */}
          {/* <div className="mx-[50px] mt-[30px] flex justify-between md:mt-[30px] md:mx-[0px] md:flex md:justify-between">
            <div className="flex justify-between items-center  md:flex md:justify-between md:items-center gap-2">
              <input
                type="checkbox"
                className="border-[#E5E5E5]  rounded-[3px] h-[18px] w-[18px] md:border-[#E5E5E5] border-[1px] md:rounded-[3px] md:h-[18px] md:w-[18px]"
              />
              <p className="w-[90%] text-[14px] md:w-[90%] md:text-[14px]">
                Keep me signed in
              </p>
            </div>
            <div>
              <p className="text-[#BCBCBC] text-[13px] md:text-[13px] cursor-pointer md:hover:text-gray-500 md:transition-all md:duration-300">
                Forgotten your password?
              </p>
            </div>
          </div> */}
          <div className="flex flex-col items-center">
            {/* <p className="mt-[30px] text-[14px] w-[70%] md:mt-[30px] md:text-[14px] md:w-[90%]">
              By signing in, you agree to Nike's{" "}
              <b className="cursor-pointer underline">Privacy Policy</b> and{" "}
              <b className="cursor-pointer underline">Terms of Use.</b>
            </p>
            <button
              disabled={true}
              className="border-[#E5E5E5] mt-[40px] h-[40px] rounded-[3px] w-[90%] md:border-[#E5E5E5] border-[1px] md:mt-[40px] md:h-[40px] md:rounded-[3px] md:w-[100%] bg-black text-white md:before:ease md:relative  md:overflow-hidden md:transition-all md:before:absolute md:before:right-0 md:before:top-0 md:before:h-12 md:before:w-6 md:before:translate-x-12 md:before:rotate-6 md:before:bg-white md:before:opacity-30 md:before:duration-1000 md:hover:before:-translate-x-96"
            >
              SIGN IN
            </button> */}

            {/* "OR" Divider */}
            <div className="flex items-center w-[90%] my-[20px] md:w-[100%]">
              <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
              <span className="mx-[10px] text-[#8D8D8D]">OR</span>
              <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
            </div>

            {/* Sign In with Google Button */}
            <button className="flex items-center justify-center gap-2 border-[#E5E5E5] mt-[10px] h-[40px] rounded-[3px] w-[90%] md:border-[#E5E5E5] border-[1px] md:mt-[10px] md:h-[40px] md:rounded-[3px] md:w-[100%] bg-white text-black hover:bg-gray-50 transition-all duration-300">
              <Image
                src={"/G-logo.png"} // Google logo file path
                alt="Google Logo"
                width={120}
                height={120}
                className="w-7 h-7"
              />
              <span>Sign in with Google</span>
            </button>

            <p className="mt-[40px] mb-[60px] text-center text-[14px] w-[100%] md:mt-[40px] md:mb-[60px] md:text-[14px] md:w-[100%]">
              Not a Member?{" "}
              <Link href="/signup">
                <b className="underline text-black font-[500]">Join Us.</b>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
