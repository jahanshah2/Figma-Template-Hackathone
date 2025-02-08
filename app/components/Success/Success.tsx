"use client";
import { resetCart } from "@/app/redux/nikeSlice";
import { StoreState } from "@/lib/types";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import {
  HiCheckCircle,
  HiHome,
  HiInformationCircle,
  HiMail,
} from "react-icons/hi";
import Link from "next/link";
import toast from "react-hot-toast";

const Success = ({ id }: { id: string }) => {
  const { cart } = useSelector((state: StoreState) => state?.nike);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [totalAmt, setTotalAmt] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let price = 0;
    cart.map((item) => {
      price += item?.price * item?.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [cart]);

  const handleSaveOrder = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/saveorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
          email: session?.user?.email as string,
          id: id,
          totalAmt,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setLoading(false);
        dispatch(resetCart());
        toast.success(data.message);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  }, [cart, session?.user?.email, id, totalAmt, dispatch]);

  useEffect(() => {
    if (session?.user && cart.length) {
      handleSaveOrder();
    }
  }, [session?.user, cart.length, handleSaveOrder]);

  return (
    <div>
      {loading ? (
        <Loader title="Payment is processing... Please do not press back button" />
      ) : (
        <div className="bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-28">
          <div className="max-w-md w-full space-y-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center">
                <HiCheckCircle className="h-24 w-24 text-green-600" />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Success!
              </h2>
              <p className="text-sm mt-4 text-gray-600">
                Your payment has been completed successfully.
              </p>
              <div className="space-y-5">
                <p className=" text-base mt-4 text-gray-700">
                  Thank you for your submission. We&apos;ve received your
                  information and will process is shortly.You should receive a
                  confirmation email within the next few minutes.
                </p>
                <div className=" flex flex-wrap justify-center gap-4">
                  <Link href={"/"}>
                    <button className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white transition duration-300 ease-in-out transform font-samibold rounded-lg shadow-md hover:-translate-y-1">
                      <HiHome className="mr-2 h-5 w-5" />
                      Home
                    </button>
                  </Link>
                  <Link href={"/orders"}>
                    <button className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white transition duration-300 ease-in-out transform font-samibold rounded-lg shadow-md hover:-translate-y-1">
                      <HiInformationCircle className="mr-2 h-5 w-5" />
                      Orders
                    </button>
                  </Link>
                  <Link href={"/contact"}>
                    <button className="inline-flex items-center px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white transition duration-300 ease-in-out transform font-samibold rounded-lg shadow-md hover:-translate-y-1">
                      <HiMail className="mr-2 h-5 w-5" />
                      Contact
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-10 flex justify-center space-x-4">
                <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;
