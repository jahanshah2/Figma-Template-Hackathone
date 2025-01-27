"use client";
import { Iproducts } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  getCartItem,
  removeCart,
  updateCartQuantity,
} from "../actions/addToCart";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { getProductLength } from "../actions/cartLength";


export default function Cart() {
  
  const [cartItems, setCartItems] = useState<Iproducts[]>([]);
  
  getProductLength(cartItems.length)
  
  
  
  useEffect(() => {
    setCartItems(getCartItem());
  }, []);

  const handleRemoveFromCart = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeCart(id);
        setCartItems(getCartItem());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQtyChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItem());
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory, 0
    );
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your order has been successfully processed",
          "success"
        );
      }
    });
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
            {cartItems.length === 0 ? (
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
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="py-[30px]  md:flex md:gap-x-5 md:py-[30px] border-b-[2px] last:border-0"
                >
                  <div>
                    <Image
                      src={urlFor(item.image).url()}
                      alt="product image"
                      height={140}
                      width={140}
                      className="h-[140px] w-[140px] md:h-[150px] md:pb-[20px] md:w-[150px]"
                    />
                  </div>
                  <div className="md:w-[100%]">
                    <div className="mt-2 flex justify-between md:flex md:justify-between md:mt-2">
                      <p className="text-[15px] font-[500] md:text-[15px] md:font-[500]">
                        {item.productName}
                      </p>
                      <p className="font-[400] text-[15px] md:font-[400] md:text-[15px]">
                        MRP: ₹ {item.price}
                      </p>
                    </div>
                    <div className="mt-3 font-[400] text-[16px] text-[#757575] w-[200px] md:font-[400] md:text-[14px] md:mt-0 md:text-[#757575] md:w-[250px]">
                      <p className="mt-1 md:mt-1">{item.category}</p>
                      <p className="mt-1 md:mt-1">{item.colors}</p>
                      <div className="mt-3 flex justify-between md:mt-2 md:flex md:justify-between">
                        <div className="flex gap-2 md:flex md:gap-2">
                          <p>Size</p>
                          <p>L</p>
                        </div>
                        <div className="flex gap-2 md:flex md:gap-2">
                          <p>Quantity</p>
                          <input
                            type="number"
                            min="1"
                            value={item.inventory}
                            onChange={(e) =>
                              handleQtyChange(item._id, Number(e.target.value))
                            }
                            className="w-16 text-center border rounded"
                          />
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
                        <button onClick={() => handleRemoveFromCart(item._id)}>
                          <Image
                            src={"/Frame.Delete-Icon.svg"}
                            alt="product image"
                            height={15}
                            width={15}
                            className="h-[25px] w-[25px] md:h-[15px] md:w-[15px]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
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
                  ₹ {calculatedTotal().toLocaleString("en-IN")}
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
                  ₹ {calculatedTotal().toLocaleString("en-IN")}
                </p>
              </div>
              <button
                onClick={handleProceed}
                className="border-[#E5E5E5] mt-[40px] h-[40px] rounded-[20px] w-[100%] bg-black text-white"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

