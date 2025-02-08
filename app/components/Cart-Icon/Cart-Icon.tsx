"use client"
import { StoreState } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function CartIcon() {
  const { cart } = useSelector((state: StoreState) => state?.nike);
  return (
    <>
      <div className="relative">
        <Link href={"/cart"}>
          <Image
            src={"/VectorCart.svg"}
            alt="logo"
            height={10000}
            width={1000}
            className="h-[25px] w-[25px]  md:h-[24px] md:w-[24px]"
          />
        </Link>
        <p className="flex items-center justify-center absolute top-[-8px] right-[-8px] text-xs text-white h-[15px] w-[15px] rounded-full bg-red-500">
          {cart ? cart?.length : 0}
        </p>
      </div>
    </>
  );
}

export default CartIcon;
