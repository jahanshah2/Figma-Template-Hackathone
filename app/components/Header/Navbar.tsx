"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const navLinkListBottom = [
    {
      title: "New & Featured",
      link: "/all-products",
    },
    {
      title: "Man",
      link: "/",
    },
    {
      title: "Woman",
      link: "/",
    },
    {
      title: "Kids",
      link: "/",
    },
    {
      title: "Sale",
      link: "/",
    },
    {
      title: "SNKRS",
      link: "/",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ];

  const navLinkListTop = [
    {
      title: "Find a Store",
      link: "/",
    },
    {
      title: "Help",
      link: "/contact-us",
    },
    {
      title: "Join Us",
      link: "/join-us",
    },
    {
      title: "Sign In",
      link: "/sign-up",
    },
  ];

  return (
    <>
      <div className="md:max-w-[1280px] md:mx-auto">
        <div className="hidden sm:block md:bg-gray-100 md:py-5 md:px-14 md:h-9 md:flex md:justify-between md:items-center">
          <div>
            <Link href={"/"}>
              <Image
                src={"/Vector.svg"}
                alt="logo"
                height={10000}
                width={1000}
                className="md:h-[30px] md:w-[30px]"
              />
            </Link>
          </div>
          <div>
            <ul className="md:flex md:space-x-3">
              {navLinkListTop.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="md:flex md:items-center md:text-[13px] md:font-[500] md:pr-[8px] md:border-r-[1.5px] md:last:border-r-0 md:border-black"
                >
                  <li>
                    <p
                      className={`md:transition md:duration-300 md:ease-in-out md:hover:scale-110 ${pathName === item?.link && "scale-110"}`}
                    >
                      {item.title}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-3 p-5 flex justify-between items-center  md:mx-8 md:p-5 md:flex md:justify-between md:items-center">
          <div>
            <Link href={"/"}>
              <Image
                src={"/Vector2.svg"}
                alt="logo"
                height={10000}
                width={1000}
                className="h-[30px] w-[65px] md:h-[30px] md:w-[65px]"
              />
            </Link>
          </div>
          <div className="hidden sm:block">
            <ul className="md:flex md:space-x-7">
              {navLinkListBottom.map((item, index) => (
                <Link key={index} href={item.link}>
                  <li
                    className={`nav md:flex md:items-center md:text-[15px] md:font-[500]`}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex items-center md:flex md:items-center gap-6">
            <div className="hidden sm:block md:relative">
              <input
                type="search"
                placeholder="Search"
                className=" md:focus-visible:outline-none md:bg-gray-100 md:p-[10px] md:pl-[50px] md:rounded-[25px]"
              />
              <Image
                src={"/VectorSearch.svg"}
                alt="logo"
                height={10000}
                width={1000}
                className="md:absolute md:top-3 md:h-[21px] md:w-[59px]"
              />
            </div>
            <Image
              src={"/VectorHeart.svg"}
              alt="logo"
              height={10000}
              width={1000}
              className="h-[25.5px] w-[25.5px]  md:h-[25.5px] md:w-[25.5px]"
            />
            <Link href={"/cart"}>
              <Image
                src={"/VectorCart.svg"}
                alt="logo"
                height={10000}
                width={1000}
                className="h-[25px] w-[25px]  md:h-[24px] md:w-[24px]"
              />
            </Link>
            <div className="sm:hidden flex items-center justify-center">
              <Sheet>
                <SheetTrigger>
                  <HiOutlineMenuAlt3 className="size-[26px]" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="flex justify-center w-[100%]">
                      <Image
                        src={"/Vector2.svg"}
                        alt="logo"
                        height={10000}
                        width={1000}
                        className="h-[30px] w-[65px] md:h-[30px] md:w-[65px]"
                      />
                    </SheetTitle>
                    <SheetDescription>
                      <div className="relative w-full mt-[10px]">
                        <input
                          type="search"
                          placeholder="Search"
                          className="w-full focus-visible:outline-none bg-gray-200 p-[10px] pl-[50px] rounded-[25px]"
                        />
                        <Image
                          src={"/VectorSearch.svg"}
                          alt="logo"
                          height={10000}
                          width={1000}
                          className="absolute top-[11px] left-[15px] h-[20px] w-[20px]"
                        />
                      </div>
                      <div className="mt-[20px] pb-[20px] border-b-[2px] ">
                        <ul className="text-start text-[17px] text-black flex flex-col space-y-7">
                          {navLinkListBottom.map((item, index) => (
                            <Link key={index} href={item.link}>
                              <li>{item.title}</li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-[20px]">
                        <ul className="text-start text-[17px] text-black flex flex-col space-y-7">
                          {navLinkListTop.map((item, index) => (
                            <Link key={index} href={item.link}>
                              <li>{item.title}</li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
