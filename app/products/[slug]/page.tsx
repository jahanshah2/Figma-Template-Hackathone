"use client";
import { Iproducts } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { addToCart } from "../../actions/addToCart";
import swal from "sweetalert2";

export default function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [products, setProduct] = useState<Iproducts>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { slug } = await params;
        if (!slug) {
          console.error("Slug not found in params");
          return;
        }

        const res = await client.fetch(
          `*[_type == 'product' && _id == "${slug}"]`
        );
        if (res && res.length > 0) {
          setProduct(res[0]); // Assuming res is an array
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [params]);

  const handleAddToCart = (e: React.MouseEvent, product: Iproducts) => {
    e.preventDefault();
    swal.fire({
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 2000
    });
    addToCart(product);
  };

  return (
    <div className="md:max-w-[1280px] mx-auto">
      <div className="px-5 mt-10 md:px-28 md:my-32">
        <div className="md:flex">
          <div className="flex justify-center md:flex md:justify-start md:w-[50%] ">
            {products?.image && (
              <Image
                src={urlFor(products.image).url()}
                alt={products.productName || ""}
                height={500}
                width={500}
                className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:h-[450px] md:w-fit md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
              />
            )}
          </div>
          <div className="md:w-[50%] md:pl-[50px] md:pr-[110px] text-[#111111]">
            <h1 className="mt-7 font-[500] md:font-[500] md:mt-0 text-[45px] leading-[50px]">
              {products?.productName}
            </h1>
            <p className="text-[17px] tracking-wider font-[400] mt-6 md:text-[15px] md:font-[400] md:mt-6">
              {products?.description}
            </p>
            <h2 className="font-[500] text-[25px] mt-4 md:font-[500] md:text-[25px] md:mt-4">
              ₹ {products?.price}
            </h2>
            <button
              onClick={(e) => products && handleAddToCart(e, products)}
              className="mt-6 flex bg-black py-[7.5px] px-[22.5px] rounded-[25px] font-[500] text-[15px] md:mt-6 md:py-[7.5px] md:px-[30px] md:font-[500] md:text-[15px] text-white md:flex space-x-2 hover:bg-[#333333]"
            >
              <Image
                src={"/Add-to-Cart-Icon.svg"}
                alt="image"
                height={20}
                width={20}
                className=""
              />
              <span className="relative z-10"> Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
