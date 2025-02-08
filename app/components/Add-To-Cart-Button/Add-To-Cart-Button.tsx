"use client";
import { addToCart } from "@/app/redux/nikeSlice";
import { Iproducts } from "@/lib/types";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";

interface Props {
  item: Iproducts | null;
  className?: string;
}

const AddToCart = ({ item, className }: Props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () =>{
    dispatch(addToCart(item));
    toast.success(`${item?.productName.substring(0,12)} added successfully`)
  }

  return (
    <button
      onClick={()=>handleAddToCart()}
      className={twMerge(
        "mt-6 flex bg-black py-[7.5px] px-[22.5px] rounded-[25px] font-[500] text-[15px] md:mt-6 md:py-[7.5px] md:px-[30px] md:font-[500] md:text-[15px] text-white md:flex space-x-2 hover:bg-[#333333]",
        className
      )}
    >
      <Image
        src={"/Add-to-Cart-Icon.svg"}
        alt="Add to cart"
        height={20}
        width={20}
      />
      <span className="relative z-10">Add To Cart</span>
    </button>
  );
};

export default AddToCart;
