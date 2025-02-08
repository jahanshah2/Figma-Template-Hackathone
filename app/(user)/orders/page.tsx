import Orders from "@/app/components/Orders/Orders";
import React from "react";

const OrderPage = () => {
  return (
    <>
      <div className="md:max-w-[1280px] mx-auto py-10">
        <div className="px-[20px] md:px-14">
          <h2 className=" text-2xl font-semibold">Your Orders</h2>
          <Orders />
        </div>
      </div>
    </>
  );
};

export default OrderPage;
