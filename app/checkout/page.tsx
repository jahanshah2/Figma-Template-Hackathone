import Image from "next/image";
import React from "react";

export default function CheckOut() {
  return (
    <>
      <div className="md:max-w-[1280px] mx-auto">
        <div className="px-[20px] md:flex md:justify-between md:px-[250px]">
          <div className="md:w-[50%]">
            <h1 className="mt-[20px] text-[22px] font-[500] md:text-[21px] md:font-[500]">
              How would you like to get your order?
            </h1>
            <p className="text-[16px] font-[400] text-[#757575] mt-[10px] md:text-[15px] md:font-[400] md:text-[#757575] md:mt-[10px]">
              Customs regulation for India require a copy of the recipient's
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.
              <span className="underline-offset-2 underline">Learn More</span>
            </p>
            <div className="text-[16px] font-[500] flex items-center gap-3 py-[20px] pl-[20px] my-[20px] md:text-[15px] md:font-[500] md:flex md:items-center md:gap-3 md:py-[20px] md:pl-[20px] border-black border-[1.5px] rounded-md md:my-[20px]">
              <Image
                src={"/Group-Delivery-Icon.svg"}
                alt="product image"
                height={20}
                width={20}
                className="h-[25px] w-[25px] md:h-[20px] md:w-[20px]"
              />
              <p>Deliver It</p>
            </div>
            <div className="mt-[30px] md:mt-[30px]">
              <h2 className="text-[22px] font-[500] md:text-[21px] md:font-[500]">
                Enter your name and address:
              </h2>
              <input
                type="text"
                placeholder="First Name"
                className="border-[#E5E5E5] mt-[20px] h-[45px] rounded-[3px] pl-[30px] w-[100%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-[#E5E5E5] mt-[20px] h-[45px] rounded-[3px] pl-[30px] w-[100%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className="border-[#E5E5E5] mt-[20px] h-[45px] rounded-[3px] pl-[30px] w-[100%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
              />
              <p className="font-[400] my-[7px] text-[#757575] ml-[20px] text-[13px] md:font-[400] md:my-[7px] md:text-[#757575] md:ml-[20px] md:text-[11px]">
                We do not ship to P.O. boxes
              </p>
              <input
                type="text"
                placeholder="Address Line 2"
                className="border-[#E5E5E5] h-[45px] rounded-[3px] pl-[30px] w-[100%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
              />
              <input
                type="text"
                placeholder="Address Line 3"
                className="border-[#E5E5E5] mt-[20px] h-[45px] rounded-[3px] pl-[30px] w-[100%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
              />
              <div className="flex justify-between md:flex md:justify-between">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border-[#E5E5E5] mt-[20px] h-[45px] rounded-[3px] pl-[30px] w-[48%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[48%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="border-[#E5E5E5] mt-[20px] h-[45px] rounded-[3px] pl-[30px] w-[48%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[48%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
                />
              </div>
              <div className="flex justify-between md:flex md:justify-between">
                <input
                  type="text"
                  placeholder="State/Territory"
                  className="border-[#E5E5E5] mt-[20px] h-[45px] rounded-[3px] pl-[30px] w-[48%] text-[14px] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[48%] md:text-[14px] focus-visible:outline-none"
                />
                <input
                  type="text"
                  placeholder="India"
                  className="border-[#E5E5E5] mt-[20px] h-[45px] rounded-[3px] pl-[30px] w-[48%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[48%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
                />
              </div>
              <div className="flex mt-[20px] items-center md:flex md:mt-[20px] md:items-center gap-2">
                <input
                  type="checkbox"
                  className="border-[#E5E5E5] rounded-[3px] h-[20px] w-[20px] md:border-[#E5E5E5] border-[1px] md:rounded-[3px] md:h-[15px] md:w-[15px]"
                />
                <p className="text-[15px] font-[400] md:text-[14px] md:font-[400]">
                  Save this address to my profile
                </p>
              </div>
              <div className="flex mt-[20px] items-center md:flex md:mt-[20px] md:items-center gap-2">
                <input
                  type="checkbox"
                  className="border-[#E5E5E5] rounded-[3px] h-[20px] w-[20px] md:border-[#E5E5E5] border-[1px] md:rounded-[3px] md:h-[15px] md:w-[15px]"
                />
                <p className="text-[15px] font-[400] md:text-[14px] md:font-[400]">
                  Make this my preferred address
                </p>
              </div>
              <div className="mt-[30px] md:mt-[30px]">
                <h2 className="text-[22px] font-[500] md:text-[21px] md:font-[500]">
                  What's your contact information?
                </h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="border-[#E5E5E5] mt-[20px] h-[45px] rounded-[3px] pl-[30px] w-[100%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
                />
                <p className="font-[400] my-[7px] text-[#757575] ml-[20px] text-[13px] md:font-[400] md:my-[7px] md:text-[#757575] md:ml-[20px] md:text-[11px]">
                  A confirmation email will be sent after checkout.
                </p>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="border-[#E5E5E5] h-[45px] rounded-[3px] pl-[30px] w-[100%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
                />
                <p className="font-[400] my-[7px] text-[#757575] ml-[20px] text-[13px] md:font-[400] md:my-[7px] md:text-[#757575] md:ml-[20px] md:text-[11px]">
                  A carrier might contact you to confirm delivery.
                </p>
              </div>
              <div className="mt-[30px] md:mt-[30px]">
                <h2 className="text-[22px] font-[500] md:text-[21px] md:font-[500]">
                  What's your contact information?
                </h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="border-[#E5E5E5] mt-[20px] h-[45px] rounded-[3px] pl-[30px] w-[100%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
                />
                <p className="font-[400] my-[7px] text-[#757575] ml-[20px] text-[13px] md:font-[400] md:my-[7px] md:text-[#757575] md:ml-[20px] md:text-[11px]">
                  A confirmation email will be sent after checkout.
                </p>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="border-[#E5E5E5] h-[45px] rounded-[3px] pl-[30px] w-[100%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
                />
                <p className="font-[400] mt-[7px] text-[#757575] ml-[20px] text-[13px] md:font-[400] md:mt-[7px] md:text-[#757575] md:ml-[20px] md:text-[11px]">
                  A carrier might contact you to confirm delivery.
                </p>
              </div>
              <div className="mt-[30px] md:mt-[30px]">
                <h2 className="text-[22px] font-[500] md:text-[21px] md:font-[500]">
                  What's your PAN?
                </h2>
                <input
                  type="email"
                  placeholder="PAN"
                  className="border-[#E5E5E5] mt-[20px] h-[45px] rounded-[3px] pl-[30px] w-[100%] placeholder:text-black text-[14px] md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[3px] md:pl-[30px] md:w-[100%] md:placeholder:text-black md:text-[14px] focus-visible:outline-none"
                />
                <p className="font-[400] my-[7px] text-[#757575] ml-[20px] text-[13px] md:font-[400] md:my-[7px] md:text-[#757575] md:ml-[20px] md:text-[11px]">
                  Enter your PAN to enable payment with UPI, Net Banking or
                  local card methods
                </p>
                <div className="flex mt-[20px] items-center md:flex md:mt-[20px] md:items-center gap-2">
                  <input
                    type="checkbox"
                    className="border-[#E5E5E5] rounded-[3px] h-[20px] w-[20px] md:border-[#E5E5E5] border-[1px] md:rounded-[3px] md:h-[15px] md:w-[15px]"
                  />
                  <p className="text-[#757575] text-[13px] font-[400] md:text-[#757575] md:text-[11px] md:font-[400]">
                    Save PAN details to Nike Profile
                  </p>
                </div>
                <div className="flex mt-[40px] md:flex md:mt-[40px] gap-2">
                  <input
                    type="checkbox"
                    className="border-[#E5E5E5] rounded-[3px] h-[20px] w-[20px] md:border-[#E5E5E5] border-[1px] md:rounded-[3px] md:h-[15px] md:w-[15px]"
                  />
                  <p className="text-[#757575] text-[13px] w-[90%] font-[400] md:text-[#757575] md:text-[11px] md:font-[400]">
                    I have read and consent to eShopWorld processing my
                    information in accordance with the{" "}
                    <span className="underline">Privacy Statement</span> and
                    <span className="underline"> Cookie Policy</span>.
                    eShopWorld is a trusted Nike partner.
                  </p>
                </div>
                <button className="mt-[40px] h-[45px] rounded-[20px] w-[100%] md:mt-[40px] md:h-[40px] md:rounded-[20px] md:w-[100%] bg-[#F5F5F5] text-[#757575]">
                  Continue
                </button>
              </div>
              <div>
                <h3 className="font-[500] text-[21px] mt-[40px] pt-[15px] pb-[30px] border-y-[1.5px]  md:font-[500] md:text-[20px] md:mt-[30px] md:pt-[15px] md:pb-[30px] md:border-y-[1.5px] ">
                  Delivery
                </h3>
                <p className="font-[400] text-[21px] text-[#757575] pt-[15px] pb-[30px] border-b-[1.5px]  md:font-[400] md:text-[21px] md:text-[#757575] md:pt-[15px] md:pb-[30px] md:border-b-[1.5px] ">
                  Shipping
                </p>
                <p className="font-[400] text-[21px] text-[#757575] pt-[15px] pb-[30px] border-b-[1.5px]  md:font-[400] md:text-[21px] md:text-[#757575] md:pt-[15px] md:pb-[30px] md:border-b-[1.5px] ">
                  Billing
                </p>
                <p className="font-[400] text-[21px] text-[#757575] pt-[15px] pb-[30px] border-b-[1.5px]  md:font-[400] md:text-[21px] md:text-[#757575] md:pt-[15px] md:mb-[100px] md:pb-[30px] md:border-b-[1.5px] ">
                  Payment
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[40%]">
            <div>
              <h3 className="text-[22px] font-[500] mt-[40px] md:text-[21px] md:font-[500] md:mt-[20px]">
                Order Summary
              </h3>
              <div className="flex justify-between font-[400] text-[16px] text-[#8D8D8D] mt-[15px] md:flex md:justify-between md:font-[400] md:text-[15px] md:text-[#8D8D8D] md:mt-[15px]">
                <p>Subtotal</p>
                <p>₹ 20 890.00</p>
              </div>
              <div className="flex justify-between font-[400] text-[16px] text-[#8D8D8D] mt-[15px] md:flex md:justify-between md:font-[400] md:text-[15px] md:text-[#8D8D8D] md:mt-[15px]">
                <p>Delivery/Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between font-[500] text-[16px] mt-[15px] py-[15px] border-y-[1.5px] md:flex md:justify-between md:font-[500] md:text-[15px] md:mt-[15px] md:py-[15px] md:border-y-[1.5px]">
                <p>Total</p>
                <p>₹ 20 890.00</p>
              </div>
              <p className="font-[400] text-[13px] mt-[15px] md:font-[400] md:text-[11px] md:mt-[15px]">
                (The total reflects the price of your order, including all
                duties and taxes)
              </p>
            </div>
            <div className="mb-[100px] mt-[20px] md:mt-[20px] md:mb-[0px]">
              <h3 className="text-[16px] font-[700] md:text-[15px] md:font-[700]">
                Arrives Mon, 27 Mar - Wed, 12 Apr
              </h3>
              <div className="mt-[10px] md:mt-[10px] md:flex md:gap-2">
                <div>
                  <Image
                    src={"/Frame-Checkout-product.svg"}
                    alt="product image"
                    height={200}
                    width={200}
                    className="h-[300px] w-[300px] md:h-[200px] md:w-[200px]"
                  />
                </div>
                <div className="mt-[20px] text-[15px] w-[300px] font-[400] md:w-[25%] md:mt-0 md:text-[13px] md:font-[400]">
                  <p>
                    Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running
                    Top
                  </p>
                  <div className="flex mt-[5px] text-[15px] gap-5 text-[#8D8D8D] md:flex md:mt-[5px] md:text-[13px] md:gap-2 md:text-[#8D8D8D]">
                    <p>Qty</p>
                    <p>1</p>
                  </div>
                  <div className="flex mt-[5px] text-[15px] gap-5 text-[#8D8D8D] md:flex md:mt-[5px] md:text-[13px] md:gap-2 md:text-[#8D8D8D]">
                    <p>Size</p>
                    <p>L</p>
                  </div>
                  <p className="mt-[10px] text-[#8D8D8D] text-[17px] md:mt-[10px] md:text-[13px] md:text-[#8D8D8D]">
                    ₹ 3 895.00
                  </p>
                </div>
              </div>
              <div className="mt-[20px] md:mt-[10px] md:flex md:gap-2">
                <div>
                  <Image
                    src={"/Frame-Chectout-product-2.svg"}
                    alt="product image"
                    height={200}
                    width={200}
                    className="h-[300px] w-[300px] md:h-[200px] md:w-[200px]"
                  />
                </div>
                <div className="mt-[20px] text-[15px] font-[400] md:w-[25%] md:mt-0 md:text-[13px] md:font-[400]">
                  <p>Nike Air Max 97 SE Men's Shoes</p>
                  <div className="flex mt-[5px] text-[15px] gap-5 text-[#8D8D8D] md:flex md:mt-[5px] md:text-[13px] md:gap-2 md:text-[#8D8D8D]">
                    <p>Qty</p>
                    <p>1</p>
                  </div>
                  <div className="flex mt-[5px] text-[15px] gap-5 text-[#8D8D8D] md:flex md:mt-[5px] md:text-[13px] md:gap-2 md:text-[#8D8D8D]">
                    <p>Size</p>
                    <p>L</p>
                  </div>
                  <p className="mt-[10px] text-[17px] text-[#8D8D8D] md:mt-[10px] md:text-[13px] md:text-[#8D8D8D]">
                    ₹ 3 895.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
