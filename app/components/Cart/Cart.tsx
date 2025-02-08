"use client";

import Link from "next/link";

import AddToCartImageCard from "@/app/components/Add-To-Cart-Button/Add-To-Cart-Image-Card/Add-To-Cart-Image-Card";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "@/lib/types";
import toast from "react-hot-toast";
import { resetCart } from "@/app/redux/nikeSlice";
import Button from "../Button/Button";
import PriceFormatter from "../Price-Formatter/Price-Formatter";
import { useEffect, useState } from "react";

export default function Cart({ session }: any) {
  const { cart } = useSelector((state: StoreState) => state?.nike);
  const [totalAmt, setTotalAmt] = useState(0);
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmed = window.confirm("are you sure to reset your Cart?");
    if (confirmed) {
      dispatch(resetCart());
      toast.success("Cart reset successfully");
    }
  };

  useEffect(() => {
    let price = 0;
    cart.map((item) => {
      price += item?.price * item?.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [cart]);

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        email: session?.user?.email,
      }),
    });
    const { url } = await response.json();
    if (url) {
      window.location.href = url;
    }
  };
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
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[18px] font-[500] text-gray-600">
                  Your cart is empty. 😔
                </p>
                <Link href="/">
                  <button className="mt-5 bg-black text-white px-5 py-2 rounded-full">
                    Start Shopping
                  </button>
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item._id}>
                  <AddToCartImageCard cart={cart} item={item} />
                </div>
              ))
            )}
            <button
              onClick={handleResetCart}
              className="hover:bg-black/80 hover:shadow-lg h-[35px] rounded-md w-[150px] bg-black text-white"
            >
              Reset Cart
            </button>
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
                  <PriceFormatter amount={totalAmt} />
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
                  <PriceFormatter amount={totalAmt} />
                </p>
              </div>
              <Button
                onClick={handleCheckout}
                disabled={!session?.user}
                className={`border-[#E5E5E5] mt-[40px] h-[40px] rounded-[20px] w-[100%] bg-black text-white ${!session?.user && "bg-black/70"}`}
              >
                Proceed to Checkout
              </Button>
              {!session?.user && (
                <p className="text-center text-[13px] text-red-500/80 font-medium mt-1">
                  Please sign in to make Checkout
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
