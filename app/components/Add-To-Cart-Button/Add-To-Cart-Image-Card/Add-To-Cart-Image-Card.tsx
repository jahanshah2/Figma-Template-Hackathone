import Image from "next/image";
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { urlFor } from "@/sanity/lib/image";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/app/redux/nikeSlice";
import toast from "react-hot-toast";
import PriceFormatter from "@/app/components/Price-Formatter/Price-Formatter";
import { Iproducts } from "@/lib/types";

interface Props {
  cart: Iproducts[];
  item: Iproducts;
}

const AddToCartImageCard = ({ cart, item }: Props) => {
  const [existingProduct, setExistingProduct] = useState<Iproducts | null>(
    null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const availableProduct = cart.find(
        (product) => product._id === item._id
    );
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, item]);

  const handleMinus = () => {
    if ((existingProduct?.quantity as number) > 1) {
      dispatch(decreaseQuantity({_id:item._id}));
      toast.success("Quantity decreased successfully");
    } else {
      toast.error("Quantity can not decrease less then 1");
    }
  };

  return (
    <div className="py-[30px]  md:flex md:gap-x-5 md:py-[30px] border-b-[2px] last:border-0">
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
            <PriceFormatter amount={item.quantity * item.price} />
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
            <div className="flex items-center gap-2">
              <p>Quantity</p>
              <div className="flex items-center">
                <button
                  className="px-2 bg-gray-200 hover:bg-gray-300 rounded-sm"
                  onClick={handleMinus}
                >
                  -
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  className="px-2 bg-gray-200 hover:bg-gray-300 rounded-sm"
                  onClick={() => {
                    dispatch(increaseQuantity({_id:item._id}));
                    toast.success("Quantity increased successfully");
                  }}
                >
                  +
                </button>
              </div>
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
            <button>
              <Image
                src={"/Frame.Delete-Icon.svg"}
                alt="product image"
                height={15}
                width={15}
                onClick={() => {
                  dispatch(removeFromCart(item._id));
                  toast.success(
                    `${item.productName.substring(0, 12)}...Removed from cart`
                  );
                }}
                className="h-[25px] w-[25px] md:h-[15px] md:w-[15px] "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartImageCard;
